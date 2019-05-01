define(['knockout', 'jquery', 'common/config', 'moment', './editTicket', './conversationModal'], function (ko, $, config, moment, TicketModal, ConversationModal) {
    var subscriptions = [],
        availableAdmins = ko.observableArray([]),
        selectedAdmin = ko.observable(''),
        openTickets = ko.observableArray([]),
        closedTickets = ko.observableArray([]),
        compComplete = ko.observable(false);

    var activate = function () {
        if (availableAdmins().length == 0) {
            getAdmins();
        }
        if (compComplete()) {
            getOpenTickets();
            getClosedTickets();
        }
        subscriptions.push(selectedAdmin.subscribe(function (newValue) {
            if (newValue !== '' && newValue !== undefined) {
                getOpenTickets();
                getClosedTickets();
            }
        }));
        subscriptions.push(openTickets.subscribe(function () {
            buildOpenTickets();
        }));
        subscriptions.push(closedTickets.subscribe(function () {
            buildClosedTickets();
        }));
        
        return true;
    };
    var compositionComplete = function () {
        compComplete(true);
    };
    var deactivate = function () {
        for (var i = 0, len = subscriptions.length; i < len; i++) {
            if (subscriptions[i].dispose && typeof subscriptions[i].dispose == 'function') {
                subscriptions[i].dispose();
            }
        }
        subscriptions = [];
    };

    var getAdmins = function () {
        return $.ajax({
            type: "GET",
            url: config.webservice() + "v1/Agent/Dropdown/Admin",
            success: function (data, status, request) {
                var a = [];
                if (data.Agents) {
                    a = data.Agents;
                    a.splice(0, 0, { AgentId: 0, AgentName: 'All' });
                }
                availableAdmins(a);
                ko.utils.arrayForEach(availableAdmins(), function (a) {
                    if (a.AgentId === config.agent.agentId()) {
                        selectedAdmin(a);
                    }
                });
            }
        });
    };
    var getOpenTickets = function () {
        return $.ajax({
            type: "GET",
            url: config.webservice() + "v1/Ticket/" + selectedAdmin().AgentId + "/open",
            success: function (data, status, request) {
                if (data.Ticket) {
                    var a = [];
                    ko.utils.arrayForEach(data.Ticket, function (data) {
                        data.CreatedDate = moment(data.CreatedDate).format('MM/DD/YYYY');
                        if (data.ModifiedDate === '0001-01-01T00:00:00.0000000') {
                            data.ModifiedDate = '';
                        }
                        else {
                            data.ModifiedDate = moment(data.ModifiedDate).format('MM/DD/YYYY');
                        }
                        a.push(data);
                    });
                    openTickets(a);
                }
                else {
                    openTickets([]);
                }
            },
            error: function () {
                openTickets([]);
            }
        });
    };
    var getClosedTickets = function () {
        return $.ajax({
            type: "GET",
            url: config.webservice() + "v1/Ticket/" + selectedAdmin().AgentId + "/closed",
            success: function (data, status, request) {
                if (data.Ticket) {
                    var a = [];
                    ko.utils.arrayForEach(data.Ticket, function (data) {
                        data.CreatedDate = moment(data.CreatedDate).format('MM/DD/YYYY');
                        if (data.ModifiedDate === '0001-01-01T00:00:00.0000000') {
                            data.ModifiedDate = '';
                        }
                        else {
                            data.ModifiedDate = moment(data.ModifiedDate).format('MM/DD/YYYY');
                        }
                        a.push(data);
                    });
                    closedTickets(a);
                }
                else {
                    closedTickets([]);
                }
            },
            error: function () {
                closedTickets([]);
            }
        });
    };

    var buildOpenTickets = function () {
        $('#tblOpenTickets').off('click', 'button.ticket');
        var tbl = $('#tblOpenTickets').DataTable({
            "sDom": "<'table-header clearfix padding-xxs-hr padding-xxs-vr'<'DT-search'f>>t<'table-footer clearfix'<'row'<'col-lg-6'<'DT-label'i>><'col-lg-6'<'DT-pagination'p>>><'row'<'col-lg-6'l><'col-lg-6'f>>>",
            retrieve: true,
            "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            "lengthChange": true,
            "pagingType": "full_numbers",
            "autoWidth": false,
            columns: [
                { data: 'TicketId' },
                { data: 'CreatedDate' },
                { data: 'TicketType' },
                { data: 'AgentName' },
                { data: 'Description' },
                {
                    data: null,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            return '<button type="button" data-row="' + meta.row + '" class="btn btn-default btn-sm ticket"><i class="fa fa-fw fa-edit"></i>&nbsp;Edit</button>';
                        }
                        return data;
                    },
                    orderable: false
                },
                {
                    data: null,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            if (data.AdminHasRead == false && data.AgentHasRead == false) {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments-o"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == true && data.AdminHasRead == false && data.AgentHasRead == true) {
                                return '<button class="text-info btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == true && data.AdminHasRead == true) {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == false && data.AgentHasRead == true) {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == false && data.AgentHasRead == false) {
                                return '<button class="text-info btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments-o"></i>&nbsp;Messages</button>';
                            }
                        }
                        return data;
                    },
                    orderable: false
                }
            ],
            order: []
        });

        tbl.clear();
        tbl.rows.add(openTickets());
        tbl.draw();

        $('#tblOpenTickets').on('click', 'button.ticket', function () {
            var tbl = $('#tblOpenTickets').DataTable();
            var r = tbl.row(this.dataset.row).data();
            TicketModal.show(r).then(function (d) {
                if (d) {
                    d.CreatedDate = moment(d.CreatedDate).format('MM/DD/YYYY');
                    d.ModifiedDate = moment(d.ModifiedDate).format('MM/DD/YYYY');
                    if (d.IsClosed) {
                        var match = ko.utils.arrayFirst(openTickets(), function (t) {
                            return t.TicketId === d.TicketId;
                        });

                        openTickets.remove(match);
                        closedTickets.push(d);
                    } else {
                        openTickets.replace(r, d);
                    }
                }
            });
        });

        $('#tblOpenTickets').off('click', 'button.conversation');
        $('#tblOpenTickets').on('click', 'button.conversation', function (e) {
            var tbl = $('#tblOpenTickets').DataTable();
            var item = tbl.row(this.dataset.row).data();

            ConversationModal.show(item).then(function (d) {
                //nothing to do here...move along folks
            });
        });
    };
    var buildClosedTickets = function () {
        var tbl = $('#tblClosedTickets').DataTable({
            "sDom": "<'table-header clearfix padding-xxs-hr padding-xxs-vr'<'DT-search'f>>t<'table-footer clearfix'<'row'<'col-lg-6'<'DT-label'i>><'col-lg-6'<'DT-pagination'p>>><'row'<'col-lg-6'l><'col-lg-6'f>>>",
            retrieve: true,
            "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            "lengthChange": true,
            "pagingType": "full_numbers",
            "autoWidth": false,
            columns: [
                { data: 'TicketId' },
                { data: 'CreatedDate' },
                { data: 'TicketType' },
                { data: 'AgentName' },
                { data: 'Description' },
                { data: 'Resolution' },
                { data: 'ModifiedDate' },
                {
                    data: null,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            if (data.AdminHasRead == false && data.AgentHasRead == false) {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments-o"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == true && data.AdminHasRead == false && data.AgentHasRead == true) {
                                return '<button class="text-info btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == true && data.AdminHasRead == true) {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == false && data.AgentHasRead == true) {
                                return '<button class="btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                            else if (config.agent.isAdmin() == false && data.AgentHasRead == false) {
                                return '<button class="text-info btn btn-xs conversation" data-row="' + meta.row + '"><i class="fa fa-comments"></i>&nbsp;Messages</button>';
                            }
                        }
                        return data;
                    },
                    orderable: false
                }
            ],
            order: []
        });

        tbl.clear();
        tbl.rows.add(closedTickets());
        tbl.draw();

        $('#tblClosedTickets').off('click', 'button.conversation');
        $('#tblClosedTickets').on('click', 'button.conversation', function (e) {
            var tbl = $('#tblClosedTickets').DataTable();
            var item = tbl.row(this.dataset.row).data();

            ConversationModal.show(item).then(function (d) {
                //nothing to do here...move along folks
            });
        });
    };

    function clearData() {
        openTickets([]);
        closedTickets([]);
    }

    return {
        activate: activate,
        compositionComplete: compositionComplete,
        deactivate: deactivate,
        availableAdmins: availableAdmins,
        selectedAdmin: selectedAdmin
    }
});
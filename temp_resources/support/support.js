define(['knockout', 'jquery', 'common/config', 'moment', './conversationModal'], function (ko, $, config, moment, ConversationModal) {
    var subscriptions = [],
        compComplete = ko.observable(false),
        availableTicketTypes = ko.observableArray([]),
        selectedTicketType = ko.observable(),
        isFollowUp = ko.observable('false'),
        ticketMsg = ko.observable(''),
        userTickets = ko.observableArray([]);
        submitted = ko.observable('false');

    var activate = function () {
        if (availableTicketTypes().length == 0) {
            getTicketTypes();
        }
        if (compComplete()) {
            getUserTickets();
        }
        subscriptions.push(userTickets.subscribe(function () {
            buildUserTickets();
        }));

        return true;
    };
    var compositionComplete = function () {
        compComplete(true);
        getUserTickets();
    };
    var deactivate = function () {
        for (var i = 0, len = subscriptions.length; i < len; i++) {
            if (subscriptions[i].dispose && typeof subscriptions[i].dispose == 'function') {
                subscriptions[i].dispose();
            }
        }
        subscriptions = [];
    };

    var getTicketTypes = function () {
        return $.ajax({
            type: "GET",
            url: config.webservice() + "v1/TicketType",
            success: function (data, status, request) {
                if (data.TicketType) {
                    availableTicketTypes(data.TicketType);
                }
                else {
                    availableTicketTypes([]);
                }
            },
            error: function () {
                $.growl.error({ title: 'Error!', message: "There was a problem retrieving ticket types. Please refresh your page and try again." });
            }
        });
    };
    var getUserTickets = function () {
        return $.ajax({
            type: "GET",
            url: config.webservice() + "v1/Ticket/" + config.agent.agentId() + '/all',
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
                    userTickets(a);
                }
                else {
                    userTickets([]);
                }
            },
            error: function () {
                userTickets([]);
            }
        });
    };

    var buildUserTickets = function () {
        var tbl = $('#tblUserTickets').DataTable({
            retrieve: true,
            "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            "lengthChange": true,
            "pagingType": "full_numbers",
            "autoWidth": false,
            columns: [
                { data: 'CreatedDate' },
                { data: 'TicketType' },
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
                    }
                }
            ],
            order: []
        });

        tbl.clear();
        tbl.rows.add(userTickets());
        tbl.draw();

        $('#tblUserTickets').off('click', 'button.conversation');
        $('#tblUserTickets').on('click', 'button.conversation', function (e) {
            var tbl = $('#tblUserTickets').DataTable();
            var item = tbl.row(this.dataset.row).data();

            ConversationModal.show(item).then(function (d) {
                //nothing to do here...move along folks
            });
        });
    };

    var canSubmitTicket = ko.pureComputed(function () {
        return selectedTicketType() && ticketMsg().length > 0 && submitted() == 'false';
    });
    var submitTicket = function () {
        submitted('true');
        var dto = {
            Description: ticketMsg(),
            IsFollowup: isFollowUp(),
            TicketTypeId: selectedTicketType()
        }
        $.ajax({
            type: "POST",
            url: config.webservice() + "v1/Ticket",
            data: JSON.stringify({ Ticket: [dto] }),
            processData: false,
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
                        userTickets.push(data);
                    });
                    clearForm();
                    submitted('false');
                }
            },
            error: function () {
                $.growl.error({ title: 'Error!', message: "There was a problem submitting your support ticket. Please refresh your page and try again." });
                submitted('false');
            }
        });
    };

    var clearForm = function () {
        selectedTicketType(undefined);
        isFollowUp('false');
        ticketMsg('');
        submitted('false');
    };

    


    return {
        activate: activate,
        compositionComplete: compositionComplete,
        deactivate: deactivate,
        agent: config.agent,
        availableTicketTypes: availableTicketTypes,
        selectedTicketType: selectedTicketType,
        isFollowUp: isFollowUp,
        ticketMsg: ticketMsg,
        canSubmitTicket:canSubmitTicket,
        submitTicket: submitTicket,
        clearForm: clearForm
    }
});
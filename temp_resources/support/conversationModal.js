define(['plugins/dialog', 'knockout', 'moment', 'common/config', 'jquery', 'emitter'], function (dialog, ko, moment, config, $, Dropzone) {
    var ViewModel = function (data) {
        this.baseUrl = config.webservice() + 'v1/Conversation/';
        this.baseUrlHeader = config.webservice() + 'v1/ConversationHeader';
        this.baseUrlDetail = config.webservice() + 'v1/ConversationDetail';
        this.baseUrlAttachment = config.webservice() + 'v1/AttachmentDownload/';
        this.conversationHeaderId = ko.observable();
        this.conversationDetails = ko.observableArray([]);
        this.newComment = ko.observable('');
        this.loading = ko.observable(true);
        this.uploadingAttachment = ko.observable(false);
        $.extend(this, data);
        if (this.cache === undefined) {
            //conversation loaded from grid - add properties so attachment is linked to correct table and recordid
            this.cache = {};
            this.cache.tableName = "Ticket";
            this.cache.fieldName = "TicketId";
            this.ID = this.TicketId;
            this.HasConversation = ko.observable(true);
            this.HasAdminMsg = ko.observable(false);
            this.HasAgentMsg = ko.observable(false);
        }
    };

    ViewModel.prototype.activate = function () {
        var self = this;
        $.ajax({
            type: 'GET',
            url: self.baseUrl + self.cache.tableName + '/' + self.cache.fieldName + '/' + self.ID,
            success: function (data) {
                if (data.Conversation) {
                    self.conversationHeaderId(data.Conversation.ConversationHeaderId);
                    data.Conversation.Details.sort(function (a, b) {
                        if (a.DateCreated < b.DateCreated) {
                            return -1;
                        }
                        if (a.DateCreated > b.DateCreated) {
                            return 1;
                        }
                        return 0;
                    });
                    self.conversationDetails(data.Conversation.Details);
                    if (config.agent.isAdmin()) {
                        self.HasAdminMsg(false);
                    } else {
                        self.HasAgentMsg(false);
                    }
                }
            },
            complete: function () {
                self.loading(false);
            }
        });
        return true;
    };

    ViewModel.prototype.compositionComplete = function () {
        var self = this;
        Dropzone.autoDiscover = false;
        self.myDropzone = new Dropzone('#dzConversation', { //this makes the entire modal a dropzone
            url: config.webservice() + 'v1/ConversationDetail',
            clickable: '#convDropboxBtn',
            autoProcessQueue: true,
            withCredentials: true,
            uploadMultiple: false,
            maxFilesize: 35,
            addRemoveLinks: false,
            acceptedFiles: '.pdf',
            dictResponseError: "Can't upload file!",
            accept: function (file, done) {
                if (this.files[1] != null) {
                    this.removeFile(this.files[0]);
                }
                if (self.conversationHeaderId() === '00000000000000000000000000000000') {
                    var h = {
                        TableName: self.cache.tableName,
                        FieldName: self.cache.fieldName,
                        RecordId: self.ID
                    }
                    $.when(self.newConversation(h)).then(function (data) {
                        if (data.ConversationHeader) {
                            self.conversationHeaderId(data.ConversationHeader.ConversationHeaderId);
                            self.HasConversation(true);
                            done();
                        }
                    });
                } else {
                    done();
                }
            }
        });
        self.myDropzone.on('success', function (file, response) {
            this.removeFile(file);
            if (response.ResponseStatus.Errors.length == 0) {
                if (response.ConversationDetail) {
                    self.conversationDetails.push(response.ConversationDetail);
                }
                if (config.agent.isAdmin() === false) {
                    //since this is an agent attaching a document update smartsheet record to HasChange = true to notify admins of record change
                    var svcEndPoint = 'v1/Ticket'; 

                    var dto = {
                        RecordId: self.ID,
                        Fields: { HasChange: 1 }
                    };

                    $.ajax({
                        type: 'PUT',
                        url: config.webservice() + svcEndPoint,
                        data: JSON.stringify(dto),
                        processData: false
                    });

                }
            }
            else {
                if (response.ResponseStatus.Errors.length > 0) {
                    $.growl.error({ message: response.ResponseStatus.Errors[0].Message });
                }
                else {
                    $.growl.error({ message: "Error adding attachment!" });
                }
            }
        });
        self.myDropzone.on('error', function (file, errorMessage, xhr) {
            $.growl.error({ title: 'Error adding attachment!', message: errorMessage });
            this.removeFile(file);
            if (xhr && xhr.status === 401) {
                document.location.reload(true);
            }
        });
        self.myDropzone.on("sending", function (file, xhr, formData) {
            self.uploadingAttachment(true);
            formData.append("ConversationDetail", "{}");
            formData.append("ConversationHeaderId", self.conversationHeaderId());
            formData.append("AttachmentComment", file.name + ' attached');
        });
        self.myDropzone.on("queuecomplete", function (progress) {
            self.uploadingAttachment(false);
        });

    };

    ViewModel.prototype.deactivate = function () {
        var self = this;
        self.myDropzone.disable();
        $('#txtCommentDZ').remove();
    };

    ViewModel.prototype.cancel = function () {
        dialog.close(this, this);
    };

    ViewModel.prototype.save = function () {
        $('#btnSaveComment').disable(true);
        var self = this;
                
        if (self.conversationHeaderId() === '00000000000000000000000000000000') {
            var h = {
                TableName: self.cache.tableName,
                FieldName: self.cache.fieldName,
                RecordId: self.ID
            }
            $.when(self.newConversation(h)).then(function (data) {
                if (data.ConversationHeader) {

                    self.conversationHeaderId(data.ConversationHeader.ConversationHeaderId);
                    
                    var d = {
                        ConversationHeaderId: self.conversationHeaderId(),
                        Comment: self.newComment()
                    }
                    $.when(self.saveComment(d)).then(function (data) {
                        if (data.ConversationDetail) {
                            self.conversationHeaderId(data.ConversationDetail.ConversationHeaderId);
                            self.conversationDetails.push(data.ConversationDetail);
                            self.HasConversation(true);
                            self.newComment('');
                        } else {
                            $.growl.error({ message: "Error adding comment!" });
                            $('#btnSaveComment').disable(false);
                        }
                    });
                }
                
            });
        } else {
            var d = {
                ConversationHeaderId: self.conversationHeaderId(),
                Comment: self.newComment()
            }
            $.when(self.saveComment(d)).then(function (data) {
                if (data.ConversationDetail) {
                    self.conversationHeaderId(data.ConversationDetail.ConversationHeaderId);
                    self.conversationDetails.push(data.ConversationDetail);
                    self.newComment('');
                } else {
                    $.growl.error({ message: "Error adding comment!" });
                    $('#btnSaveComment').disable(false);
                }
            });
        }

        

    };

    ViewModel.prototype.markAsUnread = function () {
        var self = this;
        $.ajax({
            type: 'GET',
            url: self.baseUrl + self.cache.tableName + '/' + self.cache.fieldName + '/' + self.ID + '?ReadFlag=0',
            success: function (data) {
                $.growl.notice({ title: 'Success!', message: 'Conversation marked as unread' });
                if (config.agent.isAdmin()) {
                    self.HasAdminMsg(true);
                } else {
                    self.HasAgentMsg(true);
                }
            }
        });
    };

    ViewModel.prototype.newConversation = function (h) {
        return $.ajax({
            type: 'POST',
            url: this.baseUrlHeader,
            data: JSON.stringify({ ConversationHeader: h }),
            processData: false
        });
    };

    ViewModel.prototype.saveComment = function (d) {
        return $.ajax({
            type: 'POST',
            url: this.baseUrlDetail,
            data: JSON.stringify({ ConversationDetail: d }),
            processData: false
        });
    };

    ViewModel.show = function (data) {
        return dialog.show(new ViewModel(data));
    };

    return ViewModel;
});
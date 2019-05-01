define(['plugins/dialog', 'knockout', 'moment', 'common/config', 'jquery', 'emitter'], function (dialog, ko, moment, config, $, Dropzone) {
    var ViewModel = function (data) {
        this.loading = ko.observable(false);
        this.loadingMessage = ko.observable('');
        $.extend(this, ko.mapping.fromJS(data));
    };

    ViewModel.prototype.cancel = function () {
        dialog.close(this, null);
    };

    ViewModel.prototype.save = function () {
        debugger;
        $('#btnSaveTicket').disable(true);
        var vm = this;
        
        $.when(vm.saveTicket()).then(function (data) {
            if (data.Ticket) {
                dialog.close(vm, data.Ticket[0]);
            } else {
                $.growl.error({ message: "Error saving ticket!" });
                $('#btnSaveTicket').disable(false);
            }
        });


    };

    ViewModel.prototype.saveTicket = function () {
        debugger;
        var vm = ko.mapping.toJS(this);
        return $.ajax({
            type: 'PUT',
            url: config.webservice() + 'v1/Ticket',
            data: JSON.stringify({ Ticket: [vm] }),
            processData: false
        });
    };

    ViewModel.show = function (data) {
        return dialog.show(new ViewModel(data));
    };

    return ViewModel;
});
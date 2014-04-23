angular.module('app').value('myToastr', toastr);

angular.module('app').factory('mvNotifier', function(myToastr) {
    return {
        notify: function(msg) {
            myToastr.success(msg);
            console.log(msg);
        },
        error: function(msg) {
            myToastr.error(msg);
            console.log(msg);
        }
    }
})
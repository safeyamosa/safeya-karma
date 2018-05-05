(function () {
    'use strict';

    angular
        .module('app')
        .factory('phoneService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        var url = "";
        return {
            getphones: function () {
                url = globalConfig.apiAddress + "/phone";
                return $http.get(url);
            },
            getphone: function (id) {
                url = globalConfig.apiAddress + "/phone/" + id;
                return $http.get(url);
            },
            createphone: function (phone) {
                url = globalConfig.apiAddress + "/phone";
                return $http.post(url, phone);
            },
            updatephone: function (phone) {
                url = globalConfig.apiAddress + "/phone/" + phone._id;
                return $http.put(url, phone);
            },
            deletephone: function (id) {
                url = globalConfig.apiAddress + "/phone/" + id;
                return $http.delete(url);
            },
            login: function (login) {
                console.log("hello");
                url = globalConfig.apiAddress + "/login" ;
                return $http.post(url,login);
                
            }
        };
    }
})();
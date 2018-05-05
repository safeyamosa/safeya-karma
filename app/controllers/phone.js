(function () {
    'use strict';

    angular
        .module('app')
        .controller('phoneController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'phoneService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, phoneService, $state, $stateParams) {
        $scope.phones = [];

        if ($state.current.name == "phones") {
            $rootScope.Title = "phone Listing";
            phoneService.getphones().then(function (res) {
                $scope.phones = res.data;
            }).catch(function (err) {
                console.log(err);
            });

            $scope.deletephone = function (id) {
                if (confirm('Are you sure to delete?')) {
                    phoneService.deletephone(id).then(function (res) {
                        if (res.data == "deleted") {
                            $state.go("phones", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };

            $scope.saveData = function (phone) {
                $scope.IsSubmit = true;
                if ($scope.phoneForm.$valid) {
                    phoneService.createphone(phone).then(function (res) {
                        if (res.data == "created") {
                            $state.go("phones", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                    //update
                    phoneService.updatephone(phone).then(function (res) {
                        if (res.data == "updated") {
                            $state.go("phones", {}, {
                                reload: true
                            });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            };

            $scope.edit = function (id) {
                
                phoneService.getphone(id).then(function (res) {
                    $scope.phone = res.data;
                }).catch(function (err) {
                    console.log(err);
                });
            };

            $scope.clearb = function () {
                $scope.phone = null;
            };

        } 
    }
})();
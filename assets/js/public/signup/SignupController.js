
var timeTable = angular.module("subscriptionApp",[]);
timeTable.controller("subscriptionController", function ($scope,$http) {
    $scope.choices = [{ subsid: '', type: '' }];
    $scope.units;

    $http.get("/api/v1/Subscription").then(function (response) {
        $scope.units = response.data;
    });

});
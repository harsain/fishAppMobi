'use strict';

squidTrackerApp.controller('WeatherCtrl',

    function($scope, $cordovaGeolocation, WeatherSvc) {
        console.log('test');

        $scope.isArray = angular.isArray;

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        console.log('testing');
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
                var weatherPromise = WeatherSvc.getWeather($scope.latitude, $scope.longitude);
                weatherPromise.then(function(weather){
                    console.log(weather.data);
                    $scope.weather = weather.data;
                }, function(error) {
                    $scope.weather = error;
                });
            }, function(error) {
                console.debug(error);
            }
        );
    }
);

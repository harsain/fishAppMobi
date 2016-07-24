'use strict';

squidTrackerApp.controller('WeatherCtrl',

    function($scope, $cordovaGeolocation, WeatherSvc, $ionicLoading) {
        console.log('test');

        $scope.isArray = angular.isArray;
        $ionicLoading.show({
            template: 'Please wait, while we get your location...'
        });
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {
                $scope.latitude = position.coords.latitude;
                $scope.longitude = position.coords.longitude;
                var weatherPromise = WeatherSvc.getWeather($scope.latitude, $scope.longitude);
                weatherPromise.then(function(weather){
                    console.log(weather.data);
                    $scope.weather = weather.data;
                    $ionicLoading.hide();
                }, function(error) {
                    $scope.weather = error;
                    $ionicLoading.hide();
                });
            }, function(error) {
                console.debug(error);
                $ionicLoading.hide();
            }
        );
    }
);

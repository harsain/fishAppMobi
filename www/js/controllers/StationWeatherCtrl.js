'use strict';

squidTrackerApp.controller('StationWeatherCtrl',
    function($scope, WeatherSvc, $ionicLoading) {
        console.log('station-weather');
        $scope.station = {};
        var weatherStationsPromise = WeatherSvc.getAllStations();
        $ionicLoading.show({
            template: 'Loading...'
        });
        weatherStationsPromise.then(function(stations){
            console.log(stations.data);
            $scope.station = stations.data[0];
            $scope.stations = stations.data;
            $ionicLoading.hide();
        }, function(error) {
            console.log(error);
            $ionicLoading.hide();
        });
    }
);

'use strict';

squidTrackerApp.factory('WeatherSvc', [
    '$http',
    function($http) {
        var service = {};
        service.getWeather = function(latitude, longitude) {
            // var url = "http://128.199.114.242/weather/live/" + latitude + "/" + longitude;
            var url = "reading.json";
            return $http.get(url);
        }
        return service;
    }
]);

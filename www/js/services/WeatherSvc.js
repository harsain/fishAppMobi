'use strict';

squidTrackerApp.factory('WeatherSvc', [
    '$http',
    function($http) {
        var service = {};
        service.getWeather = function(latitude, longitude) {
            var url = "http://harsain.com/fishApp/web/app.php/weather/live/" + latitude + "/" + longitude;
            // var url = "reading.json";
            return $http.get(url);
        };

        service.getAllStations = function() {
            var url = "http://harsain.com/fishApp/web/app.php/weather/stations";
            // var url = "http://localhost/~harsain/php/fishApp/web/weather/stations";
            return $http.get(url);
        };
        return service;
    }
]);

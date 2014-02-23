angular.module('GTBaseball.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Player', function($http, $q) {
    var Player = function(data) {
        angular.extend(this, data);
    };
    
    var players = null;
    var deferred = $q.defer();
    var getPlayers = function() {
        if (!players) {
            $http.get('data/roster.json')
                .success(function(data) {
                    players = data;
                    deferred.resolve(data);
                 })
                .error(function(data, status) {
                    deferred.reject(data);
                });
        }
        else {
            deferred.resolve(players);
        }
        return deferred.promise;
    };

    var findNumber = function(playerId) {
        console.log("Player #" + playerId);
        if (!players) {
            getPlayers().then(function() {
                findNumber(playerId);
            })
        }
        else {
            var foundPlayer = null;
            angular.forEach(players, function(player) {
                if (player.number == playerId) {
                    foundPlayer = player;
                    return;
                }
            });
            return foundPlayer;
        }
    }

    return {
        getAll: getPlayers,
        findNumber: findNumber
    }
})

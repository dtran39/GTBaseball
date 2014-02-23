angular.module('GTBaseball.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PlayerIndexCtrl', function($scope, Player) {
  // "Pets" is a service returning mock data (services.js)
    $scope.players = null;
    Player.getAll().then(function(data){
        $scope.players = data;
    });

})


// A simple controller that shows a tapped item's data
.controller('PlayerDetailCtrl', function($scope, $stateParams, Player) {
  // "Pets" is a service returning mock data (services.js)
  $scope.player = Player.findNumber($stateParams.playerId);
    console.log($scope.player);
})

.controller('VoteCtrl', function($scope, $stateParams, Player) {
    $scope.players = null;
    Player.getAll().then(function(data) {
        $scope.players = data;
    });
});

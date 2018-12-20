function navClicked() {
    let element = document.getElementById("menu");
    element.classList.add('clicked');
    let hamburger = document.getElementById("hamburger");
    hamburger.style.display = 'none';

    setTimeout(function(){
        element.classList.remove('clicked');
        hamburger.style.display = 'block';
    }, 5000);
}

var app = angular.module('app', []);
app.controller('myCtrl', function($scope, $http) {
    

    $http.get('config.json')
        .then(function(response) {
            $scope.config = response.data;
        });

    $scope.navOptionClicked = function() {
        
    }
});
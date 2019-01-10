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

var app = angular.module('app', ["ngRoute"]);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "main.html"
    })
    .when("/savera", {
        templateUrl: "savera.html"
    })
    .when("/addlink", {
        templateUrl: "add-link.html"
    });
}]);

app.controller('myCtrl', function($scope, $http) {
    
    $http.get('config.json')
        .then(function(response) {
            $scope.config = response.data;
        });

    $http.get('https://api.myjson.com/bins/18ydow')
        .then(function(response){

            $http.get('links.json')
            .then(function(res){
                $scope.links = res.data; // res.data.length >= response.data.length ? res.data : response.data;
            });
        });

    $scope.navOptionClicked = function() {
        
    }

    $scope.addLink = function(linkTitle, linkUrl, linkCategory, linkDate) {
        let newLinkRecord = {
            "id": + new Date(),
            "url": linkUrl,
            "title": linkTitle,
            "category": linkCategory,
            "date": linkDate
        };

        console.log(linkTitle, linkUrl, linkCategory, linkDate);
        $scope.links.push(newLinkRecord);
        console.log($scope.links);

        $http.put('https://api.myjson.com/bins/18ydow', $scope.links, {
            "Content-Type": "application/json"
        })
        .then(function(response){
            alert('Link Saved');
        });

    }
});

app.filter('encodeURIComponent', function() {
    return window.encodeURIComponent;
});

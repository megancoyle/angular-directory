var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

  $scope.author = {
    'name': 'Megan Coyle',
    'title': 'Web Developer',
    'company': 'Freelancer'
  }

});

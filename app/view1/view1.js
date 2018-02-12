'use strict';

angular.module('ui.bootstrap.demo','myApp.view1', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
}]);

// angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']).controller('AccordionDemoCtrl', function ($scope) {
//     $scope.oneAtATime = true;
//
//     $scope.groups = [
//         {
//             title: 'Dynamic Group Header - 1',
//             content: 'Dynamic Group Body - 1'
//         },
//         {
//             title: 'Dynamic Group Header - 2',
//             content: 'Dynamic Group Body - 2'
//         }
//     ];
//
//     $scope.items = ['Item 1', 'Item 2', 'Item 3'];
//
//     $scope.addItem = function() {
//         var newItemNo = $scope.items.length + 1;
//         $scope.items.push('Item ' + newItemNo);
//     };
//
//     $scope.status = {
//         isCustomHeaderOpen: false,
//         isFirstOpen: true,
//         isFirstDisabled: false
//     };
// });
'use strict';

angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', 'ui.bootstrap.demo', function($scope, $routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });

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
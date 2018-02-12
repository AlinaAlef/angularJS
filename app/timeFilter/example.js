angular.module('angular-font-awesome', ['angular-font-awesome']);
angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']).controller('AccordionDemoCtrl', function ($scope) {
    // var app = angular.module("MesaViewer",[]);
    var ctrl = $scope;

    ctrl.oneAtATime = false;

    ctrl.status = {
        mainTimeFilter: false,
        quarters: false,
        halves: false,
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
});
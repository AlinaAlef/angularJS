angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
    var ctrl = $scope;

    ctrl.oneAtATime = false;

    ctrl.groups = [
        {
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }
    ];

    ctrl.items = ['Item 1', 'Item 2', 'Item 3'];

    ctrl.addItem = function() {
        var newItemNo = ctrl.items.length + 1;
        ctrl.items.push('Item ' + newItemNo);
    };

    ctrl.status = {
        mainTimeFilter: false,
        quarters: false,
        halves: false,
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false,
        isOpenTimeFilter: false
    };
});
var helloWorldApp = angular.module('helloWorldApp', []);

helloWorldApp.constant('myConfig', {applicationName:'My Angular JS App'});
helloWorldApp.controller('firstController', [
    '$scope', 'myConfig',
    function ($scope, myConfig) {
        $scope.appName = myConfig.applicationName;
    }
]);

helloWorldApp.constant('currentDate', {
    date: new Date()
});
helloWorldApp.controller('dateController', [
    '$scope', 'currentDate',
    function ($scope, currentDate) {
        $scope.date = currentDate.date;
    }
]);
app.controller('labController', [
    '$scope', '$timeout', '$q', '$http', 'gitHub',
    function ($scope, $timeout, $q, $http, gitHub) {
        $scope.model = {
            number: 0,
            result: 'Ready',
            searchPlaceholder: 'Search repos',
            search: '',
        };
        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        // GET REPOS AJAX call
        function getRepos() {
            let data = gitHub.getAll({org: $scope.model.search});
            data.$promise.then(function(response){
                $scope.model.error = false;
                $scope.model.repos = response;
            }, function (response) {
                $scope.model.error = true;
                $scope.model.errorMessage = "Sorry! No results found";
            });
            // found this solution at https://devdactic.com/improving-rest-with-ngresource/
        }

        // LOAD REPO DETAIL AJAX call
        function loadDetail(name) {
            $scope.model.detail = null;
            let data = gitHub.getDetail({ org: $scope.model.search, id: name });
            data.$promise.then(function(response){
                $scope.model.detailError = false;
                $scope.model.detail = response;
            }, function (response) {
                $scope.model.detailError = true;
                $scope.model.detailErrorMessage = "Sorry! No details found"
            });
        }       

        /*
        // GET REPOS AJAX call
        function getRepos() {
            // $http wraps the result in a Promise automatically so you don't have to create a $q.defer() object every time you are using it
            // The .get() method off of $http is a shorthand for the most common settings applied to GET method queries to a server
            $http.get('https://api.github.com/orgs/angular/repos')
                .then(function (response) {
                    $scope.model.repos = response.data;
                }, function (response) {
                    $scope.model.repos = 'Error: ' + response.data.message;
                });
        }
        
        // LOAD REPO DETAIL AJAX call
        function loadDetail(name) {
            var url = 'https://api.github.com/repos/angular/' + name;
            $http.get(url)
                .then(function (response) {
                    $scope.model.detail = response.data;
                }, function (response) {
                    $scope.model.detail = {
                        error: true,
                        message: 'Error: ' + response.data.message
                    };
                });
        }
        */

        // CHECK ODD NUMBER promise chain
        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function (result) {
                $scope.model.result = 'Success: ' + result;
            }, function (result) {
                $scope.model.result = 'Error: ' + result;
            })
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function () {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }
    }

]);
app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        reset();

        function reset() {
            $scope.model = {};
        }

        function submit(model) {
            registration.submit(model).$promise
                .then(
                    function (response) {
                        reset();
                        $scope.successMessage = "Registration succesful! Here's your token:";
                        $scope.token = response.token;
                        $scope.registered = true;
                    },
                    function (response) {
                        console.log(response);
                        alert('Sorry, an error occured when whe tried to register you. Please contact your administrator with this information: \n' + response.error);
                    }
                );
            //alert('Submitted\n' + JSON.stringify(model));
        }

    }
]);
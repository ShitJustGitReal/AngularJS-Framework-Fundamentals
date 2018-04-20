app.controller('menuController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Our Menu'
        };
        $scope.changeMainDish = function (name, price) {
            $scope.model.mainDish = {
                name: name + ' pizza: ',
                price: price + ' dollar'
            }
        }
        $scope.$watch('model.mainDish.name', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken pizza') {
                alert('You have selected the BBQ Chicken pizza!');
            }
        });
    }
]);
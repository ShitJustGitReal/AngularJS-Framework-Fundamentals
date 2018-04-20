app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
            selectedToppings: [],
            showAdded: false,
            showError: false
        };
        $scope.addTopping = function (topping){
            $scope.model.search = null;
            $scope.model.showAdded = true;
            $scope.model.selectedToppings.push(topping);
        }
        $scope.closeAlert = function(){
            $scope.model.showAdded = false;
            $scope.model.showError = false;
        }
    }
]);
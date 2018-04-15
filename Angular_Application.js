//Here is how we get started on the application.
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

//Below is how we make an HTML list based on the items of an array:
<script>
var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
});
</script>

//This is how we store the list of the products
<div ng-app="myShoppingList" ng-controller="myCtrl">
  <ul>
    <li ng-repeat="x in products">{{x}}</li>
  </ul>
</div>

<p>So far we have made an HTML list based on the items of an array.</p>

</body>
</html>

<script>
var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    } 
});
</script>

<div ng-app="myShoppingList" ng-controller="myCtrl">
    <ul>
        <li ng-repeat="x in products">{{x}}</li>
    </ul>
    <input ng-model="addMe">
    <button ng-click="addItem()">Add</button>
</div>
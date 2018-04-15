<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<script>
var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }    
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
});
</script>

<div ng-app="myShoppingList" ng-controller="myCtrl">
  <ul>
    <li ng-repeat="x in products">{{x}}<span ng-click="removeItem($index)">×</span></li>
  </ul>
  <input ng-model="addMe">
  <button ng-click="addItem()">Add</button>
</div>

<p>Click the little x to remove an item from the shopping list.</p>

</body>
</html>

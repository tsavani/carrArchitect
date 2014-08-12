"use strict";

angular.module('carProductApp')
  .controller('CarCtrl', function ($scope, $location, $firebase) {

	var ref = new Firebase("https://cararchitect.firebaseio.com/");

		// create an AngularFire reference to the data
		var sync = $firebase(ref);

		// download the data into a local object
		//$scope.rows = sync.$asObject();

		// create a synchronized array for use in our HTML code
		$scope.rows = sync.$asArray();
		console.log("###########################");
		console.log($scope.rows);
		//rows.$bindTo($scope, "rows");
		//$scope.rows = ['i20','BMW X5','lumo'];
		$scope.temp = false;
 
		$scope.addRow = function(){
			$scope.rows.$add({car: $scope.addName});
			$scope.temp = false;
			$scope.addName="";	
		};

		$scope.deleteRow = function(row){
			//$scope.rows.splice($scope.rows.indexOf(row),1);
			$scope.rows.$remove($scope.rows.indexOf(row))
		};

		$scope.carProcessPath = function(row){
			$location.path('/about');
		};
	  
		$scope.plural = function (tab){
			return tab.length > 1 ? 's': ''; 
		};
  
	  $scope.addTemp = function(){
		// if($scope.temp) $scope.rows.pop(); 
		// else if($scope.addName) $scope.temp = true;

		// if($scope.addName) $scope.rows.push($scope.addName);
		// else $scope.temp = false;
	  };
  
		$scope.isTemp = function(i){
			return i==$scope.rows.length-1 && $scope.temp;
		};
		});

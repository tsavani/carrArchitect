angular.module('carProductApp')
  .controller('CarCtrl', function ($scope, $location) {
   	$scope.rows = ['i20','BMW X5','lumo'];
  	$scope.temp = false;
  
	  $scope.addRow = function(){
	    $scope.temp = false;
	    $scope.addName="";
	  };
  
	  $scope.deleteRow = function(row){
	    $scope.rows.splice($scope.rows.indexOf(row),1);
	  };

	  $scope.carProcessPath = function(row){
	    $location.path('/about');
	  };
	  
	  $scope.plural = function (tab){
	    return tab.length > 1 ? 's': ''; 
	  };
  
	  $scope.addTemp = function(){
	    if($scope.temp) $scope.rows.pop(); 
	    else if($scope.addName) $scope.temp = true;
	    
	    if($scope.addName) $scope.rows.push($scope.addName);
	    else $scope.temp = false;
	  };
  
	  $scope.isTemp = function(i){
	    return i==$scope.rows.length-1 && $scope.temp;
	  };
  });

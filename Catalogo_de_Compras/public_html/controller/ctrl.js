/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// declare a module
var myAppModule = angular.module('myApp', []);

myAppModule.controller('recuperarJson', ['$scope','$http', function($scope, $http)
{    
    $scope.phones = [];
    $scope.categoryOne = [];
    $scope.categoryTwo = [];
    $scope.recebe = null;
    $http.get('../vendor/json/products.json').success(function(data){
        $scope.phones = data;
        
        angular.forEach($scope.phones, function(value, key){
            if(value.category == "category one"){
                $scope.categoryOne.push(value);
            }else{
                $scope.categoryTwo.push(value);
            }
        });
    });
    
    $scope.click = function(object){
        console.log('url ' + object.url);
        console.log('description ' + object.description);
        console.log('details ' + object.details);
        $scope.recebe = object;
    }
    
    function test(){
        console.log('entrouuus');
        //var result = $scope.recebe; 
        return $scope.recebe.url;
        //return $scope.recebe.nome;
    }
    
    
}]);



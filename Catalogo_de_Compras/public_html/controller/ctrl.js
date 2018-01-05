/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* declaração de um módulo em angular js    */
var myAppModule = angular.module('myApp', []);

/* declaração do controller e das suas dependências         */
myAppModule.controller('recuperarJson', ['$scope','$http', function($scope, $http)
{    
    $scope.products = [];
    $scope.categoryOne = [];
    $scope.categoryTwo = [];
    $scope.recebe = null;
    
    /* O código abaixo é responsável por realizar uma requisição para obter todos os dados do 
     * arquivo json presente no projeto.
     * Após esta obtenção, foram criados dois filtros. Cada filtro é capaz de 
     * obter os produtos de uma categoria.
     */
    $http.get('../vendor/json/products.json').success(function(data){
        $scope.products = data;
        
        angular.forEach($scope.products, function(value, key){
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



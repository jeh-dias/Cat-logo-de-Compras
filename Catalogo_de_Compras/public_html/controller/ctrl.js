/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* declaração de um módulo em angular js    */
angular.module("myApp", []);

/* declaração do controller e das suas dependências         */
angular.module("myApp").controller("recuperarJson", ['$scope','$http', function($scope, $http)
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
    $http.get('../vendor/json/products.json').success(function(response, status, headers, config){
        $scope.products = response.data;
        
        angular.forEach($scope.products, function(value, key){
            if(value.category === "category one"){
                $scope.categoryOne.push(value);
            }else{
                $scope.categoryTwo.push(value);
            }
        });
    });
    
    $scope.click = function(object){
        $scope.recebe = object;
    }
    
    function test(){
        return $scope.recebe.url;
    }
       
}]);



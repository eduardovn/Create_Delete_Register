var produtoModule = angular.module('produtoModule',[]);

produtoModule.filter('soma', function() {
        return function(dado, chave) {
            if (typeof(dado) === 'undefined' || typeof(chave) === 'undefined') {
                return 0;
            }
			
            var total = 0;
            for (var i = dado.length - 1; i >= 0; i--) {
                
				var numero = parseInt(dado[i][chave]);
			    if (!isNaN(numero)) { 
					total += numero};

            }

            return total;
        };
    });

produtoModule.controller("produtoControl",function($scope){
	
	$scope.orderByField = 'codigo';
	$scope.reverseSort = false;
	
	$scope.fornecedores = [
		{codigo: 1, nome: 'Pepsico'},
		{codigo: 2, nome: 'Dolly'},
		{codigo: 3, nome: 'Coca-Cola'}
	];
	
	$scope.novosProdutos = {};
	$scope.produtoClicado = {};
	
	$scope.produtos = [
		{codigo: 1, nome: 'Pepsi', valor: 200, fornecedor: {codigo: 1, nome: 'Pepsico'}},
		{codigo: 2, nome: 'Dolly Citrus', valor: 150, fornecedor: {codigo: 2, nome: 'Dolly'}},
		{codigo: 3, nome: 'Sprit', valor: 100, fornecedor: {codigo: 3, nome: 'Coca-Cola'}}
	];

	
	$scope.adicionar = function(){
		$scope.produtos.push($scope.novosProdutos);
		$scope.novosProdutos = {};
	}
	
	
	$scope.excluir = function(produto){
		$scope.produtoClicado = produto;
		$scope.produtos.splice($scope.produtos.indexOf($scope.produtoClicado),1);
	}
	
	
		
});
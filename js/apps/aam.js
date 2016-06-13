angular.module('aam',['ngRoute'])
	.config(function routes($routeProvider)
{
	$routeProvider
		.when('/',
		{
			templateUrl:'html/main.html'
		})	
		.when('/borrar',
		{
			templateUrl:'html/borrar.html'
		})	
		.when('/listar',
		{
			templateUrl:'html/listar.html'
		})	
		.when('/modificar',
		{
			templateUrl:'html/modificar.html'
		})	
		.when('/crear',
		{
			templateUrl:'html/crear.html'
		})			

		
});

	
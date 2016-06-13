angular.module('aam',['ngRoute'])
	.config(function routes($routeProvider, $locationProvider)
{
	$locationProvider.html5Mode(
		{
			enabled:true,
			requireBase: false
		});

	$routeProvider
		.when('/app_angular/',
		{
			templateUrl:'html/main.html'
		})	
		.when('/app_angular/borrar',
		{
			templateUrl:'html/borrar.html'
		})	
		.when('/app_angular/listar',
		{
			templateUrl:'html/listar.html'
		})	
		.when('/app_angular/modificar',
		{
			templateUrl:'html/modificar.html'
		})	
		.when('/app_angular/crear',
		{
			templateUrl:'html/crear.html'
		})			

		
});

	
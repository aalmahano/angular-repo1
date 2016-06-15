define(['angular','finalFactory','controll'], 
	function(angular, factoria, controlador)
	{
		angular.module('aam',['ngRoute'])
			.config(routes)
			.factory('fFactory',[factoria.nombre]);
			

		function routes($routeProvider, $locationProvider)
		{
			$locationProvider.html5Mode(
				{
					enabled:true,
					requireBase: false
				});

			$routeProvider
				.when('/app_angular/',
				{
					controller: [controlador.nombre],
					controllerAs: "vm",
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
					controller: [controlador.nombre],
					controllerAs: "vm",			
					templateUrl:'html/crear.html'
				})			
		}		
	});




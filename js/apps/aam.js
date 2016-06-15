angular.module('aam',['ngRoute'])
	.config(routes)
	//.factory('finalFactory',factoria);
	.factory('finalFactory',factoria);

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
			controller: appCtrl,
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
			controller: appCtrl,
			controllerAs: "vm",			
			templateUrl:'html/crear.html'
		})			
}


function appCtrl(finalFactory)
{
	var vm=this;
	vm.colores = finalFactory.colores;
	vm.nuevoColor = function()
	{
		finalFactory.nuevoColor(vm.color)
	};
}

function factoria()
{
	var colores = ["green","blue","orange"];

	var interfaz = {
		colores: colores,
		nuevoColor: function(color)
		{
			colores.push(color);
		}
	};

	return interfaz;
}
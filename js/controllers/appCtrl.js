function(finalFactory)
{
			var vm=this;
			vm.colores = finalFactory.colores;
			vm.nuevoColor = function()
			{
				finalFactory.nuevoColor(vm.color)
			};		
}

function()
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
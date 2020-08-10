/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var nombre;
	var lugar;
	var temporada;
	var personas;
	var respuesta = true;
	var promedio;
	//contadores
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var contadorViajes = 0;
	var sumaPersonas = 0;
	//maspasajeros
	var flagMasPasajeros = true;
	var nombreMasPasajeros;
	var cantidadMasPasajeros;

	while(respuesta)
	{
		do
		{
			nombre = prompt("Ingrese el nombre del titular.");
		}while(!isNaN(nombre));

		do
		{
			lugar = prompt("Ingrese el lugar. (bariloche, cataratas, salta)");
		}while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");

		do
		{
			temporada = prompt("Ingrese la temporada. (otoño, invierno, verano, primavera)");
		}while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");

		do
		{
			personas = prompt("Ingrese la cantidad de personas que viajan.");
			personas = parseInt(personas);
		}while(isNaN(personas) || personas > 500);

		//Punto A
		switch(lugar)
		{
			case "bariloche":
				contadorBariloche++;
			break;

			case "cataratas":
				contadorCataratas++;
			break;
			
			default:
				contadorSalta++;
			break;
		}

		//Punto B
		if(flagMasPasajeros)
		{
			nombreMasPasajeros = nombre;
			cantidadMasPasajeros = personas;
			flagMasPasajeros = false;
		}
		if(personas > cantidadMasPasajeros)
		{
			nombreMasPasajeros = nombre;
			cantidadMasPasajeros = personas;
		}

		//Punto C
		if(temporada == "invierno")
		{
			sumaPersonas += personas;
			contadorViajes++;
		}

		respuesta = confirm("Datos ingresados correctamente. ¿Desea continuar?");
	}

	promedio = sumaPersonas / contadorViajes;

	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta)
	{
		document.write("Bariloche es el más elegido.");
	}
	else
	{
		if(contadorCataratas > contadorSalta)
		{
			document.write("Cataratas es el más elegido.");
		}
		else
		{
			document.write("Salta es el más elegido.");
		}
	}

	document.write("<br>"+nombreMasPasajeros+" es la persona que más pasajeros lleva.",
	"<br>El promedio de personas por viaje que viajan en invierno es: "+promedio+".");
}

/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var promedio;
	var contadorHombre = 0;
	var contadorMujer = 0;
	var contadorPersonas = 0;
	var sumaEdad = 0;
	//mastemperatura
	var flagTemperatura = true;
	var nombreTemperatura;
	var edadTemperatura;
	var mayorTemperatura;

	for(var i = 0; i < 5; i++)
	{
		do
		{
			nombre = prompt("Ingrese su nombre.");
		}while(!isNaN(nombre));

		do
		{
			temperatura = prompt("Ingrese su temperatura.");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura) || temperatura > 80);

		do
		{
			sexo = prompt("Ingrese su sexo. (f o m)");
		}while(sexo != "f" && sexo != "m");

		do
		{
			edad = prompt("Ingrese su edad.");
		}while(isNaN(edad) || edad < 0 || edad > 120);

		//Punto A
		if(sexo == "f")
		{
			contadorMujer++;
		}
		else
		{
			contadorHombre++;
		}

		//Punto B
		contadorPersonas++;
		sumaEdad += edad;

		//Punto C
		if(flagTemperatura && sexo == "f")
		{
			nombreTemperatura = nombre;
			edadTemperatura = edad;
			mayorTemperatura = temperatura;
			flagTemperatura = false;
		}
		if(temperatura > mayorTemperatura && sexo == "f")
		{
			nombreTemperatura = nombre;
			edadTemperatura = edad;
			mayorTemperatura = temperatura;
		}
	}

	promedio = sumaEdad / contadorPersonas;

	document.write("El promedio de edad general es: "+promedio+".");

	if(contadorHombre == 0)
	{
		document.write("<br>No hay hombres.");
	}
	else
	{
		document.write("<br>Hay "+contadorHombre+" hombres.");
	}

	if(flagTemperatura && contadorMujer == 0)
	{
		document.write("<br>No hay mujeres.");
	}
	else
	{
		document.write("<br>Hay "+contadorMujer+" mujeres.",
		"<br>"+nombreTemperatura+" es la mujer con mayor temperatura con "+mayorTemperatura+" y su edad es "+edadTemperatura+".");
	}
}

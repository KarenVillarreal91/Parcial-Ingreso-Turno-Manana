/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var marca;
  var precio;
  var peso;
  var tipo;
  var respuesta = true;
  var sumaPeso = 0;
  //mascaro
  var flagMasCaro = true;
  var marcaMasCaro;
  var precioMasCaro;
  //masliviano
  var flagMasLiviano = true;
  var marcaMasLiviano;
  var pesoMasLiviano;

  while(respuesta)
  {
    do
    {
      marca = prompt("Ingrese la marca del producto.");
    }while(!isNaN(marca));

    do
    {
      precio = prompt("Ingrese el precio del producto.");
      precio = parseInt(precio);
    }while(isNaN(precio) || precio < 1);

    do
    {
      peso = prompt("Ingrese el peso en kg.");
      peso = parseInt(peso);
    }while(isNaN(peso) || peso < 0);

    do
    {
      tipo = prompt("Ingrese de que tipo es el producto. (sólido, líquido)");
    }while(tipo != "sólido" && tipo != "líquido");

    //Punto A
    sumaPeso += peso;

    //Punto B
    if(flagMasCaro && tipo == "líquido")
    {
      precioMasCaro = precio;
      marcaMasCaro = marca;
      flagMasCaro = false;
    }
    if(precio > precioMasCaro && tipo == "líquido")
    {
      precioMasCaro = precio;
      marcaMasCaro = marca;
    }

    //Punto C
    if(flagMasLiviano && tipo == "sólido")
    {
      pesoMasLiviano = peso;
      marcaMasLiviano = marca;
      flagMasLiviano = false;
    }
    if(peso < pesoMasLiviano && tipo == "sólido")
    {
      pesoMasLiviano = peso;
      marcaMasLiviano = marca;
    }

    respuesta = confirm("Pruducto ingresado correctamente. ¿Desea continuar?");
  }

  document.write("El peso total de la compra es "+sumaPeso+".",
  "<br>La marca del más caro de los líquidos es "+marcaMasCaro+".",
  "<br>La marca del más liviano de los sólidos es "+marcaMasLiviano+".");
}

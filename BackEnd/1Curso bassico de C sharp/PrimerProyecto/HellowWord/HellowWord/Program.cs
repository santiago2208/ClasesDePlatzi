
double LadoA;
double LadoB;
double Resultado;


Console.WriteLine("Escribe el lado A");
LadoA = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Escribe el lado B");
LadoB = Convert.ToDouble(Console.ReadLine());

Resultado = LadoA * LadoB;

Console.WriteLine("El resultado de multiplicar " + LadoA + " por " + LadoB + " es: " + Resultado );


// Segundo ejemplo: uso de var 2   2   2   2   2   2   2 

var nombrePersonaje = "";

Console.WriteLine("Escribe el nombre de tu personaje ↓");
nombrePersonaje = Console.ReadLine();

Console.WriteLine("El nombre de tu personaje es: " + nombrePersonaje);

////////////////////

var radio = 0d;
var resultado = 0d;

const double Pi = 4.14;  // ← ← ← ← ← const 

Console.WriteLine("BIenvenido, calculemos círculos!");
// Pi * radio*radio
Console.WriteLine("Ingrese el valor del radio");
radio = Convert.ToDouble(Console.ReadLine());

resultado = Pi * radio * radio;

Console.WriteLine("El área de tu círculo es de: " + resultado);




// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

string[] id, oficio;
int[] vida, daño, defensa;
int n = 0;

id = new string[] {    "1",          "2",       "3"};
oficio = new string[] {"Espadachin", "Arquero", "Mago"};
vida = new int[] {      100,          80,        60};
daño = new int[] {      20,           25,        30};
defensa = new int[] {   10,           8,         5};



Console.WriteLine("Personajes disponibles\n");

while (n < id.Length)
{
   
    Console.WriteLine("------------------------");
    Console.WriteLine($"|Personaje {n + 1}           |");
    Console.WriteLine("------------------------");
    Console.WriteLine(
        $"Oficio: {oficio[n]} \n" +
        $"Vida: {vida[n]} \n" +
        $"Daño: {daño[n]} \n" +
        $"Defensa: {defensa[n]} \n" +
        "------------------------\n");
    n++;
};



// See https://aka.ms/new-console-template for more information
Console.WriteLine("Personajes");

Personajes personaje1 = new Personajes();
Personajes personaje2 = new Personajes();

personaje1.Id = 0;
personaje1.Oficio = "Espadachin";
personaje1.Nivel = 1;
personaje1.Vida = 100;
personaje1.Daño = 20;
personaje1.Defensa = 10;

personaje2.Id = 1;
personaje2.Oficio = "Mago";
personaje2.Nivel = 1;
personaje2.Vida = 80;
personaje2.Daño = 25;
personaje2.Defensa = 3;

Console.WriteLine("Personajes \n");
Console.WriteLine("/////////////////////////");

Console.WriteLine("Personaje 1 \n" +
                 "/////////////////////////");
Console.WriteLine($"Oficio: {personaje1.Oficio}\n" +
    $"Nivel: {personaje1.Nivel}\n" +
    $"Vida: {personaje1.Vida}\n" +
    $"Daño: {personaje1.Daño}\n" +
    $"Defensa: {personaje1.Defensa}\n/////////////////////////");

class Personajes
{
    public double Id;
    public string Oficio;
    public int Nivel;
    public int Vida;
    public int Daño;
    public int Defensa;

}


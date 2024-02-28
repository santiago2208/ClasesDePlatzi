﻿// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


var BolaDeFuego = new Habilidades();
BolaDeFuego.Nombre = "Bola de fuego";
BolaDeFuego.Descripcion = "Lanza una bola de fuego que que inflige daño al enenmigo";
//BolaDeFuego.Nivel = 1; ← se comenta porque ya se inicializo
BolaDeFuego.Distancia = 7;
BolaDeFuego.EsPasiva= false;

var BolaDeHielo = new Habilidades();
BolaDeHielo.Nombre = "Bola de Hielo";
BolaDeHielo.Descripcion = "Lanza una bola de Hielo que que inflige daño al enenmigo";
//BolaDeFuego.Nivel = 1; ← se comenta porque ya se inicializo
BolaDeHielo.Distancia = 7;
BolaDeHielo.EsPasiva = false;


var Mago = new Personajes();
Mago.Id = 1;
Mago.Name = "veigar";
Mago.Profesion = "Mago";
Mago.Nivel = 1;

Mago.Vida = 100;
Mago.Daño = 30;
Mago.Defensa = 5;
//Mago.VelocidadAtaque = 1; ← se comenta porque ya se inicializo
//Mago.VelocidadMovimiento = 1; ← se comenta porque ya se inicializo

List<Habilidades> habilidadesMago = new List<Habilidades>();
habilidadesMago.Add(BolaDeHielo);
habilidadesMago.Add(BolaDeFuego);

Mago.Habilidades = habilidadesMago;


foreach (var habilidad in Mago.Habilidades)
{
    Console.WriteLine($"Nombre: {habilidad.Nombre}");
    Console.WriteLine($"Descripción: {habilidad.Descripcion}");
    Console.WriteLine($"Nivel: {habilidad.Nivel}");
    Console.WriteLine($"Distancia: {habilidad.Distancia}");
    Console.WriteLine($"Es Pasiva: {habilidad.EsPasiva}");
    Console.WriteLine();
}

Console.WriteLine(Mago.Habilidades[0].Nombre);

class Personajes
{
    //Informacion General
    public double Id;
    public string Name;
    public string Profesion;
    public int Nivel = 1; // Se inicializa el atributo


    //Estadisticas
    public int Vida;
    public int Daño;
    public int Defensa;
    public float VelocidadMovimiento = 1; // Se inicializa el atributo
    public float VelocidadAtaque = 1; // Se inicializa el atributo

    public TipoEnergia TipoEnergia;

    //Habilidades
    public List<Habilidades> Habilidades = new List<Habilidades>(); // Se inicializa el atributo


}


class Habilidades
{
    public string Nombre;
    public string Descripcion;
    public int Nivel = 1; // Se inicializa el atributo
    public float Distancia;
    public bool EsPasiva;

}

public enum TipoEnergia
{
    Mana,
    Energia,
    Ninguno
}

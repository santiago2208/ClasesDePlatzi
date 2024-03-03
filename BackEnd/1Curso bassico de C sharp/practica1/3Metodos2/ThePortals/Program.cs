// See https://aka.ms/new-console-template for more information
using System.Runtime.CompilerServices;

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

Mago.MostrarInformacion();









class Personajes
{
    //Informacion General
    public double Id;
    public string Name;
    public string Profesion;
    public int Nivel;


    //Estadisticas
    public int Vida;
    public int Daño;
    public int Defensa;
    public float VelocidadMovimiento;
    public float VelocidadAtaque;
    
    public TipoEnergia TipoEnergia;

    //Habilidades
    public List<Habilidades> Habilidades;


    // Metodos
    public void MostrarInformacion ()
    {
        Console.WriteLine($"Nombre: {Name}");
        Console.WriteLine($"Profesion: {Profesion}");
        Console.WriteLine($"Nivel: {Nivel}");
        Console.WriteLine($"Vida: {Vida}");
        Console.WriteLine($"Daño: {Daño}");
        Console.WriteLine($"Defensa: {Defensa}");
        Console.WriteLine($"Velocidad de ataque: {VelocidadAtaque}");
        Console.WriteLine($"Velocidad de movimientio: {VelocidadMovimiento}");

        Console.WriteLine("//////////////////////////////////////////////// \n Habilidades ");
        Console.WriteLine("////////////////////////////////////////////////  ");

        foreach (var item in Habilidades)
        {
            Console.WriteLine("____________________________________  ");
            Console.WriteLine($"Habilidad: {item.Nombre}");
            Console.WriteLine($"Descripción: {item.Descripcion}");
            Console.WriteLine($"Nivel: {item.Nivel}");
            Console.WriteLine($"Distancia: {item.Distancia}");
            Console.WriteLine($"Es Pasiva: {item.EsPasiva}");
            Console.WriteLine("____________________________________  ");

        }
        Console.WriteLine("////////////////////////////////////////////////  ");
    }



    // Inicializar clases
    public Personajes()
    {
        Nivel = 1;
        VelocidadAtaque = 1;
        VelocidadMovimiento = 1;
        Habilidades = new List<Habilidades>();
    }
}


class Habilidades
{
    public string Nombre;
    public string Descripcion;
    public int Nivel;
    public float Distancia;
    public bool EsPasiva;

    public Habilidades ()
    {
        Nivel= 2;
    }

}

public enum TipoEnergia
{
    Mana,
    Energia,
    Ninguno
}

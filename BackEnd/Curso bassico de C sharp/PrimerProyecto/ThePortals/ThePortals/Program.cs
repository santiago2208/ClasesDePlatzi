// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


var BolaDeFuego = new Habilidades();
BolaDeFuego.Nombre = "Bola de fuego";
BolaDeFuego.Descripcion = "Lanza una bola de fuego que que inflige daño al enenmigo";
BolaDeFuego.Nivel = 1;
BolaDeFuego.Distancia = 7;
BolaDeFuego.EsPasiva= false;

var BolaDeHielo = new Habilidades();
BolaDeHielo.Nombre = "Bola de Hielo";
BolaDeHielo.Descripcion = "Lanza una bola de Hielo que que inflige daño al enenmigo";
BolaDeFuego.Nivel = 1;
BolaDeHielo.Distancia = 7;
BolaDeHielo.EsPasiva = false;







class Personajes
{
    //Informacion General
    public double Id;
    public string Name;
    public string Profecion;
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
}


class Habilidades
{
    public string Nombre;
    public string Descripcion;
    public int Nivel;
    public float Distancia;
    public bool EsPasiva;

}

public enum TipoEnergia
{
    Mana,
    Energia,
    Ninguno
}

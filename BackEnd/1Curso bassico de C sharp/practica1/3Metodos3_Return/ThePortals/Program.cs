// See https://aka.ms/new-console-template for more information
using System.Runtime.CompilerServices;
using System.Text;

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

string resultInformacion = Mago.MostrarInformacion();

Console.WriteLine(resultInformacion);










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
    public string MostrarInformacion ()
    {
        StringBuilder sb = new StringBuilder ();

        sb.AppendLine($"Nombre: {Name} \n" +
            $"Profesion: {Profesion}\n" +
            $"Nivel: {Nivel}\n" +
            $"Vida: {Vida}\n" +
            $"Daño: {Daño}\n" +
            $"Defensa: {Defensa}\n" +
            $"Velocidad de ataque: {VelocidadAtaque}\n" +
            $"Velocidad de movimientio: {VelocidadMovimiento}\n" +
            $"//////////////////////////////////////////////// \n Habilidades \n" +
            $"////////////////////////////////////////////////  ");
        foreach (var item in Habilidades)
        {
            sb.AppendLine($"____________________________________ \n " +
                $"Habilidad: {item.Nombre} \n" +
                $"Descripción: {item.Descripcion} \n" +
                $"Nivel: {item.Nivel}  \n" +
                $"Distancia: {item.Distancia} \n" +
                $"Es Pasiva: {item.EsPasiva}  \n" +
                $"____________________________________ \n");


        }
        sb.AppendLine("//////////////////////////////////////////////// \n");

        return sb.ToString ();
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

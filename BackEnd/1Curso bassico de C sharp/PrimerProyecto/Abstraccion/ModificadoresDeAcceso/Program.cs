using System.Text;
using ModificadoresDeAcceso;
using ModificadoresDeAcceso.Models;

var imprimirInfo = new ImprimirInfo();

var poderVolar = new SuperPoder();
poderVolar.Nombre = "Volar";
poderVolar.Descripcion = "Capacidad para volar y planear en el aire";
poderVolar.Nivel = NivelPoder.NivelDos;

var superFuerza = new SuperPoder();
superFuerza.Nombre = "Super fuerza";
superFuerza.Descripcion = "Posee una fuerza descomunal";
superFuerza.Nivel = NivelPoder.NivelTres;

var regeneracion = new SuperPoder();
regeneracion.Nombre = "Regeneracion";
regeneracion.Nivel = NivelPoder.NivelTres;



var superman = new SuperHeroe();

superman.Id = 1;
superman.Nombre = "     Superman      ";
superman.IdentidadSecreta = "Clark Kent";
superman.Ciudad = "Metropolis";
superman.PuedeVolar = true;

imprimirInfo.ImprimirSuperHeroe(superman);

List<SuperPoder> poderesSuperman = new List<SuperPoder>();
poderesSuperman.Add(poderVolar);
poderesSuperman.Add(superFuerza);
superman.SuperPoderes = poderesSuperman;

// ejecutar metodo 1
string resultSuperPoderes = superman.UsarSuperPoderes();
Console.WriteLine(resultSuperPoderes);

string resultSalvarAlMundo = superman.SalvarAlMundo();
Console.WriteLine(resultSalvarAlMundo);

string resultSalvarLaTierra = superman.SalvarLaTierra();
Console.WriteLine(resultSalvarLaTierra);




// Wolverine

var wolverine = new AntiHeroe();

wolverine.Id = 5;
wolverine.Nombre = "Wolverine";
wolverine.IdentidadSecreta = "Logan";
wolverine.PuedeVolar = false;

List<SuperPoder> poderesWolverine = new List<SuperPoder>();
poderesWolverine.Add(superFuerza);
poderesWolverine.Add(regeneracion);
wolverine.SuperPoderes = poderesWolverine;


// ejecutar metodo 1 y 2
string resultWolverinePoderes = wolverine.UsarSuperPoderes();
Console.WriteLine(resultWolverinePoderes);
string accionAntiheroe = wolverine.RealizarAccionDeAntiheroe("Atacar a la policia sssssssssssss sssss");
Console.WriteLine(accionAntiheroe);






enum NivelPoder
{
    NivelUno,
    NivelDos,
    NivelTres
}



using ModificadoresDeAcceso.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModificadoresDeAcceso.Models
{
    internal class SuperHeroe : Heroe, ISuperHeroe
    {
        private string _Nombre;
        public int Id { get; set; } = 1;
        public override string Nombre
        {
            get
            {
                return _Nombre;
            }
            set
            {
                _Nombre = value.Trim();
            }
        }
        public string NombreEIdentidadSecreta
        {
            get
            {
                return $"{Nombre} ({IdentidadSecreta})";
            }
        }
        public string IdentidadSecreta { get; set; }
        public string Ciudad;
        public List<SuperPoder> SuperPoderes = new List<SuperPoder>();
        public bool PuedeVolar;

        public SuperHeroe()
        {
            Id = 1;
            SuperPoderes = new List<SuperPoder>();
            PuedeVolar = false;
        }

        // metodos 
        
        /*
        public void UsarSuperPoderes()
        {
            foreach (var item in SuperPoderes)
            {
                Console.WriteLine($"{NombreEIdentidadSecreta} esta usando el poder de {item.Nombre}!!");
            }
        }
        */

        // metodo 2
        
        public string UsarSuperPoderes()
        {

            StringBuilder sb = new StringBuilder();
            foreach (var item in SuperPoderes)
            {
                sb.AppendLine($"{NombreEIdentidadSecreta} esta usando el super poder {item.Nombre}!!");
            }

            return sb.ToString();
        }

        public override string SalvarAlMundo()
        {
            return $"{NombreEIdentidadSecreta} ha salvado al mundo";
        }

        public override string SalvarLaTierra()
        {
            //return base.SalvarLaTierra();
            return $"{NombreEIdentidadSecreta} ha salvado la tierra";
        }
    }
}

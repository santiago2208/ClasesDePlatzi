using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModificadoresDeAcceso.Models
{
    internal class SuperHeroe
    {
        private string _Nombre;
        public int Id = 1;
        public string Nombre
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
        public string IdentidadSecreta;
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
    }
}

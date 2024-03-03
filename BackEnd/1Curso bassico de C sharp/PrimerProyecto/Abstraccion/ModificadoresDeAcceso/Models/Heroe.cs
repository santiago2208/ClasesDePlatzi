using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModificadoresDeAcceso.Models
{
    internal abstract class Heroe
    {

        public abstract string Nombre { get; set; }

        public abstract string SalvarAlMundo();

        public virtual string SalvarLaTierra()
        {
            return $"{Nombre} ha salvado la tierra\n";
        }
    }
}

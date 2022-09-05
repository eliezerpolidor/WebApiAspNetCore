using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WepApiSqlReact.Models
{
    public class Permiso
    {
        [Key]
        public int Id { get; set; }
        public string NombreEmpleado  { get; set; }
        public string ApellidoEmpleado { get; set; }
        public int TipoPermiso { get; set; }
        public string FechaPermiso { get; set; }

    }
}

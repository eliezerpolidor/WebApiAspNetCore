using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepApiSqlReact.Models;

namespace WepApiSqlReact.Context
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }

        public DbSet<Permiso> Permisos { get; set; }

        public object Permiso { get; internal set; }
    }
}

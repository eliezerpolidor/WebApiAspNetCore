using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepApiSqlReact.Context;
using WepApiSqlReact.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WepApiSqlReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PermisosController : ControllerBase
    {
        private readonly AppDbContext context;
        public PermisosController(AppDbContext context)
        {
            this.context = context;
        }
        // GET: api/<PermisosController> 
        /// <summary>
        /// Consulta Todo los Persmisos de los Empleados......
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.Permisos.ToList());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            
        }

        // GET api/<PermisosController>/5
        /// <summary>
        /// Obtiene El Persmiso otorgado al Empleados.....
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}", Name ="GetPermiso")]
        public ActionResult Get(int id)
        {
            try
            {

                var permiso = context.Permisos.FirstOrDefault(g => g.Id == id);
                return Ok(permiso);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<PermisosController>
        /// <summary>
        /// Solicitar Permiso al Empleado.....
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Post([FromBody] Permiso permiso)
        {
            try
            {

                context.Permisos.Add(permiso);
                context.SaveChanges();
                return CreatedAtRoute("GetPermiso", new { id = permiso.Id },permiso);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<PermisosController>/5
        /// <summary>
        /// Modificar Persmiso del Empleado......
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Permiso permiso)
        {
            try
            {

                if (permiso.Id==id)
                {
                    context.Entry(permiso).State = EntityState.Modified;
                    context.SaveChanges();
                    return CreatedAtRoute ("GetPermiso, new {id=permiso.Id}", permiso);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<PermisosController>/5
        //[HttpDelete("{id}")]
        //public ActionResult Delete(int id)
        //{
        //    try
        //    {
        //        var permiso = context.Permisos.FirstOrDefault(g => g.Id == id);
        //        if (permiso != null)
        //        {
        //            context.Permisos.Remove(permiso);
        //            context.SaveChanges();
        //            return Ok(id);
        //        }
        //        else
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //        return BadRequest(ex.Message);
        //    }
        //}
    }
}

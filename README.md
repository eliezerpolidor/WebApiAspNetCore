# Challenger Eliezer Polidor
ChallengerEliezerP Asignación para Challenge Técnico para la posición de SSr Full Stack. 
_____
# Asignación:  
La empresa N5 solicita una Web API para el registro de permisos de usuarios, para realizar
esta tarea es necesario cumplir con los siguientes pasos:  
•Cree una tablaaa de permisos con los siguientes campos  

•Cree una tabla PermissionTypes con los siguientes campos:  

•Crear relación entre Permiso y PermissionType.  
•Cree una API web con ASP .NET Core y conserve los datos en SQL Server.  
•Hacer uso de EntityFramework.  
•La Web API debe tener 3 servicios “Solicitar Permiso”, “Modificar Permiso” y “Obtener permisos”. Cada servicio debe persistir un registro de permisos en un índice de búsqueda elástica, el registro insertado en elasticsearch debe contener la misma estructura de la tabla de la base de datos "permiso".  
•Hacer uso del patrón de repositorio y la Unidad de trabajo y CQRS patrón (Deseado). Tenga en cuenta que se requiere apegarse a una arquitectura de servicio adecuada para que la creación de diferentes capas y la inyección de dependencia sea imprescindible.  
• Crear pruebas unitarias para llamar a los tres servicios.  
•Cree una aplicación en ReactJS y use Axios para conectarse al backend.  
•Crear los formularios para consumir la Web API.  
•Dale los estilos a las tres formas, para que se vea lo más atractivo y simple posible.  
•Use buenas prácticas tanto como sea posible en el backend y frontend.  
•Subir el ejercicio a algún repositorio (github, gitlab,etc).

Explicación.  
1.- Diseñe un diagrama de general de que es lo que hay que hacer esto se recomienda hacerl antes de ponerse a codificar,  
en esta parte tambien se diseña cual es el patron de diseño que se va a seguir, en la asignación sugieren que se elabore  
en repository pattern and Unit of Work and CQRS.
2.- Despues de hacer el analisis seguidamente se debe armar la base de datos (tablas y demas).  
3.- Posteriormente armaremos la lógica del negocio el Backend.  
4.- Sigo con la interfaz del usuario que es el REactJs.  
5.- El React lo trabaje con ventanas modales.  
6.- Descargue las siguientes librerias en C#: Install-Package Microsoft.EntityFrameworkCore,
Install-Package Microsoft.EntityFrameworkCore.Relational,Install-Package Microsoft.EntityFrameworkCore.SqlServer,
Install-Package Swashbuckle.AspNetCore y Install-Package Swashbuckle.AspNetCore.Swagger.  
7.- NOTA: el programa me estaba corriendo pero me puse a realizar unas actualizaciones y no se porque me dejo de comunicar el servicio Wep Api,  
con el REactj. El conflicto esta en el archivo "startup.cs", el archivo "services.AddCors();" esto lo coloque en la parte del servicio para poder realizar,  
conexion entre el Reacty la Web Api y mas abajo en el metodo configure termine de aplicar los script siguientes: app.UseCors(options=> 
            {
                options.WithOrigins("http://localhost:3000/");
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });
            
el error dice: que el Cors bloqueo el acceso de React para poder  accesar porque no tiene una cabecera, este error me lo dio despues que actualice a   
VS 2022/ inclusive el archivo "startup.cs" lo union con el de Program.cs/ Esto lo comento para que todos aquellos que esten Desarrollando y vayan a definir el   
servicio ya no vas a encontrar el archivo startup.cs, ahora los servicios los hace en Program.cs.


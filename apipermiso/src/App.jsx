import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { useState, useEffect } from 'react';

function App() {
  
  const baseUrl="https://localhost:44364/swagger/index.html";
  const [data, setData]=useState([]);
  const [modalModificar, setModalModificar]=useState(false);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [permisoSeleccionado, setPermisoSeleccionado]=useState({
        Id: '',
        Nombre: '',
        Apellido: '',
        TipoPermiso: '',
        FechaPermiso: ''
    })
  
    const handleChange=e=>{
      const {name, value}=e.target;
      setPermisoSeleccionado({
        ...permisoSeleccionado,
        [name]: value
      });
    }
    console.log(permisoSeleccionado);


    const abrirCerrarModalInsertado=()=>{
      setModalInsertar(!modalInsertar);
    }

    const abrirCerrarModalModificar=()=>{
      setModalModificar(!modalModificar);
    }
    
  const peticionGet=async()=>{
    await axios.get(baseUrl)
      .then(response=>{
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
  }

  const peticionPost=async()=>{
    delete permisoSeleccionado.Id;
    permisoSeleccionado.TipoPermiso=parseInt(permisoSeleccionado.TipoPermiso);
    await axios.post(baseUrl, permisoSeleccionado)
      .then(response=>{
        setData(data.concat(response.data));
        abrirCerrarModalInsertado();
      }).catch(error=>{
        console.log(error);
      })
  }

  const peticionPut=async()=>{
    permisoSeleccionado.TipoPermiso=parseInt(permisoSeleccionado.TipoPermiso);
    await axios.put(baseUrl+"/"+permisoSeleccionado)
      .then(response=>{
        var respuesta=response.data;
        var dataAuxiliar=data;
        dataAuxiliar.map(Permisos=>{
          if (Permisos.Id===permisoSeleccionado.id) {
            Permisos.NombreEmpleado=respuesta.NombreEmpleado;
            Permisos.ApellidoEmpleado=respuesta.ApellidoEmpleado;
            Permisos.TipoPermiso=respuesta.TipoPermiso;
            Permisos.FechaPermiso=respuesta.FechaPermiso;
          }
        })
        abrirCerrarModalModificar();
     }).catch(error=>{
        console.log(error);
      })
  }


  const seleccionarPermiso=(permiso, caso)=>{
    setPermisoSeleccionado(permiso);
    (caso==="Modificar")&&
      abrirCerrarModalModificar();
  }


  useEffect(()=>{
    peticionGet();
  },[])

  return (
    <div className="App">
      <br/><br/>
      <button onClick={()=>abrirCerrarModalInsertado()} className="btn btn-success">Solicitar Permiso</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo Permiso</th>
            <th>Fecha Permiso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(Permisos=>(
            <tr key={Permisos.Id}>
              <td>{Permisos.Id}</td>
              <td>{Permisos.NombreEmpleado}</td>
              <td>{Permisos.ApellidoEmpleado}</td>
              <td>{Permisos.TipoPermiso}</td>
              <td>{Permisos.FechaPermiso}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>seleccionarPermiso(Permisos,"Modificar")}>Modificar</button> {" "}
                <button className="btn btn-danger">Salir</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
      
      <Modal isOpen={modalInsertar}>
            <ModalHeader>Solicitar Permiso Empleado</ModalHeader>
            <ModalBody>
              <div className="from-group">
                <Label>Nombre: </Label>
                <br/>
                <input type="text" className="form-control" name="Nombre" onChange={handleChange}/>
                <Label>Apellido: </Label>
                <br/>
                <input type="text" className="form-control" name="Apellido" onChange={handleChange}/>
                <Label>Tipo Permiso: </Label>
                <br/>
                <input type="texto" className="form-control" name="TipoPermiso" onChange={handleChange}/>
                <Label>Fecha del Permiso: </Label>
                <br/>
                <input type="text" className="form-control" name="FechaPermiso" onChange={handleChange}/>
                <br/>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>peticionPost}>Solicitar Permiso</button>{"  "}
              <button className="btn btn-danger" onClick={()=>abrirCerrarModalInsertado}>Salir</button>

            </ModalFooter>
      </Modal>      

      <Modal iso={modalModificar}>
            <ModalHeader>Modificar Permiso Empleado</ModalHeader>
            <ModalBody>
              <div className="from-group">
                <Label>Id: </Label>
                <br/>
                <input type="text" className="form-control" readOnly value={permisoSeleccionado && permisoSeleccionado.id}/>
                <br/>
                <Label>Nombre: </Label>
                <input type="text" className="form-control" name="Nombre" onClick={handleChange} value={permisoSeleccionado && permisoSeleccionado.NombreEmpleado}/>
                
                <Label>Apellido: </Label>
                <br/>
                <input type="text" className="form-control" name="Apellido" onClick={handleChange} value={permisoSeleccionado && permisoSeleccionado.ApellidoEmpleado}/>
                <Label>Tipo Permiso: </Label>
                <br/>
                <input type="texto" className="form-control" name="TipoPermiso" onClick={handleChange} value={permisoSeleccionado && permisoSeleccionado.TipoPermiso}/>
                <Label>Fecha del Permiso: </Label>
                <br/>
                <input type="text" className="form-control" onClick={handleChange} value={permisoSeleccionado && permisoSeleccionado.FechaPermiso}/>
                <br/>
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={()=>peticionPut}>Modificar</button>{"  "}
              <button className="btn btn-danger" onClick={()=>abrirCerrarModalModificar()}>Salir</button>

            </ModalFooter>
      </Modal>            

    </div>
  );
}

export default App;

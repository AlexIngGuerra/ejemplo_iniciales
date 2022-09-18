import { useEffect, useState } from 'react'
import './App.css'
import { Editar } from './Editar';
import { Formulario } from './Formulario';
import { Usuario } from './usuario';



function App() {
  //hook
  const [usuarios,setUsuarios] = useState([]);

  useEffect( () => {
    fetch('http://127.0.0.1:5000/select')
    .then((response) => response.json())
    .then((data) => setUsuarios(data));
  }, []);
  

  // Obtener info del hijo
  const [usuarioEditar,setUsuarioEditar] = useState();
  const obtenerUserInfo = (data) => {
    setUsuarioEditar(data)
  }
  
  return (
    <>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-5'>
            <h1>Agregar nuevo usuario</h1>
            {
              (usuarioEditar === undefined) 
              ?
              <Formulario/>
              :
              <Editar user={usuarioEditar}/>
            }
            
          </div>
          <div className='col-7'>
            <h1>Lista de Usuarios:</h1>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Nombre</th>
                  <th scope='col'>Edad</th>
                  <th scope='col'>Genero</th>
                  <th scope='col'>Telefono</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map( usuario => {return <Usuario user={usuario} info={obtenerUserInfo} />})
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

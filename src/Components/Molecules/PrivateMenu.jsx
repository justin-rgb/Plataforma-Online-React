import React from 'react'
import { NavLink } from 'react-router-dom'


const PrivateMenu = () => {
  return (
        <ul>
          <li> <NavLink exact to="/">Inicio</NavLink> </li>
          <li> <NavLink to="/cursos">Cursos</NavLink> </li>
          <li> <NavLink to="/especialidades">Especialidades</NavLink> </li>
          <li> <NavLink to="/profesores">Profesores</NavLink> </li>
          <li> <span className="span-signout" 
            onClick={ ()=> {
              localStorage.removeItem('token')
              window.location = '/'
              } 
            }>
            Cerrar Sesion
            </span>
          </li>
        </ul>
  )
}

export default PrivateMenu



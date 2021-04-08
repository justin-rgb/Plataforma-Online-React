import React from 'react'
import { NavLink } from 'react-router-dom'

const PublicMenu = () => {
  return (
    <ul>
      <li> <NavLink exact to="/">Inicio</NavLink> </li>
      <li> <NavLink to="/registrarse"> Registrarse </NavLink></li>
      <li> <NavLink to="/login">Iniciar Sesion </NavLink> </li>
    </ul>
  )
}

export default PublicMenu

import axios from 'axios'
import React from 'react'
import icon2 from'./../../img/icon2.png'
import { Link } from 'react-router-dom'

function changeType(){
  const cambiarTipo = document.getElementById('password')
  if(cambiarTipo.type === "password"){
    cambiarTipo.type = 'text'
  }else{
  cambiarTipo.type = 'password'
  }

}

const authentication = e =>{
  e.preventDefault()
  const form = e.target
  console.log(form.email.value)

  const data = {
    "email": form.email.value,
    "password": form.password.value
  }
  axios.post('https://api-edteam.alejogs4.now.sh/login',data)
  .then(r => {
    localStorage.setItem('token',r.data.token)
    window.location = '/'
  })
  .catch(e => console.log(e))
}


const Login = () => {

  return (
    <div className="ed-grid">
      <div className="l-block"></div>

      <div className="m-to-center m-60 lg-40 centrar-div">
        <h1 className="center"> Iniciar Sesión </h1>
        <form action="" onSubmit={authentication.bind() }>
          <div className="form__item">
            <label htmlFor="email"> Email
            <input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required/>
            </label>
          </div>

          <div className="form__item">
            <label htmlFor="password"> Contraseña
            <input  type="password" name="password" id="password" placeholder="Ingrese su contraseña" required/>
            </label>
            <img 
              onClick={ e => {
                e.preventDefault()
                return changeType()
              }}  
              src={icon2} alt="Icono Contrasena" 
              className="icon-pass" />
          </div>

          <div className="form__item">
            <input type="submit" value="Iniciar Sesion" className="button full" />
          </div>
        </form>
        
        <div className="center">
          <p> No tienes cuenta de usuario? </p> 
          <Link to="/registrarse">Crear Cuenta</Link>
        </div>
        
      </div>

    </div>
  )
}

export default Login

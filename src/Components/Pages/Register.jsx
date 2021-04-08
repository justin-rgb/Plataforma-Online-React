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

function changeType2(){
  const cambiarTipo2 = document.getElementById('password2')
  if(cambiarTipo2.type === "password"){
    cambiarTipo2.type = 'text'
  }else{
  cambiarTipo2.type = 'password'
  }
}

const registration = e =>{
    e.preventDefault()

    const form = e.target 
    
    if(form.password.value === form.password2.value){
      const data ={
        "email": form.email.value,
        "name": form.name.value,
        "password": form.password.value 
      }

      axios.post('https://api-edteam.alejogs4.now.sh/signup', data)
      .then(r => alert('Usuario Creado'))
      .catch( () => alert('Error al crear usuario') )
    }else{
      alert('Ambas contraseñas deben coincidir')
    }
}


const Register = () => {

  return (
    <div className="ed-grid">
      <div className="l-block"></div>

      <div className="m-to-center m-60 lg-40 centrar-div-reg">
        <h1 className="center"> Registrarse </h1>
        <form action="" onSubmit={registration.bind() }>

          <div className="form__item">
            <label htmlFor="name"> Nombre Completo
            <input type="text" name="name" id="name" placeholder="Ingrese su Nombre" required/>
            </label>
          </div>

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
              className="icon-pass-reg" />
          </div>
            
          <div className="form__item">
            <label htmlFor="password2"> Repetir Contraseña
            <input type="password" name="password2" id="password2" placeholder="Repetir Contrasena" required/>
            </label>
            <img 
              onClick={ e => {
                e.preventDefault()
                return changeType2()
              }}  
              src={icon2} alt="Icono Contrasena" 
              className="icon-pass-reg-2" />
          </div>

          <div className="form__item">
            <input type="submit" value="Iniciar Sesion" className="button full" />
          </div>
        </form>
        
        <div className="center">
          <p> Ya tienes cuenta de usuario? </p> 
          <Link to="/login">Inicia Sesion</Link>
        </div>

      </div>
    </div>
  )   
}


export default Register

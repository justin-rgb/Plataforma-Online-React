import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Courses from './Pages/Courses'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Teachers from './Pages/Teachers'
import Protected from './Routes/Protected'
import Specialities from './Pages/Specialities'
import Clase from './Pages/Clase'
import Course from './Pages/Course'
import Speciality from './Pages/Speciality'
import Public from './Routes/Public'
import Page404 from './Pages/Page404'
import Header from './Organisms/Header'

const App = () =>(
  <Router>

    <Header />
    
    <Switch>

      <Route path="/" exact component={Home} /> 
      <Protected path="/curso/:id" exact component={Course}/> 
      <Protected path="/cursos" exact component={Courses}/> 
      <Protected path="/especialidad/:id" exact component={Speciality}/> 
      <Protected path="/especialidades" exact component={Specialities}/> 
      <Protected path="/profesores" exact component={Teachers}/> 
      <Protected path="/clase/:id" exact component={Clase}/> 

      <Public path="/login" component={Login} />
      <Public path="/registrarse" component={Register} />
      
      <Route component={Page404} />

    </Switch>
  </Router>
)

export default App

import React from 'react'
import Banner from './../Molecules/Banner'
import { connect } from "react-redux"
import { useEffect } from 'react'
import store from '../../Redux/store'
import { getAllCourses } from '../../Redux/actionCreators'
import Card from './../Molecules/Card'

const Courses = ({match, courses}) => { 

  useEffect( () =>{
    store.dispatch(getAllCourses())
  },[match] )

  return (
    <>
      <Banner 
        color="dark-color"
        image={{
          src: "https://www.itsitio.com/wp-content/uploads/2020/04/aulanexo-portada-01010-780x405.jpg",
          alt: "Banner de Cursos"
        }}
        title="Cursos Online"
        subtitle="Se un experto en programacion con EDteam"
      />
    {
      courses &&
      <main className="ed-grid m-grid-4">
        {
          courses.map( c =>( 
            <Card 
              key={c.id} 
              title={c.title} 
              poster={c.poster} 
              path="curso"
              cardId={c.id}
            />
          ))
        }

      </main>
    }

    </>
  )
}

const mapStateToProps = state =>({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps,{})(Courses)

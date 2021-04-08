import React,{ useEffect } from 'react'
import Banner from './../Molecules/Banner'
import store from './../../Redux/store'
import { getAllTeachers } from '../../Redux/actionCreators'
import { connect } from 'react-redux'
import Teacher from './../Organisms/Teacher'

const Teachers = ({match, teachers}) => {

  useEffect(() => {
     store.dispatch(getAllTeachers())
  }, [match])

  console.log(teachers)
  return (
    <>
      <Banner 
        color="third-color"
        image={{
          src: "https://ofdpinternacional.com/wp-content/uploads/2018/07/AULA-1.jpg",
          alt: "Banner de Profesores"
        }}
        title="Nuestros Profesores"
        subtitle="Conozca a todos nuestros Profesores"
      />

        {
          teachers &&
          <main className="ed-grid m-grid-3 l-grid-4 row-gap">
            {
              teachers.map(t =>(
                <Teacher
                key={t.id}
                nombre={t.nombre}
                picture={t.picture}
                />
              ))
            }
          </main>
        }
    </>
    
  )
}

const mapStateToProps = state =>({
  teachers: state.teacherReducer.teachers
})

export default connect(mapStateToProps, {})(Teachers)

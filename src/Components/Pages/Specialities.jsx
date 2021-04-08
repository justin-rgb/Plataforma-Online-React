import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllSpecialities } from '../../Redux/actionCreators'
import store from '../../Redux/store'
import Banner from './../Molecules/Banner'
import Card from './../Molecules/Card'

const Specialities = ({specialities}) => {

  useEffect( () => {
    store.dispatch(getAllSpecialities())
  } ,[])

  return (
    <>
      <Banner 
        color="first-color"
        image={{
          src: "https://www.evolmind.com/articulos/img/2019/03/Beneficios-de-utilizar-el-aula-virtual.jpeg",
          alt: "Banner de Especialidades"
        }}
        title="Especialidades"
        subtitle="Conozca todas nuestras especialidades en EDteam"
      />

      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(c =>(
              <Card 
                key={c.id} 
                title={c.title} 
                poster={c.poster}
                path="especialidad"
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
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps,{})(Specialities)

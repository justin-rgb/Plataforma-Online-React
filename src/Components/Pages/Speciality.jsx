import React from 'react'
import { useEffect } from 'react'
import { getSpeciality } from '../../Redux/actionCreators'
import store from '../../Redux/store'
import Banner from '../Molecules/Banner'
import { connect } from 'react-redux'

const Speciality = ({ speciality }) => {

  useEffect(()=>{
    store.dispatch(getSpeciality(1))
  } ,[])

  return (
    <>
    {
      speciality &&
      <>
        <Banner 
          color="dark-color"
          title={speciality.name}
          subtitle={speciality.info}
          image={{
                src: speciality.poster,
                alt: speciality.name
              }}
          background={{
                src: speciality.poster,
                alt: speciality.name
              }}
          courseBanner
        />
      </>
    }


    </>
  )
}

const mapStateToProps = state =>({
  speciality: state.specialityReducer.speciality
})
export default connect(mapStateToProps , {})(Speciality)

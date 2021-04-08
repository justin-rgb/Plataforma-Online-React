import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCourse } from '../../Redux/actionCreators'
import store from '../../Redux/store'
import Banner from './../Molecules/Banner'

const Course = ({course }) => {

  useEffect(() =>{
    store.dispatch(getCourse(1))
  } , [])

    return(
      <>
        {
          course &&
          <>
            <Banner 
              color="dark-color"
              title={course.name}
              subtitle={course.information}
              image={{
                src: course.picture,
                alt: course.title
              }}
              background={{
                src: course.picture,
                alt: course.title
              }}
              courseBanner
              especialidad={course.data.specialities[0].name}
            />

              <main className="ed-grid lg-grid-10">
                <div className="lg-cols-7">
                  <div className="course-fectures">

                    <div>
                      <h1>Temario del Curso </h1>
                    </div>

                  </div>
                </div>

              </main>

          </>
        }
      </>
    )


}

const mapStateToProps = state =>({
  course: state.courseReducer.course
})

export default connect(mapStateToProps,{})(Course)

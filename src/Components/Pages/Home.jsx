import React from 'react'
import Banner from './../Molecules/Banner'
import { connect } from "react-redux"
import Publication from './../Organisms/Publication'
import { useEffect } from 'react'
import store from './../../Redux/store'
import { getAllCourses, getAllPosts } from './../../Redux/actionCreators'
import Card from './../Molecules/Card'

const Home = ({ posts, courses}) => {

  useEffect(() =>{
    store.dispatch(getAllPosts())
  } ,[])

  useEffect(() =>{
    store.dispatch(getAllCourses())
  },[])

  return (
    <>
      <Banner 
        color="dark-color"
        image=""
        background={{
          src: "https://depor.com/resizer/3_9coGem5-5d8tfcCWcrR31leEU=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TYT4IU2L2ZCS5JZUYFF52TWMA4.PNG",
          alt: "Hogwarts"
        }}
        title="Bienvenido a la Academia Hogwarts"
        subtitle="Aprende todos los cursos sobre la magia"
        home
      />
      {
      courses &&
      <div className="ed-grid m-grid-4">
        {
          courses.map( c => (
            c.id >0 && c.id <5 ?
              <Card
                key={c.id} 
                poster={c.poster}
                title={c.title}
                path="curso"
                cardId={c.id}
              />
            :
          ""
          ))
      
        }
      </div>
      }

  
      <main className="ed-grid m-grid-3">
        <div className="l-block m-cols-2">
          <h2> Ultimas Publicaciones</h2>
          <div className="">
            {
              posts ?
              <div>
                {
                  posts.map(p => 
                  <Publication 
                    key={p.id}
                    title={p.title}
                    author={p.author}
                    fecha={p.fecha}
                    content={p.content}
                  />)
                }
              </div>
              :
              <h3> No existen publicaciones</h3>
            }
          </div>
        </div>
        <div>
          <h3> Lista de Categorias </h3>
          <ul className="feature-list">
            <li> <span> React.js </span></li>
            <li> <span> Angular </span></li>
            <li> <span> Ionic </span> </li>
          </ul>
        </div>

      </main>
    </>
  )
}

const mapStateToProps = state =>({
  posts: state.postReducer.posts,
  courses: state.courseReducer.courses
})


export default connect(mapStateToProps, {})(Home)

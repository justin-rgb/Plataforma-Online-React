import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({color, image, title, subtitle, home, background, courseBanner, especialidad}) => {
  return (
    <div className={`main-banner img-container l-block ${color}`} >
      <div className="ed-grid">
        <div>
          <img 
          src={image.src}
          alt={image.alt} 
          className="main-banner__img"
          />

        {
          home ?
            <div className="m-grid-2 ed-grid">
              <div className="main-banner__data s-center l-block">
                <h1 className="main-banner__title">{title}</h1>
                <p>{subtitle}</p>
                <Link to="/cursos" className="button accent-color"> Ver Cursos </Link>
              </div>

              <div className="img-container s-ratio-16-9">
                <img 
                  src={background.src}
                  alt={background.alt}
                />
              </div>
            </div>
        :
        courseBanner ?
        <div className="ed-grid m-grid-3">
          <div className="main-banner__data l-block m-cols-2">
            <h1 className="main-banner__title">{title}</h1>
            <p>{subtitle}</p>
            {
              especialidad &&
              <p>Este curso forma parte de <a href="/"> {especialidad} </a> </p>
            }
          </div>

          <div className="img-container s-ratio-16-9 m-cols-1">
            <img 
              src={background.src}
              alt={background.alt}
            />
          </div>
        </div> 
      :
        <div className="main-banner__data s-center">
          <h1 className="main-banner__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
        }   
        </div>
      </div>
    </div>
  )
}

export default Banner

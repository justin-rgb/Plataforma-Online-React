import React from 'react'

const Teacher = ({id, picture, nombre }) => {
  return (
    <article key={id}>
    <div>
      <div className="img-container circle">
        <img src={picture} alt={nombre}/>
      </div>
    </div>

    <div className="s-center">
      <p className="t3">{nombre}</p>
    </div>

  </article>
  )
}

export default Teacher

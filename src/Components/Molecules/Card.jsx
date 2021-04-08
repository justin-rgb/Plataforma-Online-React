import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({poster, title, path, cardId }) => {
  return (
    <article classname="card  s-border ">
      <div className="img-container s-ratio-16-9">
        <Link to={`/${path}/${cardId}`}>
          <img src={poster} alt={title}/>
        </Link>
      </div>

      <div className="card__data s-pxy-2">
        <h3 className="t4 center">{title}</h3>
      </div>
    </article>
  )
}

export default Card

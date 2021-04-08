import React from 'react'

const Clase = ({match}) => {
  return (
    <div className="ed-grid">
      <h1> Clase {match.params.id} </h1>
    </div>
  )
}

export default Clase

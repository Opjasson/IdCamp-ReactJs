import React from 'react'

function CardHeader({image, kategori}) {
  return (
    <header>
        <h4>{kategori}</h4>
        <img src={image} alt="" />
    </header>
  )
}

export default CardHeader

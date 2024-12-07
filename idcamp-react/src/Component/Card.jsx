import React from 'react'
import CardBody from './CardBody'

function Card({image, kategori, date, title, content, link}) {
  return (
    <article>
        <CardBody date={date}/>
    </article>
  )
}

export default Card

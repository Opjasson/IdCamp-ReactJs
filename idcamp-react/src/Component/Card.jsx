import React from 'react'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

function Card({image, kategori, date, title, content, link}) {
  return (
    <article>
        <CardHeader image={image} kategori={kategori} />
        <CardBody date={date} title={title} content={content} link={link}/>
    </article>
  )
}

export default Card

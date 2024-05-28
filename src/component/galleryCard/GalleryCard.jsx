import React from 'react'
////styles
import "./styles.scss"
import MiniGalleryCard from './MiniGalleryCard'
const GalleryCard = () => {
  return (
    <div className='gallery-card-container'>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
      <MiniGalleryCard/>
    </div>
  )
}

export default GalleryCard
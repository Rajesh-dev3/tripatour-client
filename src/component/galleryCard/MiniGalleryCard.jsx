import React from 'react'
////styles
import "./styles.scss"
import { cardImage } from '../../assets/images'
const MiniGalleryCard = () => {
  return (
    <div className='min-card-container'>
      <div className="min-card-sec1">
        <img src={cardImage} alt="cardimage" />
      </div>
      <div className="min-card-sec2">
        <div className="min-card-top">

        <img src={cardImage} alt="cardimage" />
        </div>
        <div className="min-card-bottom">
        <img src={cardImage} alt="cardimage" />
        <img src={cardImage} alt="cardimage" />

        </div>
      </div>
      <div className="min-card-sec3">

        <img src={cardImage} alt="cardimage" />
        <img src={cardImage} alt="cardimage" />
      </div>
    </div>
  )
}

export default MiniGalleryCard
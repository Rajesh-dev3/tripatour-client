import React from 'react'
////styles
import "./styles.scss"
import { cardImage,cardImage1,cardImage2,cardImage3,cardImage4,cardImage5,cardImage6 } from '../../assets/images'
const MiniGalleryCard = () => {
  return (
    <div className='min-card-container'>
      <div className="min-card-sec1">
        <img src={cardImage1} alt="cardimage1" />
      </div>
      <div className="min-card-sec2">
        <div className="min-card-top">

        <img src={cardImage2} alt="cardimage2" />
        </div>
        <div className="min-card-bottom">
        <img src={cardImage3} alt="cardimage3" />
        <img src={cardImage4} alt="cardimage4" />

        </div>
      </div>
      <div className="min-card-sec3">

        <img src={cardImage5} alt="cardimage5" />
        <img src={cardImage6} alt="cardimage6" />
      </div>
    </div>
  )
}

export default MiniGalleryCard
import React from 'react'
import './Campus.css'
import Gallery_1 from '../../assets/images/gallery-1.png'
import Gallery_2 from '../../assets/images/gallery-2.png'
import Gallery_3 from '../../assets/images/gallery-3.png'
import Gallery_4 from '../../assets/images/gallery-4.png'
import white_arrow from '../../assets/images/white-arrow.png'

function Campus() {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={Gallery_1} alt="" />
        <img src={Gallery_2} alt="" />
        <img src={Gallery_3} alt="" />
        <img src={Gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus

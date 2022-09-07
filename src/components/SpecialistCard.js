import React from 'react'
import FB from '../assets/facebook.svg'
import Insta from '../assets/insta.svg'
import Twt from '../assets/twitter.svg'

const SpecialistCard = ({imgURL, designation, person}) => {
  return (
    <div className='specialistCard'>
      <img src={imgURL} alt="" />
      <span>{designation}</span>
      <p>{person}</p>
      <div className= "socialLinks">
        <img src={FB} alt="" />
        <img src={Insta} alt="" />
        <img src={Twt} alt="" />
      </div>
    </div>
  )
}

export default SpecialistCard
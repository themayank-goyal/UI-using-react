import React from 'react'
import Button from './Button'

const Service = ({productInfo}) => {
  const {serviceImg, serviceName, serviceInfo} = productInfo;
  return (
    <div className='service'>
      <img src={serviceImg} alt="" />
      <h2>{serviceName}</h2>
      <p>{serviceInfo}</p>
      <Button />
    </div>
  )
}

export default Service
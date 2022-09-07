import React from 'react';
import HeroImage from '../assets/pana.svg';
import Button from './Button';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left'>
        <div className='hero__content'>
          <div className='blankDiv'></div>
          <h1>
            Making the most of the <br /> ever-growing <br />{' '}
            <span>Information technology</span>{' '}
          </h1>
          <p>
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
          <Button />
        </div>
      </div>
      <div className='hero__imageDiv'>
        <img src={HeroImage} alt='' />
      </div>
    </div>
  );
};

export default Hero;

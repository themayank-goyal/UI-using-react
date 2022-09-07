import React from 'react';
import SectionCard from './SectionCard';
import c1 from '../assets/image 10.png'
import c2 from '../assets/image 11.png'
import c3 from '../assets/image 13.png'
import c4 from '../assets/image 14.png'
import c5 from '../assets/image 7.png'
import c6 from '../assets/image 9.png'


const Contact = () => {
  return (
    <SectionCard className="contactSection">
      <div className='address'>
        <span> PT Dwidasa Samsara Indonesia </span>
        <p>Ruko Jalur Sutera 29A No. 53</p>
        <p>Alam Sutera Serpong, Tangerang 15323</p>
      </div>
      <div className='contact'>
        <h3>Contact</h3>
        <p>Phone : +62.21.5314.1135</p>
        <p> Fax : +62.21.5314.1135 </p>
        <p> Email : community@dwidasa.com </p>
      </div>
      <div className='companies'>
        <img src={c5} alt="" />
        <img src={c6} alt="" />
        <img src={c1} alt="" />
        <img src={c2} alt="" />
        <img src={c4} alt="" />
        <img src={c3} alt="" />
      </div>
    </SectionCard>
  );
};

export default Contact;

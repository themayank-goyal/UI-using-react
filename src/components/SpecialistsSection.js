import React from 'react'
import SectionCard from './SectionCard'
import SpecialistCard from './SpecialistCard'
import s1 from '../assets/s1.svg'
import s2 from '../assets/s2.svg'
import s3 from '../assets/s3.svg'
import s4 from '../assets/s4.svg'
import line from '../assets/zigzag.svg'

const SpecialistsSection = () => {
  return (
    <>
    <h1 className='sectionTitle'>Mobile Specialist</h1>
    <img className='line' src={line} alt="" />
    <SectionCard className="specialistSection">
      <SpecialistCard imgURL={s1} designation="System Analyst" person="Rodney Stratton" />
      <SpecialistCard imgURL={s2} designation="System Analyst" person="Rodney Stratton" />
      <SpecialistCard imgURL={s3} designation="System Analyst" person="Rodney Stratton" />
      <SpecialistCard imgURL={s4} designation="System Analyst" person="Rodney Stratton" />
    </SectionCard>
    </>
  )
}

export default SpecialistsSection
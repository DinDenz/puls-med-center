import React from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import DocCard from './DocCard';
import doctors from './DoctorsData';

export default function Doctors() {
  return (
    <div className='main'>
      <div className='container' >
        <div className="main__content">
          <div className='about-title-section'>
            <div className="back">
              <div className="back-background"></div>
            </div>
            <h1>Врачи</h1>
          </div>
          <div className="doctors-filter">

          </div>
          <div className="doctors-body">
            <div className="doc-cards">
              {doctors.map((doctor) => (
                <DocCard key={doctor.id} 
                name={doctor.name} 
                specialty = {doctor.specialty}
                category = {doctor.category}
                experience = {doctor.experience}
                photo = {doctor.photo}
                />
              ))}
            </div>
          </div>

          <SectionForm />
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import DocCard from './DocCard'
import img1 from './../../../IMG/doctors/1docClooney.jpg';

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
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
              <DocCard img1={img1}/>
            </div>
          </div>

          <SectionForm />
        </div>
      </div>
    </div>
  )
}

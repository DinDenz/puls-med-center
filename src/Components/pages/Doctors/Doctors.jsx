import React from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import DocCard from './DocCard'
import img1 from './../../../IMG/doctors/1docClooney.jpg';
import img2 from './../../../IMG/doctors/2docD.jpg';
import img3 from './../../../IMG/doctors/3docHouse.jpg';
import img4 from './../../../IMG/doctors/4docJD.jpg';
import img5 from './../../../IMG/doctors/5docLevin.jpg';
import img6 from './../../../IMG/doctors/6docLis.jpg';
import img7 from './../../../IMG/doctors/7docLob.jpg';
import img8 from './../../../IMG/doctors/8docPes.jpg';
import img9 from './../../../IMG/doctors/9docKoks.jpg';

export default function Doctors() {
  const doctors = [

  ]
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
              <DocCard img1={img1} />
              <DocCard img1={img2} />
              <DocCard img1={img3} />
              <DocCard img1={img4} />
              <DocCard img1={img5} />
              <DocCard img1={img6} />
              <DocCard img1={img7} />
              <DocCard img1={img8} />
              <DocCard img1={img9} />
            </div>
          </div>

          <SectionForm />
        </div>
      </div>
    </div>
  )
}

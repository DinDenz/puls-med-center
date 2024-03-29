import React, { useState, useRef, useEffect } from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import DocCard from './DocCard';
import doctors from './DoctorsData';
import DoctorsFilter from './DoctorsFilter';

export default function Doctors() {
  const dataForFilter = [
    { value: "Все специальности", text: "Все специальности" },
    { value: "Кардиология", text: "Кардиология" },
    { value: "Детская кардиология", text: "Детская кардиология" },
    { value: "УЗИ", text: "УЗИ" },
    { value: "Ревматология", text: "Ревматология" },
    { value: "Рентгенология", text: "Рентгенология" },
    { value: "Кардиохирургия", text: "Кардиохирургия" },
  ]
  const defaultValue = 'Все специальности';
  const [filterValue, setFilterValue] = useState(defaultValue);
  const spanRef = useRef();
  const [chosenDocs, setChosenDocs] = useState(doctors);
  useEffect(() => {
    if (filterValue === defaultValue) {
      setChosenDocs(doctors);
    } else {
      setChosenDocs(doctors.filter((doctor) => doctor.specialty.toLowerCase() === filterValue.toLowerCase()));
    }
  }, [filterValue]);


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
            <DoctorsFilter data={dataForFilter}
              defaultValue={defaultValue}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              spanRef={spanRef} />
          </div>
          <div className="doctors-body">
            <div className="doc-cards">
              {chosenDocs.map((doctor) => (
                <DocCard key={doctor.id}
                  docID={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  category={doctor.category}
                  experience={doctor.experience}
                  photo={doctor.photo}
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

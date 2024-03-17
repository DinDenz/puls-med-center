import React from 'react';
import { useParams } from 'react-router-dom';
import napravleniya from "./DataForNapraleniya";
import NotFound from '../../common/NotFound';
import doctors from "./../Doctors/DoctorsData";
import DocCard from '../Doctors/DocCard';


export default function NapravleniyaPage() {
  const { type } = useParams();
  //console.log(useParams());
  const currentNapravl = napravleniya.find(napr => napr.type === type);
  const currentDocs = doctors.filter(doc => doc.typeSpec === type);
  return (
    <>
      <div className='main'>
        <div className='container' >
          <div className="main__content">
            <div className='napr-title-section'>
              <div className="back">
                <div className="back-background"></div>
              </div>
              <h1>{currentNapravl.title}</h1>
            </div>
            {currentNapravl ? (
              <div className="napr-page" key={currentNapravl.id}>
                <div className="napr-page__text">{currentNapravl.text}</div>
                <div className="napr-page__table">
                  <p className="napr-page__table_info">Стоимость консультации врача</p>
                  <table className="table">
                    <thead className="table__head">
                      <tr className="table__head_row">
                        <th className="table__head_row--title">Услуга</th>
                        <th className="table__head_row--cost">Стоимость</th>
                      </tr>
                    </thead>
                    <tbody className="table__body">
                      <tr className="table__body_row">
                        <td>Первичный прием врача</td>
                        <td><span>{currentNapravl.price_first} BYN</span></td>
                      </tr>
                      <tr className="table__body_row">
                        <td>Повторный прием врача</td>
                        <td><span>{currentNapravl.price_second} BYN</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <NotFound />
            )}
            <div className="doctors-section">
              <p>Выбрать специалиста</p>
              <div className='doctors-section--docs'>
                {currentDocs.map(doctor => (
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
          </div>
        </div>
      </div>
    </>
  )
}

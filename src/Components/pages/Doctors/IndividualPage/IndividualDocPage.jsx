import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../../common/NotFound';
import doctors from '../DoctorsData';

export default function IndividualDocPage() {
    //console.log(useParams()) возвращает объект с заданными параметрами
    const { id } = useParams()
    const currentDoc = doctors.find(doctor => doctor.id === id);
    console.log(currentDoc);
    return (
        <div className='main'>
            <div className='container' >
                <div className="main__content">
                    {`/Врачи/${id}`}
                    {currentDoc ? (
                        <div className="doc-page" key={currentDoc.id}>
                            <div className="doc-page__name">
                                {currentDoc.name}
                            </div>
                            <section className="doc-page__info">
                                <div className="doc-page__photo">
                                    <img src={currentDoc.photo} alt="docimg" />
                                </div>
                                <div className="doc-page__form">
                                    form
                                </div>
                                <div className="doc-page__text">
                                    {currentDoc.experience}
                                </div>
                            </section>
                        </div>
                    ) : (
                        <NotFound />
                    )}
                </div>
            </div>
        </div>
    )
}

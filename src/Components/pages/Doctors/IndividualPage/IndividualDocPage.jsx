import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../../common/NotFound';
import doctors from '../DoctorsData';
import IndDocInfo from './IndDocInfo';
import DocPageForm from './DocPageForm';

export default function IndividualDocPage() {
    //console.log(useParams()) возвращает объект с заданными параметрами
    const { id } = useParams()
    const currentDoc = doctors.find(doctor => doctor.id === id);
    //console.log(currentDoc);
    return (
        <div className='main'>
            <div className='container' >
                <div className="main__content">
                    {currentDoc ? (
                        <div className="doc-page" key={currentDoc.id}>
                            <div className="doc-page__name">
                                {currentDoc.name}
                            </div>
                            <section className="doc-page__info">
                                <div className="doc-page__photo">
                                    <div className='doc-page__photo-container'>
                                        <img src={currentDoc.photo} alt="docimg" />
                                    </div>
                                </div>
                                <div className="doc-page__form-container">
                                    <p>Записаться на прием</p>
                                    <DocPageForm currentDocName={currentDoc.name}/>
                                </div>
                                <IndDocInfo currentDoc={currentDoc} />
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

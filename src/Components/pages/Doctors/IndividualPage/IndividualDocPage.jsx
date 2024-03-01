import React from 'react';
import { useParams } from 'react-router-dom';

export default function IndividualDocPage() {
    //console.log(useParams()) возвращает объект с заданными параметрами
    const { id } = useParams()
    return (
        <div className='main'>
            <div className='container' >
                <div className="main__content">
                    {id}
                </div>
            </div>
        </div>
    )
}

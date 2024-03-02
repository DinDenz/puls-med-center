import React from 'react';
import { Link } from 'react-router-dom';

export default function DocCard({ 
    docID, 
    name, 
    specialty, 
    category, 
    experience, 
    photo}) {

    return (
        <div className="doc-card">
            <Link to={`/doctors/${docID}`}>
                <div className="doc-pic">
                    <img src={photo} alt="photo" />
                </div>
                <div className="doc-info">
                    <div className="spec">{specialty}</div>
                    <div className="fio">{name}</div>
                    <div className="doc-char">{category}</div>
                    <div className="doc-experience">{`Стаж : ${experience}`}</div>
                </div>
            </Link>
        </div>
    )
}
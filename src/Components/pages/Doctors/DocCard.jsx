import React from 'react'

export default function DocCard({ name, specialty, category, experience, photo }) {

    return (
        <div className="doc-card">
            <a href="#">
                <div className="doc-pic">
                    <img src={photo} alt="photo" />
                </div>
                <div className="doc-info">
                    <div className="spec">{specialty}</div>
                    <div className="fio">{name}</div>
                    <div className="doc-char">{category}</div>
                    <div className="doc-experience">{`Стаж : ${experience}`}</div>
                </div>
            </a>
        </div>
    )
}

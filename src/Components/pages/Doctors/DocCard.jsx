import React from 'react'

export default function DocCard({img1}) {

    return (
        <div className="doc-card">
            <a href="#">
                <div className="doc-pic">
                    <img src={img1} alt="" />
                </div>
                <div className="doc-info">
                    <div className="spec">кардиолог</div>
                    <div className="fio">Иванов Иван Иванович</div>
                    <div className="doc-char">1-я квалификационная категория</div>
                    <div className="doc-experience">Стаж : 10 лет</div>
                </div>
            </a>
        </div>
    )
}

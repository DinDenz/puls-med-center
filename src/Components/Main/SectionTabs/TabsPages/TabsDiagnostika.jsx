import React from 'react';
import diagn1 from './../../../../IMG/tabs/diagn_1kt.svg'
import diagn2 from './../../../../IMG/tabs/diagn_2mrt.svg'
import diagn3 from './../../../../IMG/tabs/diagn_3xray.svg'
import diagn4 from './../../../../IMG/tabs/diagn_4ekg.svg'
import diagn5 from './../../../../IMG/tabs/diagn_5tridmil.svg'
import diagn6 from './../../../../IMG/tabs/diagn_6scinti.svg'
import diagn7 from './../../../../IMG/tabs/diagn_7uzi.svg'
import diagn8 from './../../../../IMG/tabs/diagn_8rent.svg'

export default function TabsDiagnostika() {
    const diagn = [
        { title: "Компьютерная томография", pic: diagn1, id: 1 },
        { title: "МРТ", pic: diagn2, id: 2 },
        { title: "УЗИ сердца", pic: diagn3, id: 3 },
        { title: "ЭКГ", pic: diagn4, id: 4 },
        { title: "Тридмил-тест", pic: diagn5, id: 5 },
        { title: "ЧП ЭХО-КГ", pic: diagn6, id: 6 },
        { title: "Сцинтиграфия миокарда",pic: diagn7, id: 7 },
        { title: "КТ, МРТ с контрастoм", pic: diagn8, id: 8 },
    ]
    return (
        <>
            {diagn.map((item) => (
                <div className="tab-item" key={item.id}>
                    <a href="#" className="tab-item-card">
                        <div className="pic-box">
                            <img className="pic" src={item.pic} alt="pic" />
                        </div>
                        <div className='subs'>{item.title}</div>
                    </a>
                </div>
            ))}
        </>
    )
}
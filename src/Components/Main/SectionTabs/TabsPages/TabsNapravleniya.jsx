import React from 'react';
import medical1 from './../../../../IMG/tabs/medical_1.svg'
import medical2 from './../../../../IMG/tabs/medical_2.svg'
import medical3 from './../../../../IMG/tabs/medical_3.svg'
import medical4 from './../../../../IMG/tabs/medical_4.svg'

export default function TabsNapravleniya() {
    const napr = [
        { title: "Кардиология", pic: medical1, id: 1 },
        { title: "Детская кардиология", pic: medical2, id: 2 },
        { title: "Беременным", pic: medical3, id: 3 },
        { title: "Ревматология", pic: medical4, id: 4 },
    ]
    return (
        <>
            {napr.map((item) => (
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

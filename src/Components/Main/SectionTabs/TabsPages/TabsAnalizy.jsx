import React from 'react';
import analis1 from './../../../../IMG/tabs/analis_1.svg'
import analis2 from './../../../../IMG/tabs/analis_2.svg'
import analis3 from './../../../../IMG/tabs/analis_3.svg'
import analis4 from './../../../../IMG/tabs/analis_4.svg'
import analis5 from './../../../../IMG/tabs/analis_5.svg'
import analis6 from './../../../../IMG/tabs/analis_6.svg'

export default function TabAnalizy() {
    const analis = [
        { title: "Общие анализы", pic: analis1, id: 1 },
        { title: "Биохимические исследования", pic: analis2, id: 2 },
        { title: "Коагулограмма", pic: analis3, id: 3 },
        { title: "Иммунологические исследования", pic: analis4, id: 4 },
        { title: "Гормональные исследования", pic: analis5, id: 5 },
        { title: "ПЦР-исследования", pic: analis6, id: 6 },
    ]
    return (
        <>
            {analis.map((item) => (
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
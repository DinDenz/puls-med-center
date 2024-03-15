import React from 'react';
import { Link } from 'react-router-dom';
import napravleniya from '../../../pages/Napravleniya/DataForNapraleniya';

export default function TabsNapravleniya() {
    function clickNavLinkHandler() {
        document.documentElement.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            {napravleniya.map((napr) => (
                <div className="tab-item" key={napr.id}>
                    <Link onClick={clickNavLinkHandler} to={`/napravleniya/${napr.type}`} className="tab-item-card">
                        <div className="pic-box">
                            <img className="pic" src={napr.pic} alt="pic" />
                        </div>
                        <div className='subs'>{napr.title}</div>
                    </Link>
                </div>
            ))}
        </>
    )
}

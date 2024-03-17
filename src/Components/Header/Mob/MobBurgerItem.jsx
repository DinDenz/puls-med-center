import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MobBurgerItem({ item, setOpen }) {
    const [isAcOpen, setIsAcOpen] = useState(false);//стэйт для аккордеона
    const iRef = useRef()

    function handlerAccord(event) { //раскрытие аккордиона
        event.preventDefault();
        setIsAcOpen(!isAcOpen);
    }

    function clickLinkHandler() {//клик на ссылку в аккордионе или на ссылку без аккордиона
        setOpen(false);
        document.documentElement.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <li className="item_1 .font-roboto-thin">
            <Link onClick={item.hasAccondion ? handlerAccord : clickLinkHandler} to={item.href}>{item.value}</Link>
            {item.accordeon && (
                <>
                    <a className={isAcOpen ? "accordeon-toggle active" : "accordeon-toggle"}
                        href="#"
                        aria-expanded={isAcOpen}
                        onClick={handlerAccord}></a>
                    <div className="collapse-accordeon"
                        style={isAcOpen ? { height: iRef.current.scrollHeight } : { height: "0px" }}>
                        <div ref={iRef} className="accordeon-body">
                            <ul>
                                {Object.entries(item.accordeon).map(([what, url], index) => (
                                    <li key={index} className="item_2">
                                        <Link onClick={clickLinkHandler} to={`/napravleniya/${url}`}>{what}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}


        </li>
    )
}

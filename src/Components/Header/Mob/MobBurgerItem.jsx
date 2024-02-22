import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MobBurgerItem({ item, setOpen }) {
    const [isOpen, setIsOpen] = useState(false);//стэйт для аккордеона
    const iRef = useRef()

    function handlerAcc(event) {
        event.preventDefault();
        setIsOpen(!isOpen);

    }
    function clickLinkHandler() {
        setOpen(false); // проп прилетевший бургер меню
        document.documentElement.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <li className="item_1 .font-roboto-thin">
            <Link onClick={clickLinkHandler} to={item.href}>{item.value}</Link>
            {item.accordeon && (
                <>
                    <a className={isOpen ? "accordeon-toggle active" : "accordeon-toggle"}
                        href="#"
                        aria-expanded={isOpen}
                        onClick={handlerAcc}></a>
                    <div className="collapse-accordeon"
                        style={isOpen ? { height: iRef.current.scrollHeight } : { height: "0px" }}>
                        <div ref={iRef} className="accordeon-body">
                            <ul>
                                {Object.entries(item.accordeon).map(([what, url], index) => (
                                    <li key={index} className="item_2">
                                        <a href={url}>{what}</a>
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

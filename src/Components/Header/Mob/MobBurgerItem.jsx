import React, { useState } from 'react';
import { useRef } from 'react';

export default function MobBurgerItem({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const iRef = useRef()

    function handlerAcc(event) {
        event.preventDefault();
        setIsOpen(!isOpen);

    }

    return (
        <li className="item_1 .font-roboto-thin">
            <a href={item.href}>{item.value}</a>
            {item.accordeon && (
                <>
                    <a className={isOpen? "accordeon-toggle active" : "accordeon-toggle"} 
                        href="#"
                        aria-expanded={isOpen}
                        onClick={handlerAcc}></a>
                    <div className="collapse-accordeon"
                        style={isOpen ? {height: iRef.current.scrollHeight } : { height: "0px" }}>
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

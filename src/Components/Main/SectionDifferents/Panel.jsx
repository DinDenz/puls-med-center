import React, { useState, useRef } from 'react';
import { ReactComponent as Arrow } from './../../../IMG/arrows/left_arrow.svg';

export default function Panel({ quest }) {
    const [isOpen, setIsOpen] = useState(false);
    const iRef = useRef()

    function handlerAccord(event) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }
    return (
        <div className="panel">
            <div className="panel__head">
                <a
                    className={isOpen ? 'panel__title active' : 'panel__title'}
                    aria-expanded={isOpen}
                    onClick={handlerAccord}
                    href="#">{quest.title}
                    <Arrow className={!isOpen ? "arrow" : "arrow active"} />
                </a>
            </div>
            <div className='panel__collapse'
                style={isOpen ? { height: iRef.current.scrollHeight } : { height: "0px" }}>
                <div ref={iRef} className="accordeon-body">{quest.text}
                    {quest.ul && (
                        <ul>
                            {Object.entries(quest.ul).map(([keyLi, liText]) => (
                                <li key={keyLi}>
                                    {liText}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

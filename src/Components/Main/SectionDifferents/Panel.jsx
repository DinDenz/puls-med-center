import React, { useRef } from 'react';
import { ReactComponent as Arrow } from './../../../IMG/arrows/left_arrow.svg';

export default function Panel({ quest, panelClick, isOpen }) {
    const iRef = useRef();

    function handleClick(event) {
        event.preventDefault();
        panelClick(quest);
    }

    return (
        <div className='panel'>
            <div className="panel__head">
                <a
                    className="panel__title"
                    aria-expanded={isOpen}
                    onClick={handleClick}
                    href="#">{quest.title}
                    <Arrow className={!isOpen ? "arrow" : "arrow active"} />
                </a>
            </div>
            <div className='panel__collapse'
                style={isOpen ? { height: iRef.current.scrollHeight } : { height: "0px" }} >
                <div ref={iRef} className="accordeon-body-2">{quest.text}
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
        </div >
    )
}

import React from 'react';
import { useOpen } from '../../hooks/useOpen';

export default function ContactsAll() {
    const { open, setOpen, ref, dropRef, toggleDrop } = useOpen(); //функционал по открытию-закрытию drop

    return (
        <div ref={ref} className='contacts__all'>
            <div className='contacts__dropdown dropdown'>
                <a className="dropdown__toggle" href="tel:111" onClick={toggleDrop} aria-expanded={open}>
                    111 (A1, МТС, Life)
                    <br />
                    +375 (17) 111-11-11
                </a>
                <div ref={dropRef} className={`dropdown__menu ${open ? 'show' : ''}`}>
                    <div className="contacts__list">
                        <div className="contacts__item"><a href="tel:111">111 (A1, МТС, Life)</a></div>
                        <div className="contacts__item"><a href="tel:+375291121111"><span>+375 (29)</span> 112 11 11</a></div>
                        <div className="contacts__item"><a href="tel:+375291121112"><span>+375 (29)</span> 112 11 12</a></div>
                        <div className="contacts__item"><a href="tel:+375171111111"><span>+375 (17)</span> 111-11-11</a></div>
                    </div>
                </div>
            </div>
            <div className="contacts__workingtime">
                Ежедневно с 8.00 до 20.00
            </div>
        </div>
    )
}

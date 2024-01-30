import React, { useEffect, useState, useRef } from 'react'

export default function CustomSelect() {
    const [open, setOpen] = useState(false);
    const preudoSelectRef = useRef();

    //функционал по открытию-закрытию выпадающего псевдоселекта
    function handleClickOnButton() {
        setOpen(!open);
    }
    function closingClickOutside(event) {
        if (preudoSelectRef.current && !preudoSelectRef.current.contains(event.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', closingClickOutside);
        return () => {
            document.removeEventListener('mousedown', closingClickOutside);
        };
    }, [open]);

    

    return (
        <>
            <select id="select" className='real-select'>
                <option value="Направления" disabled>Направления</option>
                <option value="Кардиология">Кардиология</option>
                <option value="Детская кардиология">Детская кардиология</option>
                <option value="Беременным">Беременным</option>
                <option value="Ревматология">Ревматология</option>
                <option value="Диагностика">Диагностика</option>
                <option value="Лабораторная диагностика">Лабораторная диагностика</option>
            </select>
            <div id="pseudoSelect" className="pseudo-select">
                <button className='pseudo-select__toggle' onClick={handleClickOnButton}><span>Направления</span></button>
                <div ref={preudoSelectRef} className={open ? 'pseudo-select__drop' : 'pseudo-select__drop none'}>
                    <div className='pseudo-select__item'>Кардиология</div>
                    <div className='pseudo-select__item'>Детская кардиология</div>
                    <div className='pseudo-select__item'>Беременным</div>
                    <div className='pseudo-select__item'>Ревматология</div>
                    <div className='pseudo-select__item'>Диагностика</div>
                    <div className='pseudo-select__item'>Лабораторная диагностика</div>
                </div>
            </div>
        </>
    )
}

import React, { useEffect, useState, useRef } from 'react'

export default function CustomSelect() {
    const [open, setOpen] = useState(false);
    const pseudoSelectRef = useRef();

    const defaultValue = "Направления";
    const [selectedValue, setSelectedValue] = useState(defaultValue);//отображается в псевдоселекте как выбранное
    const spanRef = useRef();

    //функционал по открытию-закрытию выпадающего псевдоселекта
    function handleClickOnButton() {
        setOpen(!open);
    }
    function closingClickOutside(event) {
        if (pseudoSelectRef.current && !event.target.closest('.pseudo-select')) {
            setOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', closingClickOutside);
        return () => {
            document.removeEventListener('mousedown', closingClickOutside);
        };
    }, [open]);

    //функционал по назначению измени спана в кнопке по выбранному селекту
    useEffect(() => {
        (selectedValue != defaultValue) ? spanRef.current.style.opacity = "1" :
            spanRef.current.style.opacity = "0.8";
    }, [selectedValue])

    function handleClickOnPsSelDrop(event) {
        const ev = event.target;
        if (ev.className !== "pseudo-select__item") return;
        setSelectedValue(ev.textContent);
        setOpen(false);
    }

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
                <button onClick={handleClickOnButton} className='pseudo-select__toggle'><span ref={spanRef}>{selectedValue}</span></button>
                <div ref={pseudoSelectRef}
                    onClick={handleClickOnPsSelDrop}
                    className={open ? 'pseudo-select__drop' : 'pseudo-select__drop none'}>
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
    // общая функция для обработки клика на псевдоселекте
/* function handleClickOnPseudoSelect(event) {
     const ev = event.target;
     if (ev.className === "pseudo-select__item") {
         setSelectedValue(ev.textContent);
         setOpen(false);
     } else if (ev.className === "pseudo-select__toggle" || ev.parentNode.className === "pseudo-select__toggle") {
         setOpen(!open);
     }
 }*/

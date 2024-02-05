import React, { useEffect, useState, useRef } from 'react';
import { useOpen } from '../../hooks/useOpen';

export default function CustomSelect({ setIsSelectValid, isSelectValid, defaultValue, selectedValue, setSelectedValue, spanRef }) {
    const { open, setOpen, ref, dropRef, toggleDrop } = useOpen(); //функционал по открытию-закрытию выпадающего псевдоселекта

    //функционал по назначению измени спана в кнопке по выбранному селекту
    useEffect(() => {
        (selectedValue != defaultValue) ? spanRef.current.style.opacity = "1" :
            spanRef.current.style.opacity = "0.8";
    }, [selectedValue])

    function handleClickOnPsSelDrop(event) {
        const ev = event.target;
        if (ev.className !== "pseudo-select__item") return;
        if (ev.textContent === "Направления") return;
        setSelectedValue(ev.textContent);
        setOpen(false);
    }
    /*--------------------------------------------------------------------------------*/
    //функционал по передаче значения в реал-селект 
    useEffect(() => {
        const realSelect = document.querySelector(".real-select");
        for (let option of realSelect.options) {
            (option.value === selectedValue) ? (option.selected = true) :
                (option.selected = false);
        }
    }, [selectedValue])
    /*----------------------------------------------------------------------------*/
    useEffect(() => {
        setIsSelectValid(true);
    }, [selectedValue]);

    return (
        <div className={`form-elem-containter ${open ? 'openbord' : ''} ${!isSelectValid && 'invalid'}`}>
            <select name="Napravlenie" className='real-select'>
                <option value="Направления">Направления</option>
                <option value="Кардиология">Кардиология</option>
                <option value="Детская кардиология">Детская кардиология</option>
                <option value="Беременным">Беременным</option>
                <option value="Ревматология">Ревматология</option>
                <option value="Диагностика">Диагностика</option>
                <option value="Лабораторная диагностика">Лабораторная диагностика</option>
            </select>
            <div id="pseudoSelect" className="pseudo-select" ref={ref}>
                <button onClick={toggleDrop}
                    className='pseudo-select__toggle'><span ref={spanRef}>{selectedValue}</span></button>
                <div ref={dropRef}
                    onClick={handleClickOnPsSelDrop}
                    className={open ? 'pseudo-select__drop yes' : 'pseudo-select__drop none'}>
                    <div className='pseudo-select__item'>Направления</div>
                    <div className='pseudo-select__item'>Кардиология</div>
                    <div className='pseudo-select__item'>Детская кардиология</div>
                    <div className='pseudo-select__item'>Беременным</div>
                    <div className='pseudo-select__item'>Ревматология</div>
                    <div className='pseudo-select__item'>Диагностика</div>
                    <div className='pseudo-select__item'>Лабораторная диагностика</div>
                </div>
            </div>
        </div>
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

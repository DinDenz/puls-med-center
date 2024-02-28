import React, { useEffect } from 'react';
import { useOpen } from '../../hooks/useOpen';

export default function CustomSelect({ setIsSelectValid, isSelectValid, defaultValue, selectedValue, setSelectedValue, spanRef, data }) {
    const { open, setOpen, ref, dropRef, toggleDrop } = useOpen(); //функционал по открытию-закрытию выпадающего псевдоселекта
    //функционал по назначению измени спана в кнопке по выбранному селекту
    useEffect(() => {
        (selectedValue != defaultValue) ? spanRef.current.style.opacity = "1" :
            spanRef.current.style.opacity = "0.8";
    }, [selectedValue])

    function handleClickOnPsSelDrop(event) {
        const ev = event.target;
        if (ev.className !== "pseudo-select__item") return;
        if (ev.textContent === defaultValue) return;
        setSelectedValue(ev.textContent);
        setOpen(false);
    }
    /*--------------------------------------------------------------------------------*/
    //функционал по передаче значения в реал-селект 
    //поиск по дата атрибуту использовал так как на страницус отзывами есть 2 компонента с кастом селектом
    //и данный поиск по имени класса находит первый из них тогда, когда нужен второй.
    useEffect(() => {
        const realSelect = document.querySelector(`[data-id="${defaultValue}"]`);
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
        <div className={`inner ${open ? 'openbord' : ''} ${!isSelectValid && 'invalid'}`}>
            <select 
            data-id = {defaultValue}
            name="Napravlenie" 
            className='real-select'>
                {data.map((item) => (
                    <option key={item.value} value={item.value}>{item.text}</option>
                ))}
            </select>
            <div id="pseudoSelect" className="pseudo-select" ref={ref}>
                <button onClick={toggleDrop}
                    className='pseudo-select__toggle'><span ref={spanRef}>{selectedValue}</span></button>
                <div ref={dropRef}
                    onClick={handleClickOnPsSelDrop}
                    className={open ? 'pseudo-select__drop yes' : 'pseudo-select__drop none'}>
                    {data.map((item) => (
                        <div key={item.value} className='pseudo-select__item'>{item.text}</div>
                    ))}
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

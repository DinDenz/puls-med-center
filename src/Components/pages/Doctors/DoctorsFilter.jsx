import React, { useEffect } from 'react';
import { useOpen } from '../../hooks/useOpen';

export default function DoctorsFilter({ defaultValue, filterValue, setFilterValue, spanRef, data }) {
    const { open, setOpen, ref, dropRef, toggleDrop } = useOpen(); //функционал по открытию-закрытию выпадающего псевдоселекта

    //функционал по назначению измени спана в кнопке по выбранному селекту
    useEffect(() => {
        (filterValue != defaultValue) ? spanRef.current.style.opacity = "1" :
            spanRef.current.style.opacity = "0.8";
    }, [filterValue])

    function handleClick(event) {
        const ev = event.target;
        if (ev.className !== "pseudo-select__item") return;
        setFilterValue(ev.textContent);
        setOpen(false);
    }
    return (
        <div className={`filter ${open ? 'openbord' : ''}`}>
            <div className="pseudo-select" ref={ref}>
                <button onClick={toggleDrop}
                    className='pseudo-select__toggle'><span ref={spanRef}>{filterValue}</span></button>
                <div ref={dropRef}
                    onClick={handleClick}
                    className={open ? 'pseudo-select__drop yes' : 'pseudo-select__drop none'}>
                    {data.map((item) => (
                        <div key={item.value} className='pseudo-select__item'>{item.text}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

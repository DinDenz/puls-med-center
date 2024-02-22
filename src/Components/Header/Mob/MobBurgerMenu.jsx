import React, { useRef, useEffect } from 'react';
import MobBurgerItem from './MobBurgerItem';

export default function MobBurgerMenu({ itemsAc, open, setOpen }) {
    const refA = useRef();

    function closingClick(event) {
        if (event.target.className === "close-btn" ||
            !event.target.closest("menu__content")) {
            setOpen(false)
        }
    }
    // modal-open содержит стили для запрета прокрутки страницы и паддинга справа
    //для того чтобы контент не прыгал при исчезающей полосе прокрутки
    useEffect(() => {
        let header = document.querySelector(".header");
        if (open) {
            document.body.classList.add('modal-open');
            header.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
            header.classList.remove('modal-open');
        }
    }, [open]);

    return (
        <div ref={refA} className={open ? 'mob-menu open' : 'mob-menu closed'} onClick={closingClick}>
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                <div className='menu__zapis-btn'>
                    <button className='button font-roboto-medium'>Запись онлайн</button>
                    </div>
                <div className='menu__items'>
                    <ul>
                        {itemsAc.map((itemA) =>
                            <MobBurgerItem key={itemA.id} item={itemA} setOpen ={setOpen}/>
                        )}
                    </ul>
                </div>
                <div className='close-btn' onClick={closingClick}>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                </div>
            </div>
        </div>
    )
}

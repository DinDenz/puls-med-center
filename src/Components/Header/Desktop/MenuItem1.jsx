import React from 'react';
import { useSubmenuToggle } from './../../hooks/useSubmenuToggle';

export default function MenuItem1() {
    const { isShowMenu, showMenu, hideMenu, } = useSubmenuToggle();

    return (
        <div className="menu__item item-1" onMouseOver={showMenu} onMouseOut={hideMenu}>
            <a href="#napravleniya" onClick={hideMenu}>Направления</a>
            <div className={`menu__submenu ${isShowMenu ? 'submenu show' : 'submenu'}`}>
                <div className='submenu__list'>
                    <div className="submenu__item">
                        <a href="#">Кардиология</a>
                    </div>
                    <div className="submenu__item">
                        <a href="#">Детская кардиология</a>
                    </div>
                    <div className="submenu__item">
                        <a href="#">Беременным</a>
                    </div>
                    <div className="submenu__item">
                        <a href="#">Ревматология</a>
                    </div>
                </div>
            </div>
        </div >
    );
}
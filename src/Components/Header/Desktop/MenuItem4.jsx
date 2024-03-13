import React from 'react';
import { useSubmenuToggle } from './../../hooks/useSubmenuToggle';


export default function MenuItem4() {
    const { isShowMenu, showMenu, hideMenu, } = useSubmenuToggle();
    return (
        <div className="menu__item item-4" onMouseOver={showMenu} onMouseOut={hideMenu}>
            <a href="#napravleniya">Реабилитация</a>
            <div className={`menu__submenu ${isShowMenu ? 'submenu show' : 'submenu'}`}>
                <div className='submenu__list'>
                    <div className="submenu__item">
                        <a href="#">Lorem</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

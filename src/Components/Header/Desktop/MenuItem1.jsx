import React from 'react';
import { useSubmenuToggle } from './../../hooks/useSubmenuToggle';
import { Link } from 'react-router-dom';
import napravleniya from './../../pages/Napravleniya/DataForNapraleniya'

export default function MenuItem1() {
    const { isShowMenu, showMenu, hideMenu, } = useSubmenuToggle();

    return (
        <div className="menu__item item-1" onMouseOver={showMenu} onMouseOut={hideMenu}>
            <a href="#napravleniya" onClick={hideMenu}>Направления</a>
            <div className={`menu__submenu ${isShowMenu ? 'submenu show' : 'submenu'}`}>
                <div className='submenu__list'>
                    {napravleniya.map(napr => (
                        <div className="submenu__item" key={napr.id}>
                            <Link to={`/napravleniya/${napr.type}`}>{napr.title}</Link>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div >
    );
}
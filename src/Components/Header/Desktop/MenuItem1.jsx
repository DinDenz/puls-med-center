import React from 'react';

export default function MenuItem1() {

    return (
        <div className="menu__item item-1">
            <a href="#">Направления</a>
            <div className='menu__submenu submenu'>
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
        </div>
    );
}
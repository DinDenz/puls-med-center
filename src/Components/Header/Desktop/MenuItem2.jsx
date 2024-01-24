import React from 'react'

export default function MenuItem2() {
    return (
        <div className="menu__item item-2">
            <a href="#">Лабораторные исследования</a>
            <div className="menu__submenu submenu">
                <div className='submenu__list-2'>
                    <div className="list2__col">
                        <div className="submenu__item">
                            <a href="#">Общие анализы</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">Биохимические исследования</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">Коагулограмма</a>
                        </div>
                    </div>
                    <div className='list2__col'>
                        <div className="submenu__item">
                            <a href="#">Иммунологические исследования</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">Гормональные исследования</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">ПЦР-исследования</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

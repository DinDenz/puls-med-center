import React from 'react';
import { useSubmenuToggle } from './../../hooks/useSubmenuToggle';


export default function MenuItem2() {
    const { isShowMenu, showMenu, hideMenu, } = useSubmenuToggle();
    const labIssled = {
        col1: [
            {
                id: "Общие анализы",
                name: "Общие анализы",
                href: "#"
            },
            {
                id: "Биохимические исследования",
                name: "Биохимические исследования",
                href: "#"
            },
            {
                id: "Коагулограмма",
                name: "Коагулограмма",
                href: "#"
            }
        ],
        col2: [
            {
                id: "Иммунологические исследования",
                name: "Иммунологические исследования",
                href: "#"
            },
            {
                id: "Гормональные исследования",
                name: "Гормональные исследования",
                href: "#"
            },
            {
                id: "ПЦР-исследования",
                name: "ПЦР-исследования",
                href: "#"
            }
        ]
    };

    return (
        <div className="menu__item item-2" onMouseOver={showMenu} onMouseOut={hideMenu}>
            <a href="#napravleniya">Лабораторные исследования</a>
            <div className={`menu__submenu ${isShowMenu ? 'submenu show' : 'submenu'}`}>
                <div className='submenu__list-2'>
                    <div className="list2__col">
                        {labIssled.col1.map((item) => (
                            <div key={item.id} className="submenu__item">
                                <a href={item.href}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                    <div className='list2__col'>
                        {labIssled.col2.map((item) => (
                            <div key={item.id} className="submenu__item">
                                <a href={item.href}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

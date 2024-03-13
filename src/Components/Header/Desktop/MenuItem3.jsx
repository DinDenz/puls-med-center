import React from 'react';
import { useSubmenuToggle } from './../../hooks/useSubmenuToggle';


export default function MenuItem3() {
    const { isShowMenu, showMenu, hideMenu, } = useSubmenuToggle();
    const medicalIssled = {
        col1: [
            {
                id: "Компьютерная томография",
                name: "Компьютерная томография",
                href: "#"
            },
            {
                id: "МРТ",
                name: "МРТ",
                href: "#"
            },
            {
                id: "КТ и МРТ с контрастированием",
                name: "КТ и МРТ с контрастированием",
                href: "#"
            }
        ],
        col2: [
            {
                id: "Электрокардиография (ЭКГ)",
                name: "Электрокардиография (ЭКГ)",
                href: "#"
            },
            {
                id: "УЗИ сердца",
                name: "УЗИ сердца",
                href: "#"
            },
            {
                id: "Чрезпищеводное УЗИ сердца (ЧП ЭХО-КГ)",
                name: "Чрезпищеводное УЗИ сердца (ЧП ЭХО-КГ)",
                href: "#"
            }
        ],
        col3: [
            {
                id: "Сцинтиграфия миокарда",
                name: "Сцинтиграфия миокарда",
                href: "#"
            },
            {
                id: "Нагрузочные исследования(тридмил-тест)",
                name: "Нагрузочные исследования(тридмил-тест)",
                href: "#"
            }
        ]
    };

    return (
        <div className="menu__item item-3" onMouseOver={showMenu} onMouseOut={hideMenu}>
            <a href="#napravleniya">Диагностика</a>
            <div className={`menu__submenu ${isShowMenu ? 'submenu show' : 'submenu'}`}>
                <div className='submenu__list-3'>
                    <div className='list3__col'>
                        {medicalIssled.col1.map((item) => (
                            <div key={item.id} className="submenu__item">
                                <a href={item.href}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                    <div className='list3__col'>
                        {medicalIssled.col2.map((item) => (
                            <div key={item.id} className="submenu__item">
                                <a href={item.href}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                    <div className='list3__col'>
                        {medicalIssled.col3.map((item) => (
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

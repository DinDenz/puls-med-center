import React, { useState } from 'react';
import MobBurgerMenu from './MobBurgerMenu';


export default function MobBurger() {
    const [isActive, setIsActive] = useState(false);
    const itemsAc = [
        {
            id: 0,
            value: "Направления",
            href: "/main",
            accordeon: {
                "Кардиология": "url",
                "Детская кардиология": "url2",
                "Беременным": "url3",
                "Ревматология": "url4",
            },
        },
        {
            id: 1,
            value: "Лабораторные исследования",
            href: "/main",
            accordeon: {
                "Общие анализы": "url",
                "Бихимические исследования": "url2",
                "Коагулограмма": "url3",
                "Иммунологические исследования": "url4",
                "Гормональные исследования": "url5",
                "ПЦР-исследования": "url6",
            },
        },
        {
            id: 2,
            value: "Диагностика",
            href: "/main",
            accordeon: {
                "Компьютерная томография": "url",
                "МРТ": "url2",
                "КТ и МРТ с контрастированием": "url3",
                "ЭКГ": "url4",
                "УЗИ сердца": "url5",
                "ЧП ЭХО-КГ": "url6",
                "Сцинтиграфия миокарда": "url7",
                "тридмил-тест": "url8",
            },
        },
        { id: 3, value: "Контакты", href: "/main" },
        { id: 4, value: "О нас", href: "/main" },
        { id: 5, value: "Врачи", href: "/main" },
        { id: 6, value: "Отзывы", href: "/main" },
    ]

    function toggle() {
        setIsActive(!isActive);
    }
    return (
        <>
            <div className={`burger-button ${isActive ? 'active' : 'unactive'}`}
                onClick={toggle}>
                <span></span>
            </div>
            <MobBurgerMenu itemsAc={itemsAc} open={isActive} setOpen={setIsActive} />
        </>
    )
}

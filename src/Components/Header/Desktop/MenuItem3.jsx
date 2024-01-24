import React from 'react'

export default function MenuItem3() {
    return (
        <div className="menu__item item-3">
            <a href="#">Диагностика</a>
            <div className="menu__submenu submenu">
                <div className='submenu__list-3'>
                    <div className='list3__col'>
                        <div className="submenu__item">
                            <a href="#">Компьютерная томография</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">МРТ</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">КТ и МРТ с контрастированием</a>
                        </div>
                    </div>
                    <div className='list3__col'>
                        <div className="submenu__item">
                            <a href="#">Электрокардиография (ЭКГ)</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">УЗИ сердца</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">Чрезпищеводное УЗИ сердца (ЧП ЭХО-КГ)</a>
                        </div>
                    </div>
                    <div className='list3__col'>
                        <div className="submenu__item">
                            <a href="#">Сцинтиграфия миокарда</a>
                        </div>
                        <div className="submenu__item">
                            <a href="#">Нагрузочные исследования(тридмил-тест)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

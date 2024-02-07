import React from 'react';
import TabsNapravleniya from './TabsPages/TabsNapravleniya'

export default function Tabs() {
    const analis = [
        { title: "Общие анализы", pic: "" },
        { title: "Биохимические исследования", pic: "" },
        { title: "Коагулограмма", pic: "" },
        { title: "Иммунологические исследования", pic: "" },
        { title: "Гормональные исследования", pic: "" },
        { title: "ПЦР-исследования", pic: "" },
    ]
    const diagn = [
        { title: "Компьютерная томография", pic: "" },
        { title: "МРТ", pic: "" },
        { title: "УЗИ сердца", pic: "" },
        { title: "ЭКГ", pic: "" },
        { title: "Тридмил-тест", pic: "" },
        { title: "ЧП ЭХО-КГ", pic: "" },
        { title: "Сцинтиграфия миокарда", pic: "" },
        { title: "КТ и МРТ с контрастированием", pic: "" },
    ]
    return (
        <div className='items-container'>
            <TabsNapravleniya />
        </div>
    )
}

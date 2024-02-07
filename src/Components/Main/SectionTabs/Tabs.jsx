import React from 'react';
import TabsNapravleniya from './TabsPages/TabsNapravleniya';
import TabsDiagnostika from './TabsPages/TabsDiagnostika'

export default function Tabs() {
    const analis = [
        { title: "Общие анализы", pic: "" },
        { title: "Биохимические исследования", pic: "" },
        { title: "Коагулограмма", pic: "" },
        { title: "Иммунологические исследования", pic: "" },
        { title: "Гормональные исследования", pic: "" },
        { title: "ПЦР-исследования", pic: "" },
    ]

    return (
        <div className='items-container'>
            <TabsNapravleniya />
            <TabsDiagnostika />
        </div>
    )
}

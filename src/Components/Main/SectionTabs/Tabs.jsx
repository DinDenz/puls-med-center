import React from 'react';
import TabsNapravleniya from './TabsPages/TabsNapravleniya';
import TabsDiagnostika from './TabsPages/TabsDiagnostika';
import TabAnalizy from './TabsPages/TabsAnalizy'

export default function Tabs() {

    return (
        <div className='items-container'>
            <TabsNapravleniya />
            <TabsDiagnostika />
            <TabAnalizy />
        </div>
    )
}

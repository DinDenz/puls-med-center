import React from 'react';
import TabsNapravleniya from './TabsPages/TabsNapravleniya';
import TabsDiagnostika from './TabsPages/TabsDiagnostika';
import TabAnalizy from './TabsPages/TabsAnalizy'

export default function Tabs({ selectedTab }) {
    const renderTabComponent = () => {
        switch (selectedTab) {
            case 'Направления':
                return <TabsNapravleniya />;
            case 'Анализы':
                return <TabAnalizy />;
            case 'Диагностика':
                return <TabsDiagnostika />;
            default:
                return null;
        }
    };
    return (
        <div className='items-container'>
            {renderTabComponent()}
        </div>
    )
}

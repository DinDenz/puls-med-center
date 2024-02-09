import React, { useState } from 'react';
import TabsNavigation from './TabsNavigation';
import Tabs from './Tabs';


export default function SectionTabs() {
  const [selectedTab, setSelectedTab] = useState('Направления');

  return (
    <div className='section-tabs'>
      <div className="section-tabs__content">
        <div className="tabs-head">
          <div className="tabs-head__title font-roboto-bold">Наши услуги</div>
        </div>
        <div className="tabs-body">
          <div className="tabs-body__nav"><TabsNavigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} /></div>
          <div className="tabs-body__items"><Tabs selectedTab={selectedTab} /></div>
        </div>
      </div>
    </div>
  )
}

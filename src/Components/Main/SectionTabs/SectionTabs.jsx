import React from 'react';
import TabsNavigation from './TabsNavigation';
import Tabs from './Tabs';


export default function SectionTabs() {
  return (
    <div className='section-tabs'>
      <div className="section-tabs__content">
        <div className="tabs-head">
          <div className="tabs-head__title font-roboto-bold">Наши услуги</div>
        </div>
        <div className="tabs-body">
          <div className="tabs-body__nav"><TabsNavigation /></div>
          <div className="tabs-body__items"><Tabs /></div>
          stias eum alias molestiae praesentium libero obcaecati in eveniet.
        </div>
      </div>
    </div>
  )
}

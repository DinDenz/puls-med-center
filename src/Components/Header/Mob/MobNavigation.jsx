import React from 'react';
import MobSearch from './MobSearch';
import MobContacts from './MobContacts';
import MobBurger from './MobBurger';

export default function MobNavigation() {
    return (
        <div className="header__tools">
            <div className="button-mobile">
                <button className="button font-roboto-medium">запись онлайн</button>
            </div>
            <MobSearch />
            <MobContacts />
            <MobBurger />
        </div>
    )
}

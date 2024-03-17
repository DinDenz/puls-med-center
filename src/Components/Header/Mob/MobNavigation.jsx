import React from 'react';
import MobSearch from './MobSearch';
import MobContacts from './MobContacts';
import MobBurger from './MobBurger';

export default function MobNavigation() {
    return (
        <div className="header__tools">
            <div className="button-mobile">
                <a href="https://talon.by/" className="button font-roboto-medium">запись онлайн</a>
            </div>
            <MobSearch />
            <MobContacts />
            <MobBurger />
        </div>
    )
}

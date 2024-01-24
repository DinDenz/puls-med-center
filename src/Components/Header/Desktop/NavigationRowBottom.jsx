import React from 'react';
import MenuItem1 from './MenuItem1';
import MenuItem2 from './MenuItem2';
import MenuItem3 from './MenuItem3';
import MenuItem4 from './MenuItem4';

export default function NavigationRowBottom() {
    return (
        <div className='navigation__row navigation__row--bottom'>
            <div className="menu">
                <MenuItem1 />
                <MenuItem2 />
                <MenuItem3 />
                <MenuItem4 />
            </div>
        </div>
    )
}

import React from 'react';
import NavigationRowTop from './NavigationRowTop';
import NavigationRowBottom from './NavigationRowBottom'

function Navigation() {
    return (
        <div className='navigation-box'>
            <NavigationRowTop />
            <NavigationRowBottom/>
        </div>
    )
}

export default Navigation;


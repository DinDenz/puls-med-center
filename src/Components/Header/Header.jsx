import React from 'react'
import Navigation from './Desktop/Navigation';
import logoMedCentreDeskNobg from '../../IMG/logoMedCentreDeskNobg.png';
import logoMedCentreMobNobg from '../../IMG/logoMedCentreMobNobg.png';
import Logo from './Logo';
import MobNavigation from './Mob/MobNavigation';

function Header() {
    return (
        <div className='header'>
            <div className='header-content__desktop'>
                <div className='container'>
                    <div className="header-row">
                        <Logo image={logoMedCentreDeskNobg} width={"150px"} height={"150px"} />
                        <Navigation />
                    </div>
                </div>
            </div>
            <div className='header-content__mob'>
                <div className='container'>
                    <div className="logo-mob">
                        <Logo image={logoMedCentreMobNobg} width={"54px"} height={"54px"} />
                    </div>
                    <MobNavigation />
                </div>
            </div>
        </div>
    )
}
export default Header;
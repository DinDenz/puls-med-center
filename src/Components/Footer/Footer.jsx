import React from 'react';
import Social from './Social';
import PoleznoCol from './PoleznoCol';
import Populyarno from './PopulyarnoCol';
import Diagnostika from './Diagnostika';


function Footer() {
    return (
        <div className='footer'>
            <div className="back"></div>
            <div className="container footer-content">
                <div className="footer-row">
                    <div className='footer-row-top'>
                        <div className='cols'>
                            <div className="col">
                                <PoleznoCol />
                            </div>
                            <div className="col">
                                <Populyarno />
                            </div>
                            <div className="col">
                                <Diagnostika />
                            </div>
                        </div >
                        <Social />
                    </div>
                    <div className='footer-row-bottom'>
                        <div className='someinfo'>
                            Информация о создателе сайта
                        </div >

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;

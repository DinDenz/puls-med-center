import React from 'react';
import Stocks from './Stocks';

export default function SectionStocksFeedback() {
    return (
        <div className='section-stocks-feedback'>
            <div className="section-stocks-feedback__content">
                <div className="section-stocks-feedback__row">
                    <Stocks />
                    <div className="feedback">

                    </div>
                </div>
            </div>
        </div>
    )
}

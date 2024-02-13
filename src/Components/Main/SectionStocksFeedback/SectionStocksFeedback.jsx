import React from 'react';
import Stocks from './Stocks';
import Feedback from './Feedback';

export default function SectionStocksFeedback() {
    return (
        <div className='section-stocks-feedback'>
            <div className="section-stocks-feedback__content">
                <div className="section-stocks-feedback__row">
                    <Stocks />
                    <Feedback />
                </div>
            </div>
        </div>
    )
}

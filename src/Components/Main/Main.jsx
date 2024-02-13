import React from 'react';
import SectionForm from './SectionForm/SectionForm';
import SectionTabs from './SectionTabs/SectionTabs';
import SectionDifferents from "./SectionDifferents/SectionDifferents";
import SliderSlick from './Slider/SliderSlick';
import SectionStocksFeedback from './SectionStocksFeedback/SectionStocksFeedback';

function Main() {

    return (
        <div className='main'>
            <div className='container' >
                <div className="main__content">
                    <SliderSlick />
                    <SectionForm />
                    <SectionTabs />
                    <SectionDifferents />
                    <SectionStocksFeedback />
                </div>
            </div>
        </div>
    )
}
export default Main;

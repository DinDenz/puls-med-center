import React from 'react';
import SectionForm from './SectionForm/SectionForm';
import SectionTabs from './SectionTabs/SectionTabs';
import SectionDifferents from "./SectionDifferents/SectionDifferents";
import SliderSlick from './Slider/SliderSlick';

function Main() {

    return (
        <div className='main'>
            <div className='container' >
                <div className="main__content">
                    <SliderSlick /> 
                    <SectionForm />
                    <SectionTabs />
                    <SectionDifferents />
                    <br /><br /><br /><br /><br />t voluptatum nobis explicabo voluptates <br /><br /><br /><br /><br /><br />t voluptatum nobis explicabo voluptates <br /><br /><br /><br /><br />
                    t voluptatum nobis explicabo voluptates error quaerat consequatur possimus doloribus neque tenetur molestiae, quidem odio! Atque, dolorum perspiciatis. Ipsum rem molestias eum.
                </div>
            </div>
        </div>
    )
}
export default Main;

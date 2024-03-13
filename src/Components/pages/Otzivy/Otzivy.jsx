import React from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import SectionTabs from '../../Main/SectionTabs/SectionTabs';
import FormForRew from './OtzivyComponents/FormForRew';
import SectionRewList from './OtzivyComponents/SectionRewList';

export default function Otzivy() {
    return (
        <div className='main'>
            <div className='container' >
                <div className="main__content">
                    <FormForRew />
                    <SectionRewList />
                    <SectionTabs />
                    <SectionForm />
                </div>
            </div>
        </div>
    )
}

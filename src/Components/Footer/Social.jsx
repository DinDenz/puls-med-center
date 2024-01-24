import React from 'react';
import SocialMediaComp from './SocialMediaComp';
import PaymentIcons from './PaymentIcons';
import NoButton from '../common/NoButton';

export default function Social() {
    return (
        <div className='social'>
            <div className="for-nobutton">
                <NoButton />
            </div>
            <div className="social-medias">
                <SocialMediaComp type="insta" url="https://www.instagram.com" />
                <SocialMediaComp type="telegram" url="https://web.telegram.org/" />
                <SocialMediaComp type="vkontakte" url="https://vk.com"/>
                <SocialMediaComp type="whatsapp" url="https://www.whatsapp.com" />
            </div>
            <div className="payment-icons">
                <PaymentIcons />
            </div>
            <div className="copyright">
                &#169; Медицинский центр «Пульс»
            </div>
        </div>
    )
}

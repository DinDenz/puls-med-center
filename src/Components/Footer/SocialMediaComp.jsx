import React from 'react';
import insta from '../../IMG/socialmediasIcons/insta.png';
import telegram from '../../IMG/socialmediasIcons/telegram.png';
import vkontakte from '../../IMG/socialmediasIcons/vkontakte.png';
import whatsapp from '../../IMG/socialmediasIcons/whatsapp.png';

export default function SocialMediaComp({ type, url }) {
    return (
        <a href={url} target="_blank" className="social-medias_elem">
            <img src={
                type === "insta" ? insta :
                    type === "telegram" ? telegram :
                        type === "vkontakte" ? vkontakte :
                            type === "whatsapp" ? whatsapp : null} alt="social-media-icon" style={{ width: '25px', height: '25px' }} />
        </a>
    )
}

import React from 'react'
import Icon from './Icon';

function NoButton() {
    return (
        <div className='no-button'>
            <div className="icon-tell"><Icon type="tel" width="42px" height="42px" /></div>
            <a className="no-link font-roboto-bold" href="tel:111">111</a>
            <div className="note">Единый номер</div>
        </div>
    )
}
export default NoButton;
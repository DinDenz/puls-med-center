import React from 'react';

function Logo(props) {
    return (
        <div className='logo-box'>
            <img className="logo" src={props.image} width={props.width} height={props.height} alt="Logo" />
        </div>

    )
}
export default Logo;
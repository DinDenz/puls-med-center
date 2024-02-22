import React from 'react';

function Logo(props) {
    return (
        <div className='logo-box'>
            <a href='/puls-med-center'><img className="logo" src={props.image} width={props.width} height={props.height} alt="Logo" /></a>
        </div>

    )
}
export default Logo;
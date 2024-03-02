import React from 'react';
import iconPen from '../../IMG/iconPen.png';
import iconTelephone from '../../IMG/iconTel.png';

export default function Icon(props) {
    return (
        <span>
            <img src={props.type === 'pen' ? iconPen :
                props.type === 'tel' ? iconTelephone : null} alt="icon"
                style={{ width: props.width, height: props.height }} />
        </span>
    )
}

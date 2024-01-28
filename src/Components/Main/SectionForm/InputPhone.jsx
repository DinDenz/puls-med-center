import React, {useRef} from 'react';

export default function InputPhone() {
    const phoneRef = useRef();
    console.log(phoneRef);

    return (
        <input
            className='form-elem phone-inpt'
            ref={phoneRef}
            type="tel"
            name='tel'
            placeholder='+375 (__) ___ - __ -__'
            value=""
            required />
    )
}

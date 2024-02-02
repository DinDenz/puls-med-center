import React, { useState } from 'react';
import InputMask from 'react-input-mask';

export default function InputPhone() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    return (
        <>
            <InputMask
                onChange={handleChange}
                value={inputValue}
                className='form-elem phone-inpt'
                type="tel"
                name='tel'
                required
                maskChar="_"
                placeholder="+375(__) ___ - __ - __"
                mask="+375(99) 999 - 99 - 99" />
        </>
    )
}

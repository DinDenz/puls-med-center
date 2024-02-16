import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

export default function InputPhone({ setIsTelValid }) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        setIsTelValid(true);
    }, [inputValue]);

    return (
        <>
            <InputMask
                onChange={handleChange}
                value={inputValue}
                className='form-elem phone-inpt'
                type="tel"
                name='tel'
                maskChar="_"
                placeholder="+375(__) ___ - __ - __"
                mask="+375(99) 999 - 99 - 99" />
        </>
    )
}

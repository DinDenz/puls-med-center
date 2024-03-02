import React, { useEffect } from 'react';
import InputMask from 'react-input-mask';

export default function InputPhone({ setIsTelValid,telValue, setTelValue }) {

    function handleChange(e) {
        setTelValue(e.target.value);
    }
    useEffect(() => {
        setIsTelValid(true);
    }, [telValue]);

    return (
        <>
            <InputMask
                onChange={handleChange}
                value={telValue}
                className='form-elem phone-inpt'
                type="tel"
                name='tel'
                maskChar="_"
                placeholder="+375(__) ___ - __ - __"
                mask="+375(99) 999 - 99 - 99" />
        </>
    )
}

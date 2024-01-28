import React from 'react';
import InputMask from 'react-input-mask';

export default function InputPhone() {
   

    return (
        <InputMask 
        className='form-elem phone-inpt'
        type="tel"
        name='tel'
        maskChar="_"
        placeholder="+375(__) ___ - __ - __"
        mask="+375(99) 999 - 99 - 99" />
    )
}

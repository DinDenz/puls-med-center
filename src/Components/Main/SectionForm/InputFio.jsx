import React, { useEffect, useState } from 'react'

export default function InputFio({ setIsFioValid }) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        if (inputValue.length >= 3) setIsFioValid(true);
    }, [inputValue]);

    return (
        <input className='form-elem'
            onChange={handleChange}
            value={inputValue}
            type="text"
            name='FIO'
            placeholder='Ваши ФИО'
            maxLength='50' />
    )
}

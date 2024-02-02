import React, { useEffect, useState } from 'react'

export default function InputFio({ fioRef,setIsFioValid }) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        setIsFioValid(true);
    }, [inputValue]);
    
    return (
        <input className='form-elem'
            ref={fioRef}
            onChange={handleChange}
            value={inputValue}
            type="text"
            name='FIO'
            placeholder='Ваши ФИО'
            maxLength='50' />
    )
}

import React, { useEffect } from 'react'

export default function InputFio({ setIsFioValid, fioValue, setFioValue }) {

    function handleChange(e) {
        setFioValue(e.target.value);
    }
    useEffect(() => {
        if (fioValue && fioValue.length >= 3) {
            setIsFioValid(true);
        }
    }, [fioValue]);

    return (
        <input className='form-elem'
            onChange={handleChange}
            value={fioValue}
            type="text"
            name='FIO'
            placeholder='Ваши ФИО'
            maxLength='50' />
    )
}

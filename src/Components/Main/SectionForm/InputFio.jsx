import React, {useState} from 'react'

export default function InputFio() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    return (
        <input className='form-elem'
            onChange={handleChange}
            value={inputValue}
            type="text"
            name='FIO'
            placeholder='Ваши ФИО'
            required
            maxLength='50' />
    )
}

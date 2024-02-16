import React from 'react';
import { useEffect, useState } from 'react';

export default function TextArea({ areaRef, setIsAreaValid }) {
    const [areaValue, setAreaValue] = useState('');

    function handleChange(event) {
        setAreaValue(event.target.value)
    }
    useEffect(() => {
        if (areaValue.length >= 1) setIsAreaValid(true);
    },
        [areaValue])
    return (
        <textarea name="textarea"
            maxLength="500"
            onChange={handleChange}
            ref={areaRef}
            className='textarea-review'
            cols="30"
            rows="10"
            placeholder='Ваше сообщение'></textarea>
    )
}

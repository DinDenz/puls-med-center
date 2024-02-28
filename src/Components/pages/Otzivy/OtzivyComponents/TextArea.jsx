import React from 'react';
import { useEffect } from 'react';

export default function TextArea({ areaRef, setIsAreaValid, areaValue, setAreaValue }) {

    function handleChange(event) {
        setAreaValue(event.target.value)
    }
    useEffect(() => {
        if (areaValue && areaValue.length >= 1) setIsAreaValid(true);
    },
        [areaValue])
    return (
        <textarea name="textarea"
            maxLength="500"
            value={areaValue}
            onChange={handleChange}
            ref={areaRef}
            className='textarea-review'
            cols="30"
            rows="10"
            placeholder='Ваше сообщение'></textarea>
    )
}

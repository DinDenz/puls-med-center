import React from 'react';
import InputPhone from './InputPhone';
import CustomSelect from './CustomSelect';
import InputFio from './InputFio';

export default function Form({ formRef,
    handleSubmit, isSelectValid,
    defaultValue, selectedValue,
    setSelectedValue, spanRef, setIsSelectValid,
    isFioValid, fioRef, setIsFioValid,
    isTelValid, telRef, setIsTelValid }) {
    return (
        <form ref={formRef}
            className='feedback-form'
            action="#" method="post"
            onSubmit={handleSubmit}
            onKeyDown={(e) => (e.key === 'Enter') ? e.preventDefault() : ''}// это написал так как при нажатии на enter срабатвало событие из кнопки в псевдоселекте
            encType="multipart/form-data">
            <CustomSelect isSelectValid={isSelectValid} defaultValue={defaultValue} selectedValue={selectedValue} setSelectedValue={setSelectedValue} spanRef={spanRef} setIsSelectValid={setIsSelectValid} />
            <div className={`form-elem-containter--inpt ${!isFioValid && 'invalid'}`}><InputFio fioRef={fioRef} setIsFioValid={setIsFioValid} /></div>
            <div className={`form-elem-containter--inpt ${!isTelValid && 'invalid'}`}><InputPhone telRef={telRef} setIsTelValid={setIsTelValid} /></div>
            <div className='form-elem-containter--bt'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
        </form>
    )
}

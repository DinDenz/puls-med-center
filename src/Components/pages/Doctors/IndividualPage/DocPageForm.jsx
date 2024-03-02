import React from 'react';
import { useState } from 'react';
import useSmallFormValidation from "./../../../hooks/useSmallFormValidation"
import InputFio from "./../../../Main/SectionForm/InputFio";
import InputPhone from "./../../../Main/SectionForm/InputPhone";

export default function DocPageForm({ currentDocName }) {
    const [isFioValid, setIsFioValid] = useState(true);//валидность ФИО
    const [isTelValid, setIsTelValid] = useState(true);//валидность телефона
    const [isFormValid, setIsFormValid] = useState(true);//валидность формы 
    const [fioValue, setFioValue] = useState(''); //значение фио
    const [telValue, setTelValue] = useState(''); //значение телефона 
    const validateFormData = useSmallFormValidation({
        setIsFioValid,
        setIsTelValid,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        //if (e.nativeEvent.submitter.name !== 'submit') return;
        setIsFioValid(true);
        setIsTelValid(true);
        const form = e.target;
        const formData = new FormData(form);
        const fio = formData.get('FIO');
        const tel = formData.get('tel');
        const isValid = validateFormData(fio, tel);
        setIsFormValid(isValid);
        if (isValid) {
            for (let [name, value] of formData) {
                console.log(`${name} = ${value}`);
            }
            setFioValue('');
            setTelValue('');
        }
    };
    return (
        <form className="doc-page__form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="doc-page__form--inpt">
                <input type="text" name='doctor' className='form-elem' value={currentDocName} readOnly />
            </div>
            <div className={`doc-page__form--inpt ${!isFioValid && 'invalid'}`}>
                <InputFio setIsFioValid={setIsFioValid} fioValue={fioValue} setFioValue={setFioValue} />
            </div>
            <div className={`doc-page__form--inpt ${!isTelValid && 'invalid'}`}>
                <InputPhone setIsTelValid={setIsTelValid} telValue={telValue} setTelValue={setTelValue} />
            </div>
            <span className='note'>Заполните форму, и мы Вам перезвоним для уточнения деталей</span>
            <div className='doc-page__form--bt'>
                <input className='form-elem button' type="submit" name='submit' value='Записаться' />
            </div>
        </form>
    )
}

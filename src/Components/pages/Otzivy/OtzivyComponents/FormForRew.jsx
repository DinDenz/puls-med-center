import React, { useRef, useState } from 'react';
import InputFio from '../../../Main/SectionForm/InputFio';
import InputPhone from '../../../Main/SectionForm/InputPhone';
import CustomSelect from '../../../Main/SectionForm/CustomSelect';

export default function FormForRew() {
  const formRef = useRef(); //форма
  const [isFioValid, setIsFioValid] = useState(true);//валидность ФИО
  const [isTelValid, setIsTelValid] = useState(true);//валидность телефона
  const [isSelectValid, setIsSelectValid] = useState(true);//валидность селекта
  const [isFormValid, setIsFormValid] = useState(true);//валидность формы 
  //inputFio  
  const fioRef = useRef();
  //inputTel 
  const telRef = useRef();
  //customSelect
  const spanRef = useRef();
  const defaultValue = "Выберите тему";
  const [selectedValue, setSelectedValue] = useState(defaultValue);//отображается в псевдоселекте как выбранное
  const dataForSelect = [
    { value: "Выберите тему", text: "Выберите тему" },
    { value: "Благодарность", text: "Благодарность" },
    { value: "Жалоба", text: "Жалоба" },
    { value: "Предложение", text: "Предложение" },
  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name !== 'submit') return   //условие написал так как онсабмит происходил при каждом изменении значения поля формы, a так он проиходит только при клике на сабмит
    //"обнуляю" стэйты полей, чтобы для тех полей,где значение исправлено на валидное,после экспентирования не оставалась подсветка  
    setIsSelectValid(true);
    setIsFioValid(true);
    setIsTelValid(true);
    const form = e.target;
    const formData = new FormData(form);
    const napravlenie = formData.get('Napravlenie'); //получаем значение ключа напраление в конст направление
    const fio = formData.get('FIO');
    const tel = formData.get('tel');
    const isValid = validateFormData(napravlenie, fio, tel);
    setIsFormValid(isValid);

    function validateFormData(napravlenie, fio, tel) {
      // проверка правильности заполнения полей в общем и индивидуально
      const telRegExp = /^\+375\(\d{2}\) \d{3} - \d{2} - \d{2}$/;
      /*console.log(tel.includes("_") ? 'true' : 'false')*/ //еще один способ проверить строку на пробелы
      if (napravlenie == defaultValue ||
        (!fio || fio.length < 3) ||
        (!tel || (tel.length === 22 && !telRegExp.test(tel)))) {

        if (napravlenie == defaultValue) setIsSelectValid(false);
        if (!fio || fio.length < 3) setIsFioValid(false);
        if (!tel || !telRegExp.test(tel)) setIsTelValid(false);
        return false;
      }

      return true;
    };
    if (isValid) {
      for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
      }
    }
  }
  /*--------------------------------------------------------------*/
  return (
    <div className='review-form-container'>
      <div className="review-form-title font-roboto-bold">Оставьте отзыв</div>
      <form ref={formRef}
        className='review-form'
        action="#" method="post"
        onSubmit={handleSubmit}
        onKeyDown={(e) => (e.key === 'Enter') ? e.preventDefault() : ''}
        encType="multipart/form-data">
        <div className='review-form-cust-sel'>
          <CustomSelect data={dataForSelect} isSelectValid={isSelectValid} defaultValue={defaultValue} selectedValue={selectedValue} setSelectedValue={setSelectedValue} spanRef={spanRef} setIsSelectValid={setIsSelectValid} />
        </div>
        <div className={`review-form--inpt ${!isFioValid && 'invalid'}`}><InputFio fioRef={fioRef} setIsFioValid={setIsFioValid} /></div>
        <div className={`review-form--inpt ${!isTelValid && 'invalid'}`}><InputPhone telRef={telRef} setIsTelValid={setIsTelValid} /></div>
        <div className='review-form--bt'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
      </form>
    </div>
  )
}

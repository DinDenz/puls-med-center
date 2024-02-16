import React, { useRef, useState } from 'react';
import InputPhone from './InputPhone';
import CustomSelect from './CustomSelect';
import InputFio from './InputFio';

export default function SectionForm() {
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
  const defaultValue = "Направления";
  const [selectedValue, setSelectedValue] = useState(defaultValue);//отображается в псевдоселекте как выбранное
  const dataForSelect = [
    { value: "Направления", text: "Направления" },
    { value: "Кардиология", text: "Кардиология" },
    { value: "Детская кардиология", text: "Детская кардиология" },
    { value: "Беременным", text: "Беременным" },
    { value: "Ревматология", text: "Ревматология" },
    { value: "Диагностика", text: "Диагностика" },
    { value: "Лабораторная диагностика", text: "Лабораторная диагностика" },
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
      }//типа Отправка данных
      /*fetch('url', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {//обрабатываем данные при успешной отправке
            return response.json();
        } else {//создаем ошибку при неуспешной отправке
            throw new Error('Ошибка отправки формы');
        }
    })
    .then(data => {//обработка успеха
        console.log('Данные успешно отправлены:', data);
    })
    .catch(error => {//обработка ошибки
        console.error('Произошла ошибка:', error);
    });
}
*/
    }
  };

  return (
    <div className='section-form'>
      <div className="back"></div>
      <div className='section-form-content'>
        <div className='section-form__head head'>
          <div className="head__title font-roboto-bold">Оставить заявку</div>
          <div className="head__subtitle">Заполните форму ниже (все поля обязательны) и
            мы свяжемся с Вами в течение 15 минут</div>
        </div>
        <div className='section-form__body'>
          <div className="body__content">
            <form ref={formRef}
              className='feedback-form'
              action="#" method="post"
              onSubmit={handleSubmit}
              onKeyDown={(e) => (e.key === 'Enter') ? e.preventDefault() : ''}// это написал так как при нажатии на enter срабатвало событие из кнопки в псевдоселекте
              encType="multipart/form-data">
              <CustomSelect data={dataForSelect} isSelectValid={isSelectValid} defaultValue={defaultValue} selectedValue={selectedValue} setSelectedValue={setSelectedValue} spanRef={spanRef} setIsSelectValid={setIsSelectValid} />
              <div className={`form-elem-containter--inpt ${!isFioValid && 'invalid'}`}><InputFio fioRef={fioRef} setIsFioValid={setIsFioValid} /></div>
              <div className={`form-elem-containter--inpt ${!isTelValid && 'invalid'}`}><InputPhone telRef={telRef} setIsTelValid={setIsTelValid} /></div>
              <div className='form-elem-containter--bt'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

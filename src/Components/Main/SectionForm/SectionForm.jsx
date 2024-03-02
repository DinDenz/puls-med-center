import React, { useRef, useState } from 'react';
import SectionFormHead from './SectionFormHead'
import InputPhone from './InputPhone';
import CustomSelect from './CustomSelect';
import InputFio from './InputFio';
import dataForSelect from './dataForSelectList';
import useFormValidation from "./../../hooks/useFormValidation";

export default function SectionForm() {
  const [isFioValid, setIsFioValid] = useState(true);//валидность ФИО
  const [isTelValid, setIsTelValid] = useState(true);//валидность телефона
  const [isSelectValid, setIsSelectValid] = useState(true);//валидность селекта
  const [isFormValid, setIsFormValid] = useState(true);//валидность формы 
  const [fioValue, setFioValue] = useState(''); //значение фио
  const [telValue, setTelValue] = useState(''); //значение телефона 
  //customSelect
  const spanRef = useRef();
  const defaultValue = "Направления";
  const [selectedValue, setSelectedValue] = useState(defaultValue);//отображается в псевдоселекте как выбранное

  //хук валидации
  const validateFormData = useFormValidation({
    defaultValue,
    setIsFioValid,
    setIsTelValid,
    setIsSelectValid,
    includeTextarea: false,
  });
  //обработка сабмита
  const handleSubmit = (e) => {
    e.preventDefault();
    //if (e.nativeEvent.submitter.name !== 'submit') return   //условие написал так как онсабмит происходил при каждом изменении значения поля формы, a так он проиходит только при клике на сабмит
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

    if (isValid) {
      for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
      }
      setFioValue('');
      setTelValue('');
      setSelectedValue(defaultValue);
      //далее Отправка данных формы
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
        <SectionFormHead />
        <div className='section-form__body'>
          <div className="body__content">
            <form
              className='feedback-form'
              action="#" method="post"
              onSubmit={handleSubmit}
              onKeyDown={(e) => (e.key === 'Enter') ? e.preventDefault() : ''}// это написал так как при нажатии на enter срабатвало событие из кнопки в псевдоселекте
              encType="multipart/form-data">
              <div className='form-elem-containter'>
                <CustomSelect data={dataForSelect} isSelectValid={isSelectValid}
                  defaultValue={defaultValue} selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue} spanRef={spanRef}
                  setIsSelectValid={setIsSelectValid} />
              </div>
              <div className={`form-elem-containter--inpt ${!isFioValid && 'invalid'}`}>
                <InputFio setIsFioValid={setIsFioValid} fioValue={fioValue} setFioValue={setFioValue} />
              </div>
              <div className={`form-elem-containter--inpt ${!isTelValid && 'invalid'}`}>
                <InputPhone setIsTelValid={setIsTelValid} telValue={telValue} setTelValue={setTelValue} />
              </div>
              <div className='form-elem-containter--bt'>
                <input className='form-elem button' type="submit" name='submit' value='Отправить' />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

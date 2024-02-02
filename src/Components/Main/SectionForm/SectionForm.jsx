import React, { useEffect, useRef, useState } from 'react';
import InputPhone from './InputPhone';
import CustomSelect from './CustomSelect';
import InputFio from './InputFio';

export default function SectionForm() {
  const formRef = useRef();
  /*const [isSelectValid, setIsSelectValid] = useState('');
  const [isTelValid, setIsTelValid] = useState();
  const [isFioValid, setIsFioValid] = useState();*/

  const handleSubmit = (e) => {
    e.preventDefault();
    /*if(select,value = = defaultvalue || ) подсветить селект
    аналогичено провеирь другие
    надо прокидывать пропсы сверху на компоненты*/
    //тут есть вопросы
    //условие написал так как онсабмит происходил при каждом изменении значения поля формы
    //так он проиходит только при клике на сабмит

    if (e.nativeEvent.submitter.name === 'submit') {
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name, value);
      }
    }
  };

  return (
    <div className='section-form'>
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
              <div className='form-elem-containter'>
                <CustomSelect />
              </div>
              <div className='form-elem-containter--inpt'><InputFio /></div>
              <div className='form-elem-containter--inpt'><InputPhone /></div>
              <div className='form-elem-containter--bt'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

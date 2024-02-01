import React, { useRef } from 'react';
import InputPhone from './InputPhone';
import CustomSelect from './CustomSelect';

export default function SectionForm() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <form ref={formRef} className='feedback-form' action="#" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className='form-elem-containter'>
                <CustomSelect name="CustomSelect" />
              </div>
              <div className='form-elem-containter--inpt'><input className='form-elem' type="text" name='FIO' placeholder='Ваши ФИО' required maxLength='50' /></div>
              <div className='form-elem-containter--inpt'><InputPhone name="InputPhone" /></div>
              <div className='form-elem-containter--bt'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}


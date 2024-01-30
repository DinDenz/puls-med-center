import React from 'react';
import InputPhone from './InputPhone';
import CustomSelect from './CustomSelect';

export default function SectionForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    //обработка формы
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
            <form className='feedback-form' action="#" method="post" onSubmit={handleSubmit}>
              <div className='form-elem-containter'>
                <CustomSelect/>
              </div>
              <div className='form-elem-containter--inpt'><input className='form-elem' type="text" name='FIO' placeholder='Ваши ФИО' required maxLength='50'/></div>
              <div className='form-elem-containter--inpt'><InputPhone /></div>
              <div className='form-elem-containter--bt'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

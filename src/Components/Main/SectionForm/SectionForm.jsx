import React from 'react';
import InputPhone from './InputPhone';

export default function SectionForm() {
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
            <form className='feedback-form' action="#" method="post">
              <div className='form-elem-containter'>
                <select id="select" className='form-elem'>
                  <option value selected disabled>Направления</option>
                  <option value="Кардиология">Кардиология</option>
                  <option value="Детская кардиология">Детская кардиология</option>
                  <option value="Беременным">Беременным</option>
                  <option value="Ревматология">Ревматология</option>
                  <option value="Диагностика">Диагностика</option>
                  <option value="Лабораторная диагностика">Лабораторная диагностика</option>
                </select>
              </div>
              <div className='form-elem-containter inpt'><input className='form-elem' type="text" name='FIO' placeholder='Ваши ФИО' required /></div>
              <div className='form-elem-containter inpt'><InputPhone /></div>
              <div className='form-elem-containter'><input className='form-elem button' type="submit" name='submit' value='Отправить' /></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

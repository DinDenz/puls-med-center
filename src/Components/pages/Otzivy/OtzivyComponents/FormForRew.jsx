import React, { useRef, useState } from 'react';
import InputFio from '../../../Main/SectionForm/InputFio';
import InputPhone from '../../../Main/SectionForm/InputPhone';
import CustomSelect from '../../../Main/SectionForm/CustomSelect';
import TextArea from './TextArea';
import useFormValidation from './../../../hooks/useFormValidation';
import { useDispatch } from 'react-redux';
import { addRev } from './../../../../store/reviewsSlice'

export default function FormForRew() {
  const [isFioValid, setIsFioValid] = useState(true);//валидность ФИО
  const [isTelValid, setIsTelValid] = useState(true);//валидность телефона
  const [isSelectValid, setIsSelectValid] = useState(true);//валидность селекта
  const [isFormValid, setIsFormValid] = useState(true);//валидность всей формы 
  const [isAreaValid, setIsAreaValid] = useState(true);//валидность текстареа
  const [fioValue, setFioValue] = useState(''); //значение фио
  const [telValue, setTelValue] = useState(''); //значение телефона 
  const [areaValue, setAreaValue] = useState('');//значение текстареа
  const dispatch = useDispatch();

  const areaRef = useRef();
  //------------------------------------------------------------customSelect
  const spanRef = useRef();
  const defaultValue = "Выберите тему";
  const [selectedValue, setSelectedValue] = useState(defaultValue);//отображается в псевдоселекте как выбранное
  //-----------------------------------------------------------объект для селекта
  const dataForSelect = [
    { value: "Выберите тему", text: "Выберите тему" },
    { value: "Благодарность", text: "Благодарность" },
    { value: "Жалоба", text: "Жалоба" },
    { value: "Предложение", text: "Предложение" },
  ]
  //-------------------------------------------------------------хук валидаци
  const validateFormData = useFormValidation({
    defaultValue,
    setIsFioValid,
    setIsTelValid,
    setIsSelectValid,
    areaRef,
    setIsAreaValid,
    includeTextarea: true,
  });

  //обработка сабмита
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSelectValid(true);
    setIsFioValid(true);
    setIsTelValid(true);
    setIsAreaValid(true);
    const form = e.target;
    const formData = new FormData(form);
    const napravlenie = formData.get('Napravlenie'); //получаем значение ключа напраление в конст направление
    const fio = formData.get('FIO');
    const tel = formData.get('tel');
    const area = formData.get('textarea');
    const isValid = validateFormData(napravlenie, fio, tel, area);
    setIsFormValid(isValid);

    if (isValid) {
      for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
      }
      function addValidatedReviewToList() {
        dispatch(addRev({ fioValue, selectedValue, areaValue }))
        setFioValue('');
        setTelValue('');
        setAreaValue('');
        setSelectedValue(defaultValue);
      }
      addValidatedReviewToList();
    }
  }
  /*--------------------------------------------------------------*/
  return (
    <div className='review-form-container'>
      <div className="review-form-title font-roboto-bold">Оставьте отзыв</div>
      <form
        className='review-form'
        action="#" method="post"
        onSubmit={handleSubmit}
        onKeyDown={(e) => (e.key === 'Enter') ? e.preventDefault() : ''}
        encType="multipart/form-data">
        <div className='review-form-cust-sel'>
          <CustomSelect data={dataForSelect}
            isSelectValid={isSelectValid} defaultValue={defaultValue}
            selectedValue={selectedValue} setSelectedValue={setSelectedValue}
            spanRef={spanRef} setIsSelectValid={setIsSelectValid} />
        </div>
        <div className={`review-form--inpt ${!isFioValid && 'invalid'}`}>
          <InputFio setIsFioValid={setIsFioValid} fioValue={fioValue} setFioValue={setFioValue} />
        </div>
        <div className={`review-form--inpt ${!isTelValid && 'invalid'}`}>
          <InputPhone setIsTelValid={setIsTelValid} telValue={telValue} setTelValue={setTelValue} />
        </div>
        <div className={`review-form--inpt ${!isAreaValid && 'invalid'}`}>
          <TextArea areaRef={areaRef} setIsAreaValid={setIsAreaValid} areaValue={areaValue} setAreaValue={setAreaValue} />
        </div>
        <div className='review-form--bt'>
          <input className='form-elem button' type="submit" name='submit' value='Отправить' />
        </div>
      </form>
    </div>
  )
}
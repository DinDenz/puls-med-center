import React from 'react';
import Slider from "react-slick";
import img1 from '../../../IMG/sliderImages/img1.jpg';
import img2 from '../../../IMG/sliderImages/img2.jpg';
import img3 from '../../../IMG/sliderImages/img3.jpg';
import img4 from '../../../IMG/sliderImages/img4.jpg';
import { ReactComponent as Arrow } from '../../../IMG/arrows/left_arrow.svg';
//инфо ниже для себя на всякий

//мои стрелки навигации
function MyNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{}}
            onClick={onClick}
        ><Arrow className="next_arrow " /></div>
    );
}
function MyPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{}}
            onClick={onClick}
        ><Arrow className="prev_arrow " /></div>
    );
}


export default function SliderSlick() {
    /* const images = [img1, img2, img3, img4];*/
    const images = [
        {
            id: 1,
            img: img1,
            title: "Ночью дешевле МРТ 24/7!",
            subtitle: "Скидка 20% с 22.00 до 06.00",
            text: "В медицинском центре действует",
            text2: "акция - скидка на ночное МРТ"
        },
        {
            id: 2,
            img: img2,
            title: "Акция! Внимание!",
            subtitle: "Комплекс обследований",
            subtitle2: "от 150BYN",
            text: "Включает консультацию врача, ЭКГ, ЭХО-КГ, анализы"
        },
        {
            id: 3,
            img: img3,
            title: "Справка в школу",
            subtitle: "или детский сад",
            subtitle2: "в спортивные секции, на работу",
            text: "Коплексное обследование детей и взрослых"
        },
        {
            id: 4,
            img: img4,
            title: "Обследование и лечение",
            subtitle: "беременных",
            subtitle2: "с кардиологической патологией",
            text: "Мы проводим обследвание, лечение беременных",
            text2: "женщин с кардиологической патологией"
        }
    ];


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <MyNextArrow />,
        prevArrow: <MyPrevArrow />,
        appendDots: dots => (
            <ul style={{}}> {dots} </ul>
        ),

    };

    return (
        <div className='wrap'>
            <Slider {...settings} className="slider">
                {images.map((image, index) => (
                    <React.Fragment key={image.id}>
                        <img
                            className="slider__item"
                            src={image.img} alt={`picture ${index + 1}`} />
                        <div className="container infoslide">
                            <div className="inner-info">
                                <div className="title font-roboto-bold">{image.title}<br />{image.subtitle}<br />{image.subtitle2}</div>
                                <p className="text">{image.text},<br />{image.text2}</p>
                                <div className="button">подробнее</div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </Slider>
        </div>
    );

}

/*
в параметрах settings вместо дефолтных кнопок передаю свои кнопки в виде компонентов.
выше создаю свои кнопки со своими стилями MyNextArrow и MyPrevArrow
мои кнопки получают пропсы с дефолтными онкликом и именами классов
(они такие же как и были в дефолтных баттонах), поэтому достаточно
просто написать свои стили для этих дефолтных классов в CSS.
второй вариант - можно было сделать свой объект со стилями и передать его
как остаточные параметры в styles:
const mySlyles = {display: "flex",
    "justify-content": "center",
    "align-items": "center",
    top:"45%",
    position: "absolute",
    width: "36px",
    height: "36px",
   "background-color": "#fff",
    "box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    transition: "0.3s",
    "z-index": "89",right: "10%",
    }
    style={{...myStyles}}
   ну, или написать стили туда напрямую, но эти варианты увеличивают размер компонента
*/
//чтобы не выписывать все классы, можно их взять у ФПЖ
/*что касается appendDots
при описании класса slick-dots в css не работало свойство дисплэй флекс, так как
инлайново было указано дисплэй блок в дэфолтном списке. Поэтому по той же логике,что и 
ранее данным методом создаем свой список, который наледует класс slick-dots по дефолту. 
Так же можно добавить свойство customPaging, благодаря которому
можно вместо button внутри li списка сделать сслыку или div и тд. 
В данном случае, если бы нужно было только лишь стилизовать button, то я бы использовал
css или при необходимости замены button на div(например)- customPaging.
Тут мне понадобилось только "исправить" ul. Дефолтные имена классов элементов сохранены*/
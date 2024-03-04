import React from 'react';
import { Link } from 'react-router-dom';

export default function Feedback() {
    const feedbacks = [
        {
            id: 1,
            name: "Надежда",
            text: "Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове."
        },
        {
            id: 2,
            name: "Антон",
            text: "Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60."
        },
    ]
    return (
        <div className="feedback">
            <div className="feedback-head">
                <div className="feedback-head__row">
                    <div className="feedback-head__title font-roboto-bold">Отзывы</div>
                    <div className="feedback-head__link">
                        <Link to="/otzivy" className="feedback-link">Больше отзывов</Link>
                    </div>
                </div>
            </div>
            <div className="feedback-main">
                <div className="feedback-main__row">
                    {feedbacks.map((feedback) => (
                        <div className='feedback-main-content' key={feedback.id}>
                            <div className="feedback-main__name font-roboto-bold">{feedback.name}</div>
                            <div className="feedback-main__text">{feedback.text}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

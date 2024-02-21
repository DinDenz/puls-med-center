import React from 'react';

export default function SectionRewList() {
  const feedbacks = [
    {
      id: 1,
      name: "Надежда",
      text: "Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
      rating: 5,
    },
    {
      id: 2,
      name: "Антон",
      text: "Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.",
      rating: 5,
    },
    {
      id: 3,
      name: "Игорь",
      text: "Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.",
      rating: 5,
    },
    {
      id: 4,
      name: "Анна",
      text: "Благодаря этой клинике я смогла избавиться от давней проблемы с зубами. Лечение было безболезненным и эффективным, а атмосфера в клинике создает уют и комфорт. Очень довольна результатом!",
      rating: 5,
    },
    {
      id: 5,
      name: "Алексей",
      text: "Клиника оправдала все мои ожидания! Врачи высокого уровня, персонал внимателен и заботлив. Я получила не только качественное лечение, но и поддержку на каждом этапе.",
      rating: 5,
    },
    {
      id: 6,
      name: "Жмышенко Валерий",
      text: "Здравствуйте, Светлана",
      rating: 5,
    },
    {
      id: 7,
      name: "Ольга",
      text: "Я благодарна клинике за высокий профессионализм врачей и заботу о пациентах. Лечение было эффективным, а атмосфера в клинике способствует быстрому выздоровлению. Рекомендую всем!",
      rating: 5,
    },
    {
      id: 8,
      name: "Ибрагим",
      text: "О чем-нибудь вам говорит?",
      rating: 5,
    },
    {
      id: 9,
      name: "Антон",
      text: "Отличная клиника с дружелюбным персоналом и современным оборудованием. Врачи проявляют внимательность к каждому пациенту и помогают решить любую проблему. Спасибо за качественное лечение!",
      rating: 5,
    },
    {
      id: 10,
      name: "Антон",
      text: "Мне очень понравилось посещать эту клинику. Процедуры проводятся профессионально, а врачи всегда готовы ответить на все вопросы. Я чувствую себя здесь в надежных руках.",
      rating: 5,
    },
  ]
  return (
    <div className='section-rev-list'>
        <div className="feedback-main">
                <div className="feedback-main__row">
                    {feedbacks.map((feedback) => (
                        <div className='feedback-main-content' key={feedback.id}>
                            <div className="feedback-main__name font-roboto-bold">{feedback.name}</div>
                            <div className="feedback-main__text">{feedback.text}</div>
                            <div className="feedback-main__rating">{`Рейтинг: ${feedback.rating}`}</div>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

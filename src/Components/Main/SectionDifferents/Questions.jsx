import React from 'react'

export default function Questions() {
    const questions = [
        {
            id: 1,
            title: "Где применяется компьютерная томография",
            text: "Компьютерная томография имеет широкий диапазон применения практически во всех областях медицины. Но, в первую очередь, для исследования легких, органов брюшной полости, успешно применяется в урологии, в исследовании костно-суставной системы человека"
        },
        {
            id: 2,
            title: "Какая подготовка нужна перед УЗИ",
            text: "Подготовка требуется только в некоторых случаях:",
            ul: {
                '1': "перед УЗИ мочевого пузыря нужно выпить достаточно жидкости, чтобы орган был наполнен;",
                "2": "перед трансректальным УЗИ рекомендуется очистить кишечник помощью клизмы;",
                "3": "перед УЗИ органов брюшной полости (за 2–3;дня) нужно соблюдать диету, исключив продукты, которые вызывают повышенное газообразование.",
            },
            note: "Перед любым ультразвуковым исследованием нельзя употреблять алкогольные напитки и курить, также желательно воздержаться от плотного приема пищи перед процедурой."
        }
    ]



    return (
        <div className='questions-container'>
            <div className="accordeon-2">
                {questions.map((question) => (
                    <div className="panel" key={question.id}>
                        <div className="panel__head">
                            <a
                                className='panel__title'
                                href="#">{question.title}</a>
                        </div>
                        <div className="panel__collapse">
                            <div className="accordeon-body">{question.text}
                                {question.ul && (
                                    <ul>
                                        {Object.entries(question.ul).map(([keyLi, liText]) => (
                                            <li key={keyLi}>
                                                {liText}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

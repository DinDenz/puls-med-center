import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [
            {
                id: 1,
                userName: "Надежда",
                text: "Lorem Ipsum е индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и ги разбърква, за да напечата с тях книга с примерни шрифтове.",
                theme: "Благодарность",
            },
            {
                id: 2,
                userName: "Антон",
                text: "Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.",
                theme: "Благодарность",
            },
            {
                id: 3,
                userName: "Игорь",
                text: "Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.",
                theme: "Благодарность",
            },
            {
                id: 4,
                userName: "Анна",
                text: "Благодаря этой клинике я смогла избавиться от давней проблемы с зубами. Лечение было безболезненным и эффективным, а атмосфера в клинике создает уют и комфорт. Очень довольна результатом!",
                theme: "Благодарность",
            },
            {
                id: 5,
                userName: "Алексей",
                text: "Клиника оправдала все мои ожидания! Врачи высокого уровня, персонал внимателен и заботлив. Я получила не только качественное лечение, но и поддержку на каждом этапе.",
                theme: "Благодарность",
            },
            {
                id: 6,
                userName: "Жмышенко Валерий",
                text: "Здравствуйте, Светлана",
                theme: "Благодарность",
            },
            {
                id: 7,
                userName: "Ольга",
                text: "Я благодарна клинике за высокий профессионализм врачей и заботу о пациентах. Лечение было эффективным, а атмосфера в клинике способствует быстрому выздоровлению. Рекомендую всем!",
                theme: "Благодарность",
            },
            {
                id: 8,
                userName: "Ибрагим",
                text: "О чем-нибудь вам говорит?",
                theme: "Благодарность",
            },
            {
                id: 9,
                userName: "Антон",
                text: "Отличная клиника с дружелюбным персоналом и современным оборудованием. Врачи проявляют внимательность к каждому пациенту и помогают решить любую проблему. Спасибо за качественное лечение!",
                theme: "Благодарность",
            },
            {
                id: 10,
                userName: "Антон",
                text: "Мне очень понравилось посещать эту клинику. Процедуры проводятся профессионально, а врачи всегда готовы ответить на все вопросы. Я чувствую себя здесь в надежных руках.",
                theme: "Благодарность",
            },
        ]
    },
    reducers: {
        addRev(state, action) {
            //console.log(action);
            //console.log(state);
            state.reviews.unshift({
                id: new Date().toISOString(),
                userName: action.payload.fioValue,
                text: action.payload.areaValue,
                theme: action.payload.selectedValue,

            })
        },
        deleteRev(state, action) { },
    }
})

export const { addRev, deleteRev } = reviewsSlice.actions;
export default reviewsSlice.reducer;
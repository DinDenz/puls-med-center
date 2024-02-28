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
        ]
    },
    reducers: {
        addRev(state, action) {
            console.log(action);
            console.log(state);
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
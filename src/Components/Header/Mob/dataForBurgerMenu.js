const itemsAc = [
    {
        id: 0,
        value: "Направления",
        href: "",
        hasAccondion: true,
        accordeon: {
            "Кардиология": "cardiologiya",
            "Детская кардиология": "detskaya-cardiologiya",
            "Беременным": "cardiologiya-beremennih",
            "Ревматология": "revmatologiya",
        },
    },
    {
        id: 1,
        value: "Лабораторные исследования",
        href: "/main",
        hasAccondion: true,
        accordeon: {
            "Общие анализы": "url",
            "Бихимические исследования": "url2",
            "Коагулограмма": "url3",
            "Иммунологические исследования": "url4",
            "Гормональные исследования": "url5",
            "ПЦР-исследования": "url6",
        },
    },
    {
        id: 2,
        value: "Диагностика",
        href: "/main",
        hasAccondion: true,
        accordeon: {
            "Компьютерная томография": "url",
            "МРТ": "url2",
            "КТ и МРТ с контрастированием": "url3",
            "ЭКГ": "url4",
            "УЗИ сердца": "url5",
            "ЧП ЭХО-КГ": "url6",
            "Сцинтиграфия миокарда": "url7",
            "тридмил-тест": "url8",
        },
    },
    { id: 3, value: "Контакты", href: "/main", hasAccondion: false },
    { id: 4, value: "О нас", href: "/about", hasAccondion: false },
    { id: 5, value: "Врачи", href: "/doctors", hasAccondion: false },
    { id: 6, value: "Отзывы", href: "/otzivy", hasAccondion: false },
    { id: 7, value: "Главная", href: "/puls-med-center", hasAccondion: false },
]
export default itemsAc;
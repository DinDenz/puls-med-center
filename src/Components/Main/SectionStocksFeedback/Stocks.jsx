import React from 'react';
import ktImage from './../../../IMG/imagesForSectionStocks/kt_image.jpg';
import mrtImage from './../../../IMG/imagesForSectionStocks/mrt_image.jpg';

export default function Stocks() {
    const stocks = [
        {
            id: 1,
            title: "Скидка на КТ -10%",
            descr: "Действует с 20.12.2023 года по 07.03.2024 года",
            img: ktImage,
        },
        {
            id: 2,
            title: "Скидка на МРТ -15%",
            descr: "Действует после 20.00 с 10.11.2023 года по 14.02.2024 года",
            img: mrtImage,
        }
    ]
    return (
        <div className="stocks">
            <div className="stocks-head">
                <div className="stocks-head__row">
                    <div className="stocks-head__title font-roboto-bold">Акции</div>
                    <div className="stocks-head__link">
                        <a href="#" className="stocks-link">Смотреть все акции</a>
                    </div>
                </div>
            </div>
            <div className="cards">
                <div className="cards__row">
                    {stocks.map((stock) => (
                        <div className="cards-col" key={stock.id}>
                            <a href="#">
                                <div className="cards-img">
                                    <img src={stock.img} alt="image" />
                                </div>
                                <div className="cards-description">
                                    <div className="description__title">
                                        {stock.title}
                                    </div>
                                    <div className="description__text">
                                        {stock.descr}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import ktImage from './../../../IMG/imagesForSectionStocks/kt_image.jpg';
import mrtImage from './../../../IMG/imagesForSectionStocks/mrt_image.jpg';

export default function Stocks() {
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
                    <div className="cards-col_1">
                        <a href="#">
                            <div className="cards-img">
                                <img src={ktImage} alt="ktimage" />
                            </div>
                            <div className="cards-description">
                                <div className="description__title">
                                    Скидка на КТ -10%
                                </div>
                                <div className="description__text">
                                    Действует с 20.12.2023 года по 07.03.2024 года
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="cards-col_2">
                        <a href="#">
                            <div className="cards-img">
                                <div className="cards-img__container">
                                    <img src={mrtImage} alt="ktimage" />
                                </div>
                            </div>
                            <div className="cards-description">
                                <div className="description__title">
                                    Скидка на МРТ -15%
                                </div>
                                <div className="description__text">
                                    Действует после 20.00 с 10.11.2023 года по 14.02.2024 года
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

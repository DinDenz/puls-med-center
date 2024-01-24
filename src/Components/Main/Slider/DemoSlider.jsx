import React from 'react';
import img1 from '../../../IMG/sliderImages/img1.jpg';
import img2 from '../../../IMG/sliderImages/img2.jpg';
import img3 from '../../../IMG/sliderImages/img3.jpg';
import { ReactComponent as Arrow } from '../../../IMG/arrows/left_arrow.svg';
import { useState, useEffect } from 'react';

export default function Slider() {
    const images = [img1, img2, img3];
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(event) {
        event.preventDefault();
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    function prevSlide(event) {
        event.preventDefault();
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    };
     useEffect(() => {
         const interval = setInterval(() => {
             setCurrentSlide((currentSlide + 1) % images.length);
         }, 3000);
         return () => clearInterval(interval);
     }, [currentSlide, images.length]);

    return (
        <div className='sl-window'>
            <div className="sl-track" style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s',
            }}>
                {images.map((image, index) => (
                    <img key={index}
                        className="slide"
                        src={image} alt={`picture ${index + 1}`} />
                ))}
            </div>
            <div className="sl-nav">
                <ul className='pagination-list'>
                    {images.map((_, index) => (
                        <li key={index}>
                            <span className={`dot ${index === currentSlide ? 'active' : ''}`}></span>
                        </li>
                    ))}
                </ul>
            </div>
            <a href="#" className='next' onClick={nextSlide}><Arrow className="next_arrow" /></a>
            <a href="#" className='prev' onClick={prevSlide}><Arrow className="prev_arrow" /></a>
        </div>
    )
}


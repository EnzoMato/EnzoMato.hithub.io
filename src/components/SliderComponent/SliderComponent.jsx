import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick'; // npm install react-slick slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';
// Data
import { list } from './data.js';

function SliderComponent() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            sliderRef.current.slickNext();
        }, 3000);

        return () => clearInterval(interval);
        }, []);

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const [images] = useState(list);

    return (

        <Slider ref={sliderRef} {...settings}>
            {images.map(img => (
                <div key={img.id}>
                    <img src={img.image} alt={img.name} />
                </div>
            ))}
        </Slider>
        
    );
};

export default SliderComponent;

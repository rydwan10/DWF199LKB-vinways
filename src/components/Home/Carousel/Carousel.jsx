import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// importing images
import banner1 from '../../../assets/banners/banner--1.png'
import banner2 from '../../../assets/banners/banner--2.png'
import banner3 from '../../../assets/banners/banner--3.png'
import banner4 from '../../../assets/banners/banner--4.png'

function Carousel() {
    // className "owl-theme" is optional
    const settings = {
        className: "owl-theme",
        loop: true,
        margin: 2,
        nav: true,
        items: 3,
        center: true,
        autoPlay: true,
        autoplayTimeout: true,
        animateIn: true
    }

    return (
        <OwlCarousel
            {...settings}
        // className="owl-theme"
        // loop
        // margin={2}
        // nav
        // items={3}
        // center={true}
        // autoPlay={true}
        // autoplayTimeout={300}
        // animateIn={true}
        >
            <div className="item"> <img src={banner1} alt="ok" /></div>
            <div className="item"> <img src={banner2} alt="ok" /></div>
            <div className="item"> <img src={banner3} alt="ok" /></div>
            <div className="item"> <img src={banner4} alt="ok" /></div>
            <div className="item"> <img src={banner1} alt="ok" /></div>
            <div className="item"> <img src={banner2} alt="ok" /></div>
        </OwlCarousel>
    )
}

export default Carousel

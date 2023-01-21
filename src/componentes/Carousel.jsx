import React from 'react'
import slide1 from "../assets/images/carousel1.png"
import slide2 from "../assets/images/carousel2.png"
import slide3 from "../assets/images/carousel3.png"
export const Carousel = () => {
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

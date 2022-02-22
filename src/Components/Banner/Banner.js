import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../src/images/Banner/banner-2.png";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade className="banner-carousel">
        {/* -------------------------------------------------------------------------- */
        /*                               CAROUSEL ITEM 1                              */
        /* -------------------------------------------------------------------------- */}
        <Carousel.Item className="banner-carousel__item banner-carousel__item--1">
          <div className="banner-carousel__content">
            <img className="d-block" src={banner1} alt="First slide" />
            <div className="banner-carousel__content--details ">
              <h3>Welcome to the Happy Home</h3>
              <h1>
                <span> Mission</span> 
              </h1>
              <p>
                Many elders in a metropolitan area such as Mumbai are alone at home and do not receive proper care due to the hectic and working schedules of their family members. Happy home is making every effort to eliminate emerging problems such as social isolation and poor quality of care.
              </p>
    
            </div>
          </div>
        </Carousel.Item>
        {/* -------------------------------------------------------------------------- */
        /*                               CAROUSEL ITEM 2                              */
        /* -------------------------------------------------------------------------- */}
        <Carousel.Item className="banner-carousel__item banner-carousel__item--2">
          <div className="banner-carousel__content">
            <img className="d-block" src={banner1} alt="Second slide" />
            <div className="banner-carousel__content--details ">
              <h3>Welcome to the Happy Home</h3>
              <h1>
                <span> Vision</span> 
              </h1>
              <p>
                Our vision is to provide the highest quality care to our clients while adapting a flexible approach to their needs.
              </p>
    
            </div>
          </div>
        </Carousel.Item>
        {/* -------------------------------------------------------------------------- */
        /*                               CAROUSEL ITEM 3                              */
        /* -------------------------------------------------------------------------- */}
        <Carousel.Item className="banner-carousel__item banner-carousel__item--3">
          <div className="banner-carousel__content">
            <img className="d-block" src={banner1} alt="Third slide" />
            <div className="banner-carousel__content--details ">
              <h3>Welcome to the Happy Home</h3>
              <h1>
                <span> JOYFUL ACTIVITIES.</span> 
              </h1>
              <p>
                Happy Home is not a place, it’s a feeling!
              </p>
    
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

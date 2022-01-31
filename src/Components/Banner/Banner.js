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
                <span> Expcetional Service.</span> 
              </h1>
              <p>
                Our mission is to provide excellent post-hospitalization and senior citizen care in a cheerful environment, which is why we name it a Happy Home.
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
                <span> DEDICATED TEAM.</span> 
              </h1>
              <p>
                Our vision is to promote the concept of
active ageing in India and to create an
age-integrated society.
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
                Our vision is to promote the concept of
active ageing in India and to create an
age-integrated society.
              </p>
    
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

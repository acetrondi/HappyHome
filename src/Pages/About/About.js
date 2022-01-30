import React from "react";
import "./About.css";
import img1 from "../../images/About/about-1.JPG";
import img2 from "../../images/About/about-2.JPG";
import img3 from "../../images/About/about-3.JPG";
import img4 from "../../images/About/about-4.JPG";

import { Carousel, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Count from "../../Components/Count/Count";

const About = () => {
  const history = useHistory();
  const goToServices = () => {
    history.push("/services");
  };

  return (
    <section className="about" data-aos="fade-in">
      <h4>About Happy Home</h4>
      <h1 className="text-center mt-3">
        Enriching {" "}
        <span>
          Happiness,
          <br />
          care
        </span>{" "}
        in heart
      </h1>

      <Row xs={1} lg={2} className="g-4 container mt-4 mx-lg-5">
        <Col className="about-banner">
          <Carousel fade indicators={false} controls={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="about-content">
          <h2>Welcome to Happy Home</h2>
          <p>
          The mission of an Happy Home is  to provide elders 
          seeking quiet and serenity with home comforts and peace of mind.
          The elderly are prone to nostalgia.
          They rarely find someone with whom to share their experiences and memories. 
          </p>
          <ul className="about-list">
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Love
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Care
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Happiness
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Humanity
            </li>
          </ul>
        </Col>
      </Row>

      <div className="about-message" data-aos="fade-up">
        <h1>
          Welcome{" "}
          <span>
            to your
            <br /> Home!{" "}
          </span>{" "}
          Make An Appointment
        </h1>
        <button onClick={goToServices} className="btn-learn">
          See Activities at Happy Home
        </button>
      </div>

      <div className="about__statistics" data-aos="fade-in">
        <h4>Why us!</h4>
        <h1 className="text-center mt-3">
          Features That You Will{" "}
          <span>
            Love Us and
            <br />
            Enjoy Specialized
          </span>{" "}
          Care
        </h1>

        <ul className="about__statistics-list">
          <li className="about__statistics-item">
            <i class="fas fa-medal"></i>
            <h4>
              <Count end="100"></Count>
            </h4>
            <p>Medical Necessity</p>
          </li>
          <li className="about__statistics-item">
            <i class="far fa-smile"></i>
            <h4>
              <Count end="100"></Count>
            </h4>
            <p>Diet</p>
          </li>
          <li className="about__statistics-item">
            <i class="fas fa-wrench"></i>
            <h4>
              <Count end="100"></Count>
            </h4>
            <p>Yoga</p>
          </li>
          <li className="about__statistics-item">
            <i class="fas fa-pen-nib"></i>
            <h4>
              <Count end="100"></Count>
            </h4>
            <p>Care</p>
          </li>
          <li className="about__statistics-item">
            <i class="fas fa-money-bill-wave"></i>
            <h4>
              <Count end="10"></Count>
            </h4>
            <p>Staff</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

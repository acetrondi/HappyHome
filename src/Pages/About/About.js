import React from "react";
import "./About.css";
import img1 from "../../images/About/about-1.JPG";
import img2 from "../../images/About/about-2.JPG";
import img3 from "../../images/About/about-3.JPG";
import img4 from "../../images/About/about-4.JPG";

import { Carousel, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";

const About = () => {
  const history = useHistory();
  
  const goToAppointmentForm = () => {
    history.push("/services");
  };

  return (
    <section className="about" data-aos="fade-in">
      <h4>About Happy Home</h4>
      <h1 className="text-center mt-3">
        Why did we begin
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
         After experiencing the need of proper post-hospitalization care at home, a group of three doctors discovered the concept of Happy Home.  A place where elderly people and post hospitalized patient can experience homely treatment with 24/7 medical supervision.
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
            <br />Happy Home!{" "}
          </span>{" "}
        </h1>
        <button onClick={goToAppointmentForm} className="btn-learn">
          Make An Appointment
        </button>
      </div>

      <div className="about__statistics" data-aos="fade-in">
        <h1 className="text-center mt-3">
          Features of Happy Home
        </h1>

        <ul className="about-list">
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Elderly care is available 24/7, plus CCTV surveillance to guarantee that everyone is safe.
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Regular doctor visit to ensure the health of the elderly.
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> If the elderly requires any assistance, a specialised staff member is already on hand to help them.
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Hygienic and homemade food for the elderly, as advised by doctors.

            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Group activities such as board games, music, and so on to ensure the mental health of the elderly.
            </li>
          </ul>
      </div>
    </section>
  );
};

export default About;

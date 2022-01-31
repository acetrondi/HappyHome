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
         After addressing the absence of post-hospitalization care at home after being discharged from the hospital, a group of four doctors devised a new concept of a happy house that focuses on post-hospitalization care, called the Senior Citizens Care Home.


If you agree to this, many elders in a metropolitan area such as Mumbai are alone at home and do not receive sufficient care due to the hectic and working schedules of their family members.

If that's the case, then Happy Home is the place for you.
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
              <i class="fas fa-chevron-circle-down"></i> Elderly care is available 24 hours a day, seven days a week, plus cctv surveillance to guarantee that everyone is safe.
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Visiting the doctor on a regular basis to ensure the health of the elderly.
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> In the event that the elderly require assistance, there will be a specialised crew available to help them.
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> hygienic and homemade food for the elderly, as desired.

            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Elderly people can actively engage in enjoyable activities to keep them happy, healthy, and motivated.
            </li>
          </ul>
      </div>
    </section>
  );
};

export default About;

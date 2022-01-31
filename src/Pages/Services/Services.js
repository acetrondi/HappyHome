import React from "react";
import "./Services.css";
import AppointmentForm from "../../Components/AppointmentForm/AppointmentForm";
import { Col, Row, Spinner } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import useServices from "../../Hooks/useServices";

const Services = () => {
  const { services } = useServices();

  return (
    <div className="cont">
      
    <div className="services container">
      <div className="service_info">
        <h4 className="service_title  ">#Services at Happy Home</h4>
        <h1 className="text-center mt-3 service_title_big">
          Things we do for our loved ones!
        </h1>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 my-5">
        {services.length === 0 ? (
          <Spinner animation="grow" style={{ margin: "50px auto" }} />
        ) : (
          <>
            {services?.map((service) => (
              <Col>
                <Service service={service} key={service.id}></Service>
              </Col>
            ))}
          </>
        )}
      </Row>
    </div>
    <div id="aForm"><AppointmentForm /></div>
    
    </div>
  );
};

export default Services;

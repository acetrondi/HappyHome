import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, img, details} = service; //destructuring keys from service object

  return (
    <Card className="service-card p-3" data-aos="fade-right">
      <Card.Img className="mb-auto" variant="top" src={img} />
      <Card.Body className="px-0 d-flex flex-column">
        <Card.Title className="card-title-service">
          {name}
        </Card.Title>
        <Card.Text className="mt-auto">
          <p> {details}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
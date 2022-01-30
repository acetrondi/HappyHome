import React from "react";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import useServices from "../../Hooks/useServices";
import { Container, Row, Col } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import Statistics from "../../Components/Statistics/Statistics";

const Home = () => {
  const { services } = useServices();
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Statistics></Statistics>

      {/* services section  */}
      <section>
        <Container>
          <h2 className="text-center mb-4">Activities at Happy Home</h2>
          <Row xs={1} md={2} lg={3} className="g-4 mb-5">
            {services?.slice(0, 6)?.map((service) => (
              <Col>
                <Service service={service} key={service.id}></Service>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;


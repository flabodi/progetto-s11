import { Container, Row, Col } from "react-bootstrap";
import a2 from "../assets/images/2a.png";
import b2 from "../assets/images/2b.png";
import c2 from "../assets/images/2c.png";

const Radio = function () {
  return (
    <>
      <Container className="bg-dark text-white">
        <h2>Nuovi episodi radio</h2>
        <Row className=" d-flex justify-content-evenly">
         
          <Col xs={12} sm={4} md={2} className="text-center">
            <img src={a2} alt="" className="radio-img rounded-4" />
            <p>Pròlogo con Abuelo</p>
          </Col>
          <Col xs={12} sm={4} md={2} className="text-center">
            <img src={b2} alt="" className="radio-img rounded-4" />
            <p>The Wander</p>
          </Col>
          <Col xs={12} sm={4} md={2} className="text-center">
            <img src={c2} alt="" className="radio-img rounded-4" />
            <p>Michael Buble Carly Pearce</p>
          </Col>
          <Col xs={12} sm={4} md={2} className="text-center d-sm-none d-lg-block">
            <img src={a2} alt="" className="radio-img rounded-4" />
            <p>Pròlogo con Abuelo</p>
          </Col>
          <Col xs={12} sm={4} md={2} className="text-center  d-sm-none d-lg-block">
            <img src={a2} alt="" className="radio-img rounded-4" />
            <p>Pròlogo con Abuelo</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Radio;

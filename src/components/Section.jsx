import { Container, Row, Col } from "react-bootstrap";

const Section = function () {
  return (
    <>
      <div className="bg-dark p-4">
        <h2 className="text-white mb-4">Altro da esplorare</h2>
        <Container>
          <Row className="g-3">
            {/* Ogni elemento della sezione è una colonna */}
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Esplora per genere</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Decenni</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Attività e stati d animo</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Worldwide</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Classifiche</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Audio spaziale</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Video musicali</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Nuovi artisti</p>
            </Col>
            <Col xs={12} sm={6} lg={4}>
              <p className="section-btn">Hit del passato</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Section;

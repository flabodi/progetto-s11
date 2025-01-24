import { Container, Row, Col } from "react-bootstrap";

const Section = function () {
  return (
    <>
      <div className="bg-dark p-4">
        <h2 className="text-white mb-4">Altro da esplorare</h2>
        <Container>
          <Row className="g-3">
           
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Esplora per genere
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Decenni
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Attività e stati d animo
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Worldwide
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Classifiche
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Audio spaziale
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Video musicali
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Nuovi artisti
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <p className="section-btn d-flex justify-content-between align-items-center">
                Hit del passato
                <i className="bi bi-chevron-right"></i>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Section;

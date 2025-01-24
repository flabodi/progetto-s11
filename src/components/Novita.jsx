import { Card, Container } from "react-bootstrap";
import cm1 from "../assets/images/1a.png";
import cm2 from "../assets/images/1b.png";

const Novita = function () {
  return (
    <>
      <div className="bg-dark text-white ">
        <h1 className="ms-3">Novità</h1>
        <hr className="m-3" />
        <Container fluid className="d-flex flex-nowrap ms-3">
          <Card className="m-2 border-0 bg-dark" style={{ width: "30rem" }}>
            <Card.Body>
              <span className="text-white">NUOVA STAZIONE RADIO</span>
              <Card.Text>
                <h4 className="text-white">
                  Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
                </h4>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" className="rounded-sm" src={cm1} />
          </Card>
          <Card className="m-2 border-0 bg-dark" style={{ width: "30rem" }}>
            <Card.Body>
              <span className="text-white">NUOVA STAZIONE RADIO</span>
              <Card.Text>
                <h4 className="text-white">Ecco la nuova casa latina</h4>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={cm2} />
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Novita;

import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import appleLogo from "../assets/logos/music.svg";

const MyNavbar = function () {
  return (
    <>
      {/* Navbar laterale per desktop (lg) */}
      <Navbar
        expand="lg"
        className="navbar-dark bg-dark position-fixed top-0 start-0 h-100 d-none d-lg-flex flex-column align-items-start"
      >
        <Container className="d-flex flex-column align-items-start">
          {/* Logo in alto */}
          <div>
            <img className="logo mb-4" src={appleLogo} alt="Apple Music Logo" />
          </div>

          {/* Barra di ricerca sotto il logo (visibile solo su schermi grandi con bg-secondary) */}
          <Form className="w-75 d-none d-lg-block bg-secondary">
            <div className="input-group">
              <Button variant="outline-light" className="border-0 rounded-0">
                <i className="bi bi-search"></i>
              </Button>
              <FormControl
                type="search"
                placeholder="Cerca"
                className="bg-secondary text-white border-0 rounded-0"
                aria-label="Search"
              />
            </div>
          </Form>

          {/* Navbar Collapse e Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-0 flex-column w-100">
              {/* Flex in colonna per i link con icone */}
              <Nav.Link href="#home" className="d-flex align-items-center text-white">
                <i className="bi bi-house-door-fill me-2"></i> Home
              </Nav.Link>
              <Nav.Link href="#novita" className="d-flex align-items-center text-white">
                <i className="bi bi-list-ul me-2"></i> Novità
              </Nav.Link>
              <Nav.Link href="#radio" className="d-flex align-items-center text-white">
                <i className="bi bi-broadcast me-2"></i> Radio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar orizzontale per dispositivi mobile e tablet (sm) */}
      <Navbar expand="sm" className="navbar-dark bg-dark d-lg-none">
        <Container>
          {/* Logo in alto */}
          <div>
            <img className="logo mb-4" src={appleLogo} alt="Apple Music Logo" />
          </div>

          {/* Barra di ricerca per mobile (visibile solo su desktop, nascosta su mobile) */}
          <Form className="w-75 d-none d-sm-block">
            <div className="input-group">
              <Button variant="outline-light" className="border-0 rounded-0">
                <i className="bi bi-search"></i>
              </Button>
              <FormControl
                type="search"
                placeholder="Cerca"
                className="bg-secondary text-white border-secondary"
                aria-label="Search"
              />
            </div>
          </Form>

          {/* Navbar Toggle per mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-0">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#novita" className="text-white">
                Novità
              </Nav.Link>
              <Nav.Link href="#radio" className="text-white">
                Radio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ini buat pindah halaman, ganti Nav.Link jadi Link
import "../css/style.css";
import { navLinks } from "../Data/index";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fs-2 fw-bold">
            Rendi Permana <span>Dev</span>.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-links" key={link.id}>
                    <Link to={link.path} className="fs-5">
                      {link.text}
                    </Link>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

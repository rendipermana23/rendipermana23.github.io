import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer-comp">
      <footer>
        <Container>
          <Row>
            <Col>
              <h3 className="fw-bold pt-5 fs-2">
                Rendi.p <span>Dev</span>.
              </h3>
              <p className="fw-bold fs-4 pt-2">My Sosmed</p>
              <div className="sosmed-footer">
                <a
                  href="https://instagram.com/rendip23_?igshid=NGExMmI2YTkyZg=="
                  className="fa-brands fa-instagram fs-3"
                ></a>
                <a
                  href="https://www.linkedin.com/in/rendi-permana-559282238"
                  className="fa-brands fa-linkedin fs-3"
                ></a>
                <a
                  href="https://github.com/rendipermana23"
                  className="fa-brands fa-github fs-3"
                ></a>
                <a href="" className="fa-brands fa-youtube fs-3"></a>
              </div>
            </Col>
            <Col className="menu fw-bold pt-5">
              <h5 className="fw-bold fs-4">Menu</h5>
              <Link to="/">Homepage</Link>
              <Link to="/">About</Link>
              <Link to="/">Project</Link>
              <Link to="/">Contact</Link>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="crtd-by text-center pt-3">
        <p>
          Created By Rendi Permana,{" "}
          <span className="fw-bold">Copyright 2023.</span>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;

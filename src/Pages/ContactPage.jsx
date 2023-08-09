import { Container, Row, Col } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div className="contact-page ">
      <div className="contact min-vh-100">
        <Container className="shadow rounded-2">
          <Row>
            <h3 className="fw-bold text-center pt-3">My Contact & Sosmed</h3>
            <Col className="d-flex justify-content-center align-items-center pt-5">
              <div className="kontak">
                <h3 className="fw-bold pb-2">Contact</h3>
                <div className="wa d-flex">
                  <i className="fa-brands fa-whatsapp fs-1"></i>
                  <p className="fs-3">+629 5315 14005</p>
                </div>
                <div className="email d-flex">
                  <i className="far fa-envelope fs-1"></i>
                  <p className="fs-3">rendiiipermanaaa@gmail.com</p>
                </div>
                <div className="sosmed pt-5">
                  <h3 className="fw-bold">Sosmed</h3>
                  <div className="sosmed-link pt-2">
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
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;

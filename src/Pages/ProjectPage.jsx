import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="project min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
              <p>On Progress...</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectPage;

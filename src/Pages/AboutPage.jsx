import { Container, Row, Col } from "react-bootstrap";
import { mySkills } from "../Data/index";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about min-vh-100">
        <Container>
          <Row className="pt-5">
            <Col>
              <h2 className="fw-bold text-center pt-5 fs-2">About Me</h2>
              <p className="text-center pt-3 fs-4">
                Hai, Saya Rendi Permana, saya adalah seorang Front End
                Developer, disini saya akan memaparkan skills saya, pendidikan
                saya, hobby and many more, anda boleh cek sosmed saya like
                linkedin untuk informasi lebih lengkap.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <h2 className="text-center fs-2 fw-bold pt-5">My Skills</h2>
            </Col>
          </Row>
          <Row className="skills pt-5 pr-2">
            {mySkills.map((data) => {
              return (
                <Col key={data.id}>
                  <img src={data.image} className="shadow rounded-2" />
                  <p className="fw-bold pt-3">{data.text}</p>
                </Col>
              );
            })}
          </Row>
          <Row className="pt-5">
            <h2 className="text-center fs-2 fw-bold pt-5">My Hobby</h2>
            <p className="text-center fs-4">Beberapa Hobby saya.</p>
            <ul className="list-hobby fw-bold fs-5 pt-5 mb-5">
              <li>Workout/GYM</li>
              <li>Reading Books</li>
              <li>Listen Music</li>
              <li>Coding</li>
            </ul>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;

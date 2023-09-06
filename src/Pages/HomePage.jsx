import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import fotoPribadi from "../assets/img/personal.jpg";
import { mySkills } from "../Data/index";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  const pindah = useNavigate(); // variable untuk pindah halaman yang ditempel di button

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <Col>
              <div className="pb-4">
                <h1 className="fw-bold text-center">
                  Welcome To
                  <br /> My Personal Website Permana😊
                </h1>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-primary rounded-1">
                  My CV
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="about w-100 min-vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row>
            <Col className="kotak1 shadow rounded-2 p-4">
              <img src={fotoPribadi} alt="foto pribadi" />
              <p className="pt-5 fw-bold">
                Hai, my name is Rendi Permana
                <br /> and i am a
                <span className="fw-bold"> Front End Developer</span>.
              </p>
            </Col>
            <Col className="kotak2">
              <h2 className="fw-bold pb-5">My Skills</h2>

              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper text-center"
              >
                {mySkills.map((skill) => {
                  return (
                    <SwiperSlide key={skill.id}>
                      <img
                        src={skill.image}
                        alt=""
                        className="shadow rounded"
                      />
                      <h3 className="text-center pt-4">{skill.text}</h3>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="btn-prjt text-center py-4">
        <button
          className="btn btn-success rounded-1"
          onClick={() => pindah("/project")}
        >
          My Project
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};

export default HomePage;

import { mySkills } from "../Data/index";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SkillsComponent = () => {
  return (
    <div className="skillcomp">
      <h2 className="fw-bold pb-5">My Skills</h2>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {mySkills.map((skill) => {
          return (
            <SwiperSlide key={skill.id}>
              <img src={skill.image} alt="" className="" />
              <h3>{skill.text}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SkillsComponent;

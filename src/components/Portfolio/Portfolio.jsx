import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div>
            <button className="projectBtn">hello</button>
          <a className="projects" href="https://mo-store-819d7.web.app/" target={"_blank"}>
          <img src={Sidebar} alt="" />
          </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <a className="projects" href="https://walton-werehouse.web.app/" target={"_blank"}>
          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a className="projects" href="https://smmartwatch.netlify.app/" target={"_blank"}>
          <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a className="projects" href="https://chapai-matchmaking.web.app/" target={"_blank"}>
          <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import mo1 from "../../img/1.JPG";
import mo2 from "../../img/2.JPG";
import mo3 from "../../img/3.JPG";
import mo4 from "../../img/4.JPG";
import mo5 from "../../img/5.JPG";
import mo6 from "../../img/6.JPG";
import mo7 from "../../img/7.JPG";
import mo8 from "../../img/8.JPG";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
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
            <label className="projects" for="my-modal-1">
              <img src={Sidebar} alt="" />
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <label className="projects" for="my-modal-2">
              <img src={Ecommerce} alt="" />
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
          <label className="projects" for="my-modal-3">
          <img src={MusicApp} alt="" />
            </label>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <label className="projects" for="my-modal-4">
          <img src={HOC} alt="" />
            </label>
          </div>
        </SwiperSlide>
      </Swiper>

      <input type="checkbox" id="my-modal-1" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h1 className="text-3xl font-bold text-center">Tools Manufacturer Website</h1>
          <h3 class="text-lg font-bold">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
            >
              <SwiperSlide>
                <div>
                  <img src={Sidebar} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <img src={mo1} alt="" />

              </SwiperSlide>
              <SwiperSlide>

                <img src={mo2} alt="" />

              </SwiperSlide>
            </Swiper>
          </h3>
          <br />
          <ul>
            <h1 className="text-center text-2xl font-bold">Project Details :</h1>
            <p> 1. Developed a Website using React Js, Authentication For Firebase, TailwindCSS DaisyUI, React Hook Form and React Query. Stripe Payment and Upload File,Toastify</p>
            <p> 2. Tools Manufacture for Users and Administrators. For Admin, more features are available</p>
            <p> 3. MongoDB, NodeJs - for Security JWT Token</p>
            <div className="buttons mt-3">
              <a href="https://mo-store-819d7.web.app/" target={"_blank"}>
                <button class="btn btn-sm mt-2">Live Site</button>
              </a>
              <a href="https://github.com/NadimMahmudbd7/Manufacturer-Website-Client-Side" target={"_blank"}>
                <button class="btn btn-sm mt-2 ml-3">Client Site</button>
              </a>
              <a href="https://github.com/NadimMahmudbd7/Manufacturer-Website-Server-Side" target={"_blank"}>
                <button class="btn btn-sm mt-2 ml-3">Server Site</button>
              </a>
            </div>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="my-modal-2" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h1 className="text-3xl font-bold text-center">Warehouse Management Website</h1>
          <h3 class="text-lg font-bold">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
            >
              <SwiperSlide>
                <div>
                  <img src={Ecommerce} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <img src={mo3} alt="" />

              </SwiperSlide>
              <SwiperSlide>

                <img src={mo4} alt="" />

              </SwiperSlide>
            </Swiper>
          </h3>
          <br />
          <ul>
            <h1 className="text-center text-2xl font-bold">Project Details :</h1>
            <p> 1. This website for a Warehouse Management. Client can update quantity (deliver or restock).</p>
            <p> 2. Users need to login before getting service.</p>
            <p> 3. User can live chat with admin for any support.</p>
            <div className="buttons mt-3">
              <a href="https://walton-werehouse.web.app/" target={"_blank"}>
                <button class="btn btn-sm mt-2">Live Site</button>
              </a>
              <a href="https://github.com/NadimMahmudbd7/Ware_House_Management_Client" target={"_blank"}>
                <button class="btn btn-sm mt-2 ml-3">Client Site</button>
              </a>
              <a href="https://github.com/NadimMahmudbd7/WareHouse_Management_Server" target={"_blank"}>
                <button class="btn btn-sm mt-2 ml-3">Server Site</button>
              </a>
            </div>
          </ul>
        </div>
      </div>

      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h1 className="text-3xl font-bold text-center">Independent-Service-Provider</h1>
          <h3 class="text-lg font-bold">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
            >
              <SwiperSlide>
                <div>
                  <img src={HOC} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <img src={mo5} alt="" />

              </SwiperSlide>
              <SwiperSlide>

                <img src={mo6} alt="" />

              </SwiperSlide>
            </Swiper>
          </h3>
          <br />
          <ul>
            <h1 className="text-center text-2xl font-bold">Project Details :</h1>
            <p> 1. Anyone can find his soul mate on this website.</p>
            <p> 2. I was searching for a solid matchmaking agency when I came to knowabout Macbeth Matchmaking.</p>
            <p> 3. Using firebase hooks and react router.</p>
            <div className="buttons mt-3">
              <a href="https://chapai-matchmaking.web.app/" target={"_blank"}>
                <button class="btn btn-sm mt-2">Live Site</button>
              </a>
              <a href="https://github.com/NadimMahmudbd7/Independent-Service-Provider" target={"_blank"}>
                <button class="btn btn-sm mt-2 ml-3">Github Link</button>
              </a>
            </div>
          </ul>
        </div>
      </div>


      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h1 className="text-3xl font-bold text-center">Porject Analysis Website</h1>
          <h3 class="text-lg font-bold">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
            >
              <SwiperSlide>
                <div>
                  <img src={MusicApp} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <img src={mo7} alt="" />

              </SwiperSlide>
              <SwiperSlide>

                <img src={mo8} alt="" />

              </SwiperSlide>
            </Swiper>
          </h3>
          <br />
          <ul>
            <h1 className="text-center text-2xl font-bold">Project Details :</h1>
            <p> 1. Anyone can find his soul mate on this website.</p>
            <p> 2. I was searching for a solid matchmaking agency when I came to knowabout Macbeth Matchmaking.</p>
            <p> 3. Using firebase hooks and react router.</p>
            <div className="buttons mt-3">
              <a href="https://smmartwatch.netlify.app/" target={"_blank"}>
                <button class="btn btn-sm mt-2">Live Site</button>
              </a>
              <a href="https://github.com/NadimMahmudbd7/Second-assignment" target={"_blank"}>
                <button class="btn btn-sm mt-2 ml-3">Github Link</button>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

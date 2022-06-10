import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Excellent writing as usual! Nadim Mahmud's work will enhance and greatly improve anything you send his way. I hope to work with him again soon!",
    },
    {
      img: profilePic2,
      review:
        "It was a pleasure to work with Ethan! Very professional and approachable. Loved his work, funny and witty. I enjoyed working with Ethan and would love to hire him again for other jobs in the future!",
    },
    {
      img: profilePic3,
      review:
        "Excellent collaborator and writer, highly recommend for any project.",
    },
    {
      img: profilePic4,
      review:
        "Nadim Mahmud was a pleasure to work with. Professional, friendly, and offered great suggestions for our script. Quick turnarounds. Highly recommended.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

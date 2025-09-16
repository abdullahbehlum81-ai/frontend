"use client";
import "@/styles/css/testimonials.css";
import ContainerWrapper from "./containerWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ICON_FOLDER_PATH } from "@/constant/constant";
interface ReviewArray {
  message: string;
  username: string;
  year: string;
}
const Reviews = (): ReviewArray[] => [
  {
    message:
      "I've been a loyal customer of Efuzone since 2013 and have utilized 8 different hosting packages over the years. Their services have been consistently top-notch, and their support team is always responsive and helpful. Throughout the past decade, I've encountered very few issues, and any that did arise were swiftly addressed by their team. Efuzone not only provides great hosting and domain services but also instills confidence and reliability in its customers. Highly recommend! .. Cheers 👍👍👍👍👍...!!!!",
    username: "Hamid Ali Shah",
    year: "2 Years",
  },
  {
    message: "Bohat hi shandar services hain EFU Zone ki - Impressive Stuff",
    username: "Zahid Iqbal",
    year: "2 Years",
  },
  {
    message: "Very nice",
    username: "Umair Sam",
    year: "2 Years",
  },
  {
    message:
      "I have been a Efuzone customer for years! Whenever I have needed customer service, I have had the best experience and always learn something new. Efuzone is a one-stop shop for all my domain, email, website, tech service needs. 24/7 great support! Thank you Efuzone!",
    username: "Anas Abdullah",
    year: "2 Years",
  },
  {
    message: "Best services i have ever used high recomended",
    username: "Mark Antni",
    year: "2 Years",
  },
  {
    message: "Trusted for me 😍😍😍😍😍😍",
    username: "Robbin Munda",
    year: "2 Years",
  },
];

function TestimonialSlider() {
  const reviewSildes = useMemo(() => {
    return Reviews();
  }, []);

  return (
    <section id="testimonial-section">
      <ContainerWrapper>
        <div className="testimonial-section-header">
          <h2>Our Client Feedback</h2>
          <p>
            We’re honored and humbled by the great feedback we receive from
            ourcustomers on a daily basis.
          </p>
        </div>
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={30}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          speed={1000}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-slider"
        >
          {reviewSildes.map((testimonial, idx) => (
            <SwiperSlide
              className="testimonial-card"
              key={`testimonial-slide-${idx}`}
            >
              <div className="testimonial-qoute-img">
                <Image
                  src={`${ICON_FOLDER_PATH}/quote.svg`}
                  alt="testimonial"
                  width={41}
                  height={32}
                />
              </div>
              <div className="testimonial-content">
                <p> {testimonial.message}</p>
              </div>

              <div className="testimonial-user-info">
                <div className="testimonial-username">
                  {testimonial.username}
                </div>
                <div className="testimonial-year">{testimonial.year}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerWrapper>
    </section>
  );
}

export default TestimonialSlider;

"use client";
import "@/styles/css/partner-logos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { ICON_FOLDER_PATH } from "@/constant/constant";
const PartnerLogos = [
  { icon: "/partner_logos/whm.svg" },
  { icon: "/partner_logos/gws.svg" },
  { icon: "/partner_logos/whmcs.svg" },
  { icon: "/partner_logos/cloudlinux.svg" },
  { icon: "/partner_logos/comodo.svg" },
  { icon: "/partner_logos/cpanel.svg" },
  { icon: "/partner_logos/sectigo.svg" },
  { icon: "/partner_logos/webmail.svg" },
];
function PartnerLogosSection() {
  return (
    <section id="partner-logo-section">
      <div className="main-container">
        <div className="container-spc">
          <div className="partner-logo-header-section">
            <h2>Our Trusted Partners</h2>
            <div className="partner-logos-section-divider"></div>
          </div>
          <Swiper
            pagination={{ clickable: true }}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            speed={1000}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="partner-logo-slider"
          >
            {PartnerLogos.map((partnerLogo, idx) => (
              <SwiperSlide key={`partner-logo-${idx}`}>
                <Image
                  src={`${ICON_FOLDER_PATH}${partnerLogo.icon}`}
                  alt={partnerLogo.icon}
                  width={150}
                  height={150}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PartnerLogosSection;

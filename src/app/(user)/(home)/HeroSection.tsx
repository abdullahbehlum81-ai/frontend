"use client";
import { IMAGES_FOLDER_PATH } from "@/constant/constant";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useApiToken } from "@/hook/useApiToken";

const slideData = [
  {
    title: "Reliable Web Hosting in Pakistan",
    price: "$40/year",
    image: `/cloud-hosting_tfeh.svg`,
    features: [
      "Lifetime Free Domain",
      "5GB Pure SSD Storage",
      "Weekly JetBackup Service",
      "99.9% Uptime Guarantee",
      "Free Website Migration",
      "Unlimited Bandwidth",
      "cPanel Control Panel",
      "Daily Malware Scanning",
      "Free CDN Integration",
    ],
  },
  {
    title: "Free Domain & SSL Included",
    price: "$40/year",
    image: `/cloud-hosting_tfeh.svg`,
    features: [
      "Free SSL Certificate",
      "Unlimited Emails",
      "Cloudlinux OS",
      "DDoS Protection",
      "One-Click App Installer",
      "24/7 Server Monitoring",
      "SSH Access",
      "Automatic Updates",
      "Customizable PHP Versions",
    ],
  },
  {
    title: "Premium Support Hosting",
    price: "$40/year",
    image: `/cloud-hosting_tfeh.svg`,
    features: [
      "Immunify360",
      "Litespeed Web Server",
      "24/7 Support",
      "Priority Ticket Response",
      "Free Weekly Backups",
      "Managed WordPress Hosting",
      "Free SSL & CDN",
      "Advanced Firewall Protection",
      "Dedicated IP Address",
    ],
  },
];

function HeroSection() {

  if (!slideData || slideData.length === 0) return null;

  if (slideData.length === 1) {
    const slide = slideData[0];
    return (
      <section id="app-hero-section" className="hero-modern-section">
        <div className="main-container container-spc hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">
              Starting at just <strong>{slide.price}</strong>
            </p>
            <ul className="hero-feature-list">
              {slide.features.map((offer, idx) => (
                <li key={idx} className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>{offer}</span>
                </li>
              ))}
            </ul>
            <div className="hero-cta">
              <a href="#choose-hosting-plan-section" className="btn-primary">
                Get Started
              </a>
              <a href="#domain-search" className="btn-secondary">
                View Packages
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src={slide.image}
              width={800}
              height={400}
              alt="Hosting"
              priority
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="app-hero-section" className="hero-modern-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
        speed={1000}
      >
        {slideData.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="main-container container-spc hero-grid">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">
                  Starting at just <strong>{slide.price}</strong>
                </p>
                <ul className="hero-feature-list">
                  {slide.features.map((offer, idx) => (
                    <li key={idx} className="feature-item">
                      <FaCheckCircle className="feature-icon" />
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
                <div className="hero-cta">
                  <a href="#choose-hosting-plan-section" className="btn-primary">
                    Get Started
                  </a>
                  <a href="#domain-search" className="btn-secondary">
                    View Packages
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <Image
                  src={IMAGES_FOLDER_PATH + slide.image}
                  width={672.129}
                  height={669.164}
                  alt="Hosting"
                  priority={i === 0} 
                  loading={i === 0 ? "eager" : "lazy"} // ✅ others lazy load
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;

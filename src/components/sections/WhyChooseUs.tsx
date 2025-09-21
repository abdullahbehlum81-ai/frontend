import Image from "next/image";
import ContainerWrapper from "../coman/containerWrapper";
import { ICON_FOLDER_PATH } from "@/constant/constant";
import "@/styles/css/WhyChooseUs.css";
const features = [
  {
    icon: "/performance-icon.png",
    title: "Maximum Performance",
    description:
      "With CloudLinux, your site is isolated in a lightweight virtual environment, ensuring high performance even during traffic spikes.",
  },
  {
    icon: "/wordpress-icon.png",
    title: "WordPress Pre-Installed",
    description:
      "Get started instantly with one-click installs for WordPress and other tools — no technical setup required.",
  },
  {
    icon: "/ssl-icon.png",
    title: "Free SSL Certificate",
    description:
      "All shared hosting plans come with free SSL for your primary domain, subdomains, and addon domains.",
  },
  {
    icon: "/advance-icon.png",
    title: "Advanced Management",
    description:
      "Built-in security with brute force protection, dual firewalls, and 24/7 monitoring to keep your site safe.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <ContainerWrapper>
        <div className="why-choose-us-sec-header">
          <h2 className="heading">Why Choose Us?</h2>
          <div className="why-choose-us-section-divider"></div>
        </div>
        <div className="why-choose-sec-grid">
          {features.map((item, idx) => (
            <div className="why-choose-us-sec-card" key={idx}>
              <div className="why-choose-us-sec-icon">
                <Image
                  src={`${ICON_FOLDER_PATH}${item.icon}`}
                  alt={item.title}
                  width={56}
                  height={56}
                />
              </div>
              <h3 className="why-choose-us-sec-title">{item.title}</h3>
              <p className="why-choose-us-sec-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
}

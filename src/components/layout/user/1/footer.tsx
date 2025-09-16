"use client";
import Link from "next/link";
import AppLogo from "../../AppLogo";
import ContainerWrapper from "@/components/coman/containerWrapper";
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { ICON_FOLDER_PATH } from "@/constant/constant";
import { ExternalLink } from "@/components/coman/ExternalLink";
const Col1 = [
  {
    icon: <FaPhoneAlt />,
    label: "+92-322-2441299",
    href: "tel:+92-322-2441299",
  },
  {
    icon: <FaEnvelope />,
    label: "support@efuzone.com",
    href: "mailto:support@efuzone.com",
  },
];

const SocialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/efuzone.net",
    className: "facebook-link",
  },
  {
    icon: <FaTwitter />,
    href: "https://twitter.com/efuzone",
    className: "twitter-link",
  },
];

const Col2 = [
  { heading: "Company", label: "Company Profile", href: "/company-profile" },
  { heading: "Company", label: "About Us", href: "/about-us" },
  { heading: "Company", label: "Our Clients", href: "/our-clients" },
  { heading: "Company", label: "Why Choose Us?", href: "/why-choose-us" },
];

const Col3 = [
  { heading: "Hosting", label: "Web Hosting", href: "/web-hosting" },
  { heading: "Hosting", label: "VPS Hosting", href: "/vps-hosting" },
  { heading: "Hosting", label: "Dedicated Server", href: "/dedicated-server" },
];

const Col4 = [
  {
    heading: "Domain",
    label: "Register Domain",
    href: "https://portal.efuzone.com/domainchecker.php",
  },
  {
    heading: "Domain",
    label: "Transfer Domain",
    href: "https://portal.efuzone.com/cart.php?a=add&domain=transfer",
  },
  {
    heading: "Domain",
    label: "Manage Domain",
    href: "https://portal.efuzone.com/",
  },
];

const Col5 = [
  { heading: "Support", label: "FAQs", href: "/faqs" },
  { heading: "Support", label: "Contact Us", href: "/contact-us" },
  {
    heading: "Support",
    label: "Support Ticket",
    href: "https://portal.efuzone.com/submitticket.php?step=2&deptid=3",
  },
  {
    heading: "Support",
    label: "Client Area",
    href: "https://portal.efuzone.com",
  },
];

const PolicyLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Service Level Agreement",
    href: "/service-level-agreement",
  },
];
const Footer1 = () => {
  return (
    <footer id="app-main-footer">
      <ContainerWrapper>
        <div className="footer-layout-grid">
          <div className="footer-col">
            <AppLogo width={230} height={91} />
            <div className="footer-contact">
              {Col1.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="footer-contact-item"
                >
                  <span className="footer-contact-icon">{item.icon}</span>
                  {item.label ? <span>{item.label}</span> : ""}
                </Link>
              ))}
              <div className="footer-contact-item !gap-x-2">
                {SocialLinks.map((link, idx) => (
                  <ExternalLink
                    className={link.className}
                    key={`social-link-${idx}`}
                    href={link.href}
                  >
                    {link.icon}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </div>
          {[Col2, Col3, Col4, Col5].map((column, colIndex) => (
            <div className="footer-col" key={`footer-col-${colIndex}`}>
              <h4 className="footer-col-heading">{column[0].heading}</h4>
              <ul className="footer-links">
                {column.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Image
            src={`${ICON_FOLDER_PATH}/payment_methods.png`}
            alt="Payment Methods"
            width={300}
            height={149}
            className="debits-card-img"
          />
        </div>
      </ContainerWrapper>
      <div className="footer-bottom-section">
        <ContainerWrapper>
          <div className="footer-bottom-sec-wrap">
            <p>Copyright © 2006-2025 efuzone Web Hosting Solution.</p>
            <div className="footer-bottom-link-wrap">
              {PolicyLinks.map((link, idx) => (
                <Link
                  key={`footer-policy-link-${idx}-${link.label}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </footer>
  );
};

export default Footer1;

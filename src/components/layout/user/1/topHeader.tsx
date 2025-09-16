import { Fragment } from "react";
import { ICON_FOLDER_PATH } from "@/constant/constant";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/coman/ExternalLink";

const LeftSide = [
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

const RightSide = [
  {
    imgUrl: `${ICON_FOLDER_PATH}/payment-icon.png`,
    label: "Payment Methods",
    href: "payment-methods",
  },
  {
    imgUrl: `${ICON_FOLDER_PATH}/ca-icon.png`,
    label: " Client Area",
    href: "https://portal.efuzone.com/",
  },
  {
    imgUrl: `${ICON_FOLDER_PATH}/support-icon.png`,
    label: " Support",
    href: "https://portal.efuzone.com/submitticket.php?step=2&deptid=3",
  },
  {
    imgUrl: `${ICON_FOLDER_PATH}/contact-icon.png`,
    label: "Contact",
    href: "/contact-us",
  },
];

function TopHeader() {
  return (
    <div id="top-header">
      <div className="main-container">
        <div className="top-header-items-wrap">
          <div className="top-header-col-1">
            <div className="header-item-wrap">
              {LeftSide.map((link, idx) => (
                <Fragment key={`customer-support-link-${idx}`}>
                  <Link href={link.href} className="top-header-inner-link-wrap">
                    {link.icon} <span className="link-label">{link.label}</span>
                  </Link>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="top-header-col-2">
            <div className="header-item-wrap">
              {RightSide.map((link, idx) => (
                <Fragment key={`top-header-nav-link-${idx}`}>
                  <ExternalLink
                    href={link.href}
                    className="top-header-inner-link-wrap"
                  >
                    <Image
                      src={link.imgUrl}
                      alt="icon"
                      width={200}
                      height={200}
                      className="top-header-img-icon"
                    />
                    <span className="link-label">{link.label}</span>
                  </ExternalLink>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

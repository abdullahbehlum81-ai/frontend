import { ICON_FOLDER_PATH } from "@/constant/constant";
import "@/styles/css/guarantee-badges.css";
import Image from "next/image";
const Badges = [
  {
    icon: `/guarantees-icon.svg`,
    label: "Money Back Guarantee",
  },
  {
    icon: `/live-support-icon.svg`,
    label: "24/7/365 Live Support",
  },
  {
    icon: `/ssd-server-icon.svg`,
    label: "Fastest SSD Servers",
  },
  {
    icon: `/uptime-icon.svg`,
    label: "99.9% Uptime Guarantee",
  },
];
function GuaranteeBadges() {
  return (
    <section id="guaranteeBadge-section">
      <div className="main-container">
        <div className="container-spc">
          <div className="guarantee-section-header">
            <h2 className="guarantee-section-heading">Our Guarantees</h2>
            <div className="guarantee-section-divider"></div>
          </div>
          <div className="guarantee-badges-wrap">
            {Badges.map((badge, idx) => (
              <div
                className={`guarantee-badge-col`}
                key={`guarantee-badge-col-${idx}-${badge.label}`}
              >
                <Image
                  src={`${ICON_FOLDER_PATH}${badge.icon}`}
                  alt={badge.label}
                  width={100}
                  height={100}
                />
                <span className="guarantee-badge-label"> {badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuaranteeBadges;

import { ICON_FOLDER_PATH } from "@/constant/constant";
import Image from "next/image";
import { ExternalLink } from "../coman/ExternalLink";
import { FaArrowRight } from "react-icons/fa";
interface PackageInterface {
  label: string;
  icon: string;
}
const Packages: PackageInterface[] = [
  {
    icon: "/com.svg",
    label: "PKR 5,500",
  },
  {
    icon: "/net.svg",
    label: "PKR 5,500",
  },
  {
    icon: "/org.svg",
    label: "PKR 5,500",
  },
  {
    icon: "/info.svg",
    label: "PKR 5,500",
  },
];
export default function DomainPackage() {
  return (
    <section id="domain-package-section">
      <div className="domain-package-layout">
        {Packages.map((pkg, idx) => (
          <div key={`domain-package-${idx}`} className="domain-package-card">
            <div className="domain-package-image">
              <Image
                src={`${ICON_FOLDER_PATH}${pkg.icon}`}
                alt={pkg.icon}
                width={111}
                height={32}
              />
            </div>
            <h2 className="domain-package-price">{pkg.label}</h2>
            <ExternalLink
              href="https://portal.efuzone.com/cart.php?a=add&domain=register"
              className="domain-package-btn"
            >
              {" "}
              <div className="domain-package-btn-label">
                Get Domain <FaArrowRight />{" "}
              </div>
            </ExternalLink>
          </div>
        ))}
      </div>
    </section>
  );
}

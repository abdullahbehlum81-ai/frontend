"use client";
import { FaChevronDown } from "react-icons/fa";
import { ExternalLink } from "../coman/ExternalLink";
import { NavArrayProps, NavLinkProps } from "./types";
import { usePageActive } from "@/hook/usePageActive";

const NavLinks: NavArrayProps[] = [
  { path: "/", label: "Home" },
  { path: "/web-hosting", label: "Web Hosting" },
  {
    path: "https://portal.efuzone.com/cart.php?a=add&domain=register",
    label: "Domain Name",
  },
  { path: "/vps-hosting", label: "VPS Hosting" },
  { path: "/dedicated-server", label: "Dedicated Server" },
  { path: "/our-clients", label: "Our Clients" },
  {
    path: "/company-profile",
    label: "Company Profile",
    icon: <FaChevronDown />,
  },
];

function NavigationSection({
  sectionKey,
  ulClassName,
  anchorClassName,
  listclassName,
}: NavLinkProps) {
  const { activePage } = usePageActive({ NavLinks });

  return (
    <nav id={`${sectionKey}-header-navigation-section`}>
      <ul className={ulClassName}>
        {NavLinks.map((link, idx) => (
          <li className={listclassName} key={`header-nav-item-${idx}`}>
            <ExternalLink
              className={`${
                activePage === link.path
                  ? "header-nav-active-item"
                  : anchorClassName || ""
              }`}
              href={link.path}
            >
              <span className={link?.icon ? "flex items-center !gap-x-1" : ""}>
                {link.label} {link.icon}
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationSection;

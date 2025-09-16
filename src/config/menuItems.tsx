import { PANNEL_URL_PATH } from "@/constant/constant";
import { MdDashboard } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { MdDns } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { MdFormatQuote } from "react-icons/md";
import { MdOutlineTextSnippet } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  section?: string;
}

export const rawMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    path: `/dashboard`,
    icon: <MdDashboard />,
  },
  {
    name: "Web Hosting",
    path: "/web-hosting",
    icon: <MdWeb />,
    section: "Hosting",
  },
  {
    name: "VPS Hosting",
    path: "/vps-hosting",
    icon: <MdDns />,
    section: "Hosting",
  },
  {
    name: "Dedicated Server",
    path: "/dedicated-server",
    icon: <MdStorage />,
    section: "Hosting",
  },
  {
    name: "Company Profile",
    path: "/company-profile",
    icon: <MdBusiness />,
    section: "Company",
  },
  {
    name: "About Us",
    path: "/about-us",
    icon: <MdPeople />,
    section: "Company",
  },
  {
    name: "Our Clients",
    path: "/our-clients",
    icon: <MdStars />,
    section: "Company",
  },
  {
    name: "Why Choose Us?",
    path: "/why-choose-us",
    icon: <MdSecurity />,
    section: "Company",
  },

  {
    name: "Hero Section",
    path: "/hero",
    icon: <MdImage />,
  },
  {
    name: "Hosting Packages",
    path: "/packages",
    icon: <MdStorage />,
  },
  {
    name: "Guarantee Badges",
    path: "/badges",
    icon: <MdStars />,
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: <MdFormatQuote />,
  },
  {
    name: "Client Logos",
    path: "/client-logos",
    icon: <MdImage />,
  },
  {
    name: "Footer Content",
    path: "/footer",
    icon: <MdOutlineTextSnippet />,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <MdLogout />,
  },
];

export const menuItems: MenuItem[] = rawMenuItems.map((item) => ({
  ...item,
  path: `${PANNEL_URL_PATH}${item.path}`,
}));

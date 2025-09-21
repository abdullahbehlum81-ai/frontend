import { PANNEL_URL_PATH } from "@/constant/constant";
import { FaSitemap } from "react-icons/fa";
import {
  MdDashboard,
  MdImage,
  MdOutlineVerticalAlignBottom,
} from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";

export interface MenuItem {
  name?: string;
  path?: string;
  icon?: React.ReactNode;
  section?: string;
}

const DefaultParams = "?search&page=1&perPage=10";
export const rawMenuItems: MenuItem[] = [
  {
    name: "Dashboard",
    path: `/dashboard`,
    icon: <MdDashboard />,
  },
  {
    section: "Brand Assets",
    name: "Client Logos",
    path: `/client-logos${DefaultParams}`,
    icon: <MdImage />,
  },
  {
    section: "Brand Assets",
    name: "Partner Logos",
    path: `/partner-logo${DefaultParams}`,
    icon: <MdImage />,
  },

  {
    section: "CMS",
    name: "Pages",
    icon: <RiPagesLine />,
    path: `/cms/pages${DefaultParams}`,
  },
  {
    section: "CMS",
    name: "Navigation",
    icon: <FaSitemap />,
    path: `/cms/navigation${DefaultParams}`,
  },
  {
    section: "CMS",
    name: "Footer Navigation",
    icon: <MdOutlineVerticalAlignBottom />,
    path: `/menu/footer-navigation${DefaultParams}`,
  },
];

export const menuItems: MenuItem[] = rawMenuItems.map((item) => ({
  ...item,
  path: `${PANNEL_URL_PATH}${item.path}`,
}));

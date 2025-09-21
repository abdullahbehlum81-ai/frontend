"use client";
import "@/styles/sass/main.scss";
import AppLogo from "../AppLogo";
import { menuItems, MenuItem } from "@/config/menuItems";
import { usePageActive } from "@/hook/usePageActive";
import MenuGroup from "./MenuGroup";
import { MdLogout } from "react-icons/md";
import { showErrorMessage } from "@/utils/Error";
import { RootLogout } from "@/service/AppService";
import { ADMIN_AUTH_TOKEN, appConfig } from "@/constant";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type SidebarProps = {
  Open: boolean;
};

function Sidebar({ Open }: SidebarProps) {
  const navigate = useRouter();
  const { Root_PAGE_URLS } = appConfig;
  const { LOGIN } = Root_PAGE_URLS;
  const groupedMenu = menuItems.reduce((acc, item) => {
    const section = item.section || "General";
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const arrayGroupMenu = Object.entries(groupedMenu);

  const { activePage } = usePageActive({ NavLinks: menuItems });

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem(ADMIN_AUTH_TOKEN) ?? "";
      const { response } = await RootLogout(token);
      if (!response?.success) {
        return toast.error("Logout Not Working");
      }
      localStorage.clear();
      toast.success(response?.message);
      navigate.push(LOGIN);
    } catch (error) {
      return showErrorMessage(error);
    }
  };

  return (
    <div className={`app-sidebar ${Open ? "app-sidebar-open" : ""}`}>
      <div className="sidebar-item-container">
        <div className="sidebar-header-wrap">
          <div className="sidebar-logo">
            <AppLogo width={231} height={90} />
          </div>
        </div>

        {arrayGroupMenu.map(([section, items]) => (
          <MenuGroup
            key={`group-${section}`}
            items={items}
            section={section}
            activePage={activePage}
          />
        ))}

        <div className="sidebar-section logout-section">
          <ul className="sidebar-menu-list">
            <li>
              <button type="button" onClick={handleLogout}>
                <span className="icon">
                  <MdLogout />
                </span>
                <span className="label">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

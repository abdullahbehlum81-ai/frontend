"use client";
import "@/styles/sass/main.scss";
import AppLogo from "../AppLogo";
import { menuItems } from "@/config/menuItems";
import Link from "next/link";
import { usePageActive } from "@/hook/usePageActive";
import MenuGroup from "./MenuGroup";
type SidebarProps = {
  Open: boolean;
};

function Sidebar({ Open }: SidebarProps) {
  const logoutItem = menuItems.find(
    (item) => item.name.toLowerCase() === "logout"
  );
  const filteredItems = menuItems.filter(
    (item) => item.name.toLowerCase() !== "logout"
  );

  const groupedMenu = filteredItems.reduce((acc, item) => {
    const section = item.section || "General";
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {} as Record<string, typeof filteredItems>);

  const arrayGroupMenu = Object.entries(groupedMenu);

  const { activePage } = usePageActive({ NavLinks: filteredItems });

  return (
    <div className={`app-sidebar  ${Open ? "app-sidebar-open" : ""}`}>
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
        {logoutItem && (
          <div className="sidebar-section logout-section">
            <ul className="sidebar-menu-list">
              <li key={logoutItem.path}>
                <Link href={logoutItem.path}>
                  <span className="icon">{logoutItem.icon}</span>
                  <span className="label">{logoutItem.name}</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

import Link from "next/link";
import { ReactNode } from "react";

interface itemArray {
  path: string;
  icon: ReactNode;
  name: string;
}
interface MenuProps {
  section: string;
  items: itemArray[];
  activePage: string | any;
}
function MenuGroup({ section, items, activePage }: MenuProps) {
  return (
    <div className="sidebar-section">
      {section !== "General" && (
        <div className="sidebar-section-title">{section}</div>
      )}
      <ul className="sidebar-menu-list">
        {items.map((item, idx) => (
          <li key={`layout2-group-menu-${item.path}-${idx}`}>
            <Link
              className={
                 activePage === item.path ? "sidebar-active-page-menu" : ""
              }
              href={item.path}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuGroup;

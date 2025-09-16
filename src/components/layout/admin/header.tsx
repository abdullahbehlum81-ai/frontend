"use client";
import { IMAGES_FOLDER_PATH } from "@/constant/constant";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
type HeaderProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ setOpen }: HeaderProps) {
  const { headerTitle } = useHeaderTitle();
  return (
    <header id="app-header">
      <div className="dashboard-header">
        <div className="header-left">
          <button
            onClick={() => setOpen((prev) => !prev)}
            type="button"
            id="appSidebarToggle"
          >
            <MdMenu />
          </button>
          <h3 className="header-title">{headerTitle}</h3>
        </div>
        <div className="header-right">
          <div className="header-profile">
            <Image
              src={`${IMAGES_FOLDER_PATH}/profile.jpg`}
              alt="Efuzone"
              width={200}
              height={200}
            />
            <ul>
              <li className="username">Backend@efzuone.com</li>
              <li className="role">Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

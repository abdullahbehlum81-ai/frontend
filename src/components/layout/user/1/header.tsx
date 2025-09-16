import TopHeader from "./topHeader";
import Sidebar from "./Sidebar";
import AppLogo from "../../AppLogo";
import NavigationSection from "../../Navigation";
function Header1() {
  return (
    <header id="app-main-header">
      <TopHeader />
      <div className="middle-header">
        <div className="main-container">
          <div className="container-spc">
            <div className="middle-header-items-wrap">
              <div className="middle-header-col-1">
                <AppLogo imgClassName="app-logo" width={230} height={91} />
              </div>
              <div className="middle-header-col-2">
                <NavigationSection
                  sectionKey="desktop"
                  ulClassName="desktop-nav-list"
                  listclassName="desktop-nav-list-item"
                />
              </div>
              <div className="middle-header-col-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header1;

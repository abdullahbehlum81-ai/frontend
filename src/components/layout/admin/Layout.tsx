"use client";
import "@/styles/css/myPage.css";
import { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { HeaderTitleProvider } from "@/context/HeaderTitleContext";
import dynamic from "next/dynamic";
const Sidebar = dynamic(() => import("./sidebar"), { ssr: false });
function LayoutContainerAdmin({ children }: Readonly<{ children: ReactNode }>) {
  const [Open, setOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 999) {
        setOpen(false); // On mobile: close sidebar
      } else {
        setOpen(true); // On desktop: keep sidebar open
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <HeaderTitleProvider>
      <Sidebar Open={Open} />
      <div className="main-content-wrapper">
        <Header setOpen={setOpen} />
        <main id="app-panel-content">{children}</main>
        <Footer />
      </div>
    </HeaderTitleProvider>
  );
}

export default LayoutContainerAdmin;

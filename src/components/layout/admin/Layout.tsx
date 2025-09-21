"use client";
import "@/styles/css/myPage.css";
import { ReactNode, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { HeaderTitleProvider } from "@/context/HeaderTitleContext";
import dynamic from "next/dynamic";
import NextTopLoader from "nextjs-toploader";
import { ToastProvider } from "@/app/providers";
const Sidebar = dynamic(() => import("./sidebar"));
function LayoutContainerAdmin({ children }: Readonly<{ children: ReactNode }>) {
  const [Open, setOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 999) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <HeaderTitleProvider>
      <ToastProvider />
      <NextTopLoader
        showAtBottom={false}
        showSpinner={false}
        color="#055492"
        height={4}
      />
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

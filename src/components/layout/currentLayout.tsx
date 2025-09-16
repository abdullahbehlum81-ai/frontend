"use client";
import Header1 from "./user/1/header";
import Footer1 from "./user/1/footer";
import "@/styles/css/header1.css";
import "@/styles/css/footer1.css";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
function CurrentLayout({ children }: Readonly<{ children: ReactNode }>) {

  return (
    <>
      <NextTopLoader
        showAtBottom={false}
        showSpinner={false}
        color="#7cc5fd"
        height={4}
        
      />
      <Header1 />
      <main id="app-main-content"> {children}</main>
      <Footer1 />
    </>
  );
}

export default CurrentLayout;

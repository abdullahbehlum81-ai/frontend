import { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/sass/auth.scss";
import "@/styles/sass/main.scss";
import LoginHeaderPage from "@/components/layout/auth/header";
import LoginFooterPage from "@/components/layout/auth/footer";
export const metadata: Metadata = {
  title: "Admin Panel – efuzone",
  description: "Admin dashboard and management panel for efuzone web hosting.",
  keywords: "admin, dashboard, efuzone, web hosting management",
};

function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoginHeaderPage />
      <main>{children}</main>
      <LoginFooterPage />
    </>
  );
}

export default AdminLayout;

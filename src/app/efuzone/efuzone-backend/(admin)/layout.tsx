import LayoutContainerAdmin from "@/components/layout/admin/Layout";
import { Metadata } from "next";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Admin Panel – efuzone",
  description: "Admin dashboard and management panel for efuzone web hosting.",
  keywords: "admin, dashboard, efuzone, web hosting management",
};

function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="app-layout-2-wrap">
      <LayoutContainerAdmin>{children}</LayoutContainerAdmin>
    </div>
  );
}

export default AdminLayout;

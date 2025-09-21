import React from "react";
import PageContainer from "./PageContainer";
import { getPagePaginatedList } from "@/service/PageService";
import { Metadata } from "next";
import { getServerCookies } from "@/lib/getServerCookies";
import PageTable from "./components/PageTable";

export const metadata: Metadata = {
  title: "CMS Pages Management",
};
async function CMSPagesManager() {
  const cookieHeader = await getServerCookies();
  const { getAllList } = await getPagePaginatedList(
    { options: { page: 1, perPage: 10, search: "" } },
    { cookieHeader }
  );

  return (
    <section id="cms-pages-manager-section">
      <div className="card">
        <PageContainer>
          <PageTable getAllList={getAllList} />
        </PageContainer>
      </div>
    </section>
  );
}

export default CMSPagesManager;

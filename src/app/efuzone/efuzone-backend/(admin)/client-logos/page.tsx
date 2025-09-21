import { Metadata } from "next";
import { getClientLogoList } from "@/service/ClientLogoService";
import { findServerCookies, getServerCookies } from "@/lib/getServerCookies";
import ClientLogoTable from "./components/ClientLogoTable";
import { redirect } from "next/navigation";
import { appConfig } from "@/constant";
import ClientLogoContainer from "./ClientLogoContainer";
import { SearchParams } from "@/types";
import { parseSearchParams } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Client Logos Management",
};

async function ClientLogos() {
  const { adminToken, appToken } = await findServerCookies();
  const cookieHeader = await getServerCookies();
  const { Root_PAGE_URLS } = appConfig;
  const { LOGIN } = Root_PAGE_URLS;
  const { getAllList } = await getClientLogoList(
    { options: { page: 1, perPage: 10, search: "" } },
    { cookieHeader }
  );

  if (!adminToken || !appToken) {
    redirect(LOGIN);
  }

  return (
    <section id="pannel-client-logos-section">
      <ClientLogoContainer>
        <ClientLogoTable
          getAllList={getAllList}
        />
      </ClientLogoContainer>
    </section>
  );
}

export default ClientLogos;

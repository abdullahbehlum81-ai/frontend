import { Metadata } from "next";
import { getPartnerLogoList } from "@/service/PartnerLogoService";
import { findServerCookies, getServerCookies } from "@/lib/getServerCookies";
import PartnerLogoTable from "./components/PartnerLogoTable";
import { redirect } from "next/navigation";
import { appConfig } from "@/constant";
import PartnerLogoContainer from "./PartnerLogoContainer";
import { SearchParams } from "@/types";
export const metadata: Metadata = {
  title: "Partners Logo Management",
};
async function PartnerLogos() {
  const { Root_PAGE_URLS } = appConfig;
  const { LOGIN } = Root_PAGE_URLS;
  const { adminToken, appToken } = await findServerCookies();
  const cookieHeader = await getServerCookies();

  const { getAllList } = await getPartnerLogoList(
    { options: { page: 1, perPage: 10, search: "" } },
    { cookieHeader }
  );

  if (!adminToken || !appToken) {
    redirect(LOGIN);
  }

  return (
    <section id="pannel-partner-logos-section">
      <PartnerLogoContainer>
        <PartnerLogoTable getAllList={getAllList} />
      </PartnerLogoContainer>
    </section>
  );
}

export default PartnerLogos;

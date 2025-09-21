import { findServerCookies } from "@/lib/getServerCookies";
import DashboardContainer from "./DashboardContainer";
import { appConfig } from "@/constant";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const { Root_PAGE_URLS } = appConfig;
  const { LOGIN } = Root_PAGE_URLS;
  const { adminToken, appToken } = await findServerCookies();

  if (!adminToken || !appToken) {
    redirect(`${LOGIN}?session_expire=true`);
  }
  return <DashboardContainer />;
}

export default DashboardPage;

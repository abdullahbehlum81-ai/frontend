"use client";
import { ADMIN_AUTH_TOKEN } from "@/constant";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

function DashboardContainer() {
  const searchParams = useSearchParams();
  const sessionExpire = searchParams.get("session_expire");
  const { setHeaderTitle } = useHeaderTitle();
  useEffect(() => {
    if (sessionExpire == "true") {
      localStorage.removeItem(ADMIN_AUTH_TOKEN);
    }
    setHeaderTitle("Efuzone Dashboard");
  }, [setHeaderTitle]);
  return <div>Dashboard Container</div>;
}

export default DashboardContainer;

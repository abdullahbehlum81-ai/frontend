"use client";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import React, { useEffect } from "react";

function DashboardContainer() {
  const { setHeaderTitle } = useHeaderTitle();
  useEffect(() => {
    setHeaderTitle("Efuzone Dashboard");
  }, [setHeaderTitle]);
  return <div>Dashboard Container</div>;
}

export default DashboardContainer;

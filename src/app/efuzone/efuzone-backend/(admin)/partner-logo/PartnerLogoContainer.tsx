"use client";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

export default function PartnerLogoContainer({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { setHeaderTitle } = useHeaderTitle();
  useEffect(()=> {
    setHeaderTitle("Partners Logo Management")
  },[setHeaderTitle])
  return (
    <div className="card">
      <div className="card_header">
        <div className="page-header-content-wrap">
          <h2 className="myPage-title">Partner Logos </h2>
          <Link
            className="bs-btn bs-btn-primary page-item-wrap "
            href={`partner-logo/upload-logos`}
          >
            <FaPlus /> Upload Partner Logos
          </Link>
        </div>
      </div>
      <div className="card_content">{children}</div>
    </div>
  );
}

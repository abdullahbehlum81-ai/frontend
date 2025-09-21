"use client";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

export default function PageContainer({
  children,
}: Readonly<{ children: ReactNode }>) {
  const { setHeaderTitle } = useHeaderTitle();
  useEffect(() => {
    setHeaderTitle("Manage CMS Pages");
  }, [setHeaderTitle]);
  return (
    <>
      <div className="card_header">
        <div className="page-header-content-wrap">
          <div className="myPage-header-col-1">
            <h2 className="myPage-title">CMS Pages Management</h2>
            <p>Manage all your website pages from this panel.</p>
          </div>
          <Link
            href={"pages/create"}
            className="bs-btn bs-btn-primary page-item-wrap "
          >
            <FaPlus /> Create New Page
          </Link>
        </div>
      </div>{" "}
      <div className="card_content myPage-mt">{children}</div>
    </>
  );
}

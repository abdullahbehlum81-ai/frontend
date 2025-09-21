"use client";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

function ClientLogoContainer({ children }: Readonly<{ children: ReactNode }>) {
  const { setHeaderTitle } = useHeaderTitle();
  useEffect(() => {
    setHeaderTitle("Client Logos Management");
  }, [setHeaderTitle]);
  return (
    <div className="card">
      <div className="card_header">
        <div className="page-header-content-wrap">
          <h2 className="myPage-title">Client Logos </h2>
          <Link
            className="bs-btn bs-btn-primary page-item-wrap "
            href={`client-logos/upload-logos`}
          >
            <FaPlus /> Upload Client Logos
          </Link>
        </div>
      </div>
      <div className="card_content">{children}</div>
    </div>
  );
}

export default ClientLogoContainer;

import { Metadata } from "next";
import { MdUpload } from "react-icons/md";
import PartnerLogoForm from "../components/PartnerLogoForm";

export const metadata: Metadata = {
  title: "Upload Logo | Partners Logos",
};
function UploadLogos() {
  return (
    <section id="pannel-partners-logo-upload-section">
      <div className="card">
        <div className="myPage-card">
          <div className="card_header page-header-wrap ">
            <h2 className="page-item-wrap myPage-title">
              <MdUpload /> Upload Partner Logo
            </h2>
          </div>
          <div className="card_body">
            <PartnerLogoForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadLogos;

import { Metadata } from "next";
import { MdUpload } from "react-icons/md";
import RenderForm from "../components/ClientLogoForm";
export const metadata: Metadata = {
  title: "Upload Logo | Client Logos",
};
function UploadLogos() {
  return (
    <section id="pannel-client-logo-upload-section">
      <div className="card">
        <div className="myPage-card">
          <div className="card_header page-header-wrap ">
            <h2 className="page-item-wrap myPage-title">
              <MdUpload /> Upload Client Logo
            </h2>
          </div>
          <div className="card_body">
            <RenderForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadLogos;

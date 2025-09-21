import { MdEdit } from "react-icons/md";
import ClientLogoForm from "../../components/ClientLogoForm";

interface EditClientLogoPageProps {
  params: {
    id: number;
  };
}

async function EditClientLogoPage({ params }: EditClientLogoPageProps) {
  const { id } = params;
  return (
    <section id="pannel-client-logo-edit-section">
      <div className="card">
        <div className="myPage-card">
          <div className="card_header page-header-wrap ">
            <h2 className="page-item-wrap myPage-title">
              <MdEdit /> Edit Client Logo
            </h2>
          </div>
          <div className="card_body"></div> <ClientLogoForm id={id} />
        </div>
      </div>
    </section>
  );
}

export default EditClientLogoPage;

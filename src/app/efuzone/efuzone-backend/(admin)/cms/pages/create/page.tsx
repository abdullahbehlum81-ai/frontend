import { MdAddCircleOutline } from "react-icons/md";
import PageForm from "../components/PageForm";

export default function CreatePage() {
  return (
    <section id="create-new-page-section">
      <div className="card myPage-card ">
        <div className="card_header page-header-content-wrap page-header-wrap ">
          <h2 className=" myPage-title page-item-wrap ">
            {" "}
            <MdAddCircleOutline />
            Create New Page
          </h2>
        </div>
        <div className="card_content">
          <PageForm />
        </div>
      </div>
    </section>
  );
}

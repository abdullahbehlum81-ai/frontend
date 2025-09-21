import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import PageForm from "../../components/PageForm";
interface EditPageParams {
  params: {
    id: number;
  };
}
async function EditPageForm({ params }: EditPageParams) {
  const { id } = params;
  return (
    <section id="create-new-page-section">
      <div className="card myPage-card ">
        <div className="card_header page-header-content-wrap page-header-wrap ">
          <h2 className=" myPage-title page-item-wrap ">
            {" "}
            <MdAddCircleOutline />
            Edit Page
          </h2>
        </div>
        <div className="card_content">
          <PageForm id={id} />
        </div>
      </div>
    </section>
  );
}

export default EditPageForm;

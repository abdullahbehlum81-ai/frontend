"use client";
import { PageFormField } from "@/config/FormFields/Page";
import {
  createPageFormValidation,
  updatePageFormValidation,
} from "@/config/FormValidation/Page";
import { useHeaderTitle } from "@/context/HeaderTitleContext";
import { DynamicFormRenderer } from "@/helpers/form";
import { PageFormInterface } from "@/types/Page";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { RiPagesLine } from "react-icons/ri";
import { createPage, updatePage, getSinglePage } from "@/service/PageService";
import { BASEURL, MESSAGES } from "@/constant";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { objectToFormData } from "@/utils/formDataUtils";
interface PageFormProps {
  id?: number;
}
const DEFAULT_VALUES: PageFormInterface = {
  banner: null,
  slug: "",
  pageTitle: "",
  pageDescription: "",
  metaDescription: "",
  metaKeyword: "",
  metaTitle: "",
  status: "",
  publishDate: "",
};
export default function PageForm({ id }: PageFormProps) {
  const { setHeaderTitle } = useHeaderTitle();
  const { SUCCESS_CREATE, SUCCESS_UPDATE } = MESSAGES;
  const navigate = useRouter();
  const validation = id ? updatePageFormValidation : createPageFormValidation;
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PageFormInterface | Partial<PageFormInterface>>({
    resolver: yupResolver(validation),
    defaultValues: DEFAULT_VALUES,
  });
  const FormFields = useMemo(() => {
    return PageFormField();
  }, []);
  const handlePageForm = async (
    data: PageFormInterface | Partial<PageFormInterface>
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const formData = await objectToFormData(data, ["banner"]);
    if (id) {
      formData.append("_method", "PUT"); 
    }

    const { response } = id
      ? await updatePage({ id, payload: formData })
      : await createPage(formData);
    if (response?.success) {
      toast.success(`Page ${id ? SUCCESS_UPDATE : SUCCESS_CREATE}`);
      if (!id) {
        reset(DEFAULT_VALUES);
      }
    }
  };
  useEffect(() => {
    if (!id) return;
    getSinglePage(id).then(({ singleItem }) => {
      if (singleItem) {
        reset({
          banner: singleItem.banner ? singleItem.banner : null,
          slug: singleItem.slug ?? "",
          pageTitle: singleItem.pageTitle ?? "",
          pageDescription: singleItem.pageDescription ?? "",
          metaDescription: singleItem.metaDescription ?? "",
          metaKeyword: singleItem.metaKeyword ?? "",
          metaTitle: singleItem.metaTitle ?? "",
          status: singleItem.status ?? "",
          publishDate: singleItem.publishDate ?? "",
        });
      }
    });

    setHeaderTitle(id ? "Edit Existing Page" : "Create New Web Page");
  }, [id, reset, setHeaderTitle]);

  return (
    <form onSubmit={handleSubmit(handlePageForm)} id="submitCreatePageForm">
      <DynamicFormRenderer
        control={control}
        fields={FormFields}
        instanceId="create-page-form-instance-id"
        errors={errors}
        placeholderImage="1142x295"
        width={1142}
        height={295}
        previewClassName="page-form-banner-preview"
      />
      <div className="myPage-align-item-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bs-btn bs-btn-primary page-item-wrap create-page-form-btn "
        >
          <RiPagesLine />
          {isSubmitting
            ? id
              ? "Updating..."
              : "Submitting..."
            : id
            ? "Update Page"
            : "Create Page"}
        </button>
      </div>
    </form>
  );
}

import { PageFormInterface } from "@/types/Page";
import { object, string, mixed, number, ObjectSchema } from "yup";

const SUPPORTED_FORMATS = ["image/png", "image/jpeg", "image/jpg", "image/avif"];

const commonFields = {
  pageTitle: string().required("Page Title is required"),
  pageDescription: string().required("Page Description is required"),
  slug: string().required("Page Url is required"),
  metaTitle: string().required("Meta Title is required"),
  metaDescription: string().required("Meta Description is required"),
  metaKeyword: string().required("Meta Keyword is required"),
  status: number().default(0).required("Status is required"),
  publishDate: string().required("Publish Date is required"),
};

const createPageFormValidation: ObjectSchema<PageFormInterface> = object({
  ...commonFields,
  banner: mixed<File>()
    .required("Banner is required")
    .test("fileFormat", "Only PNG, JPG, JPEG, and WEBP formats are allowed", (file) => {
      if (!file) return false;
      return SUPPORTED_FORMATS.includes(file.type);
    }),
});


const updatePageFormValidation: ObjectSchema<Partial<PageFormInterface>> = object({
  pageTitle: string().optional(),
  pageDescription: string().optional(),
  slug: string().optional(),
  metaTitle: string().optional(),
  metaDescription: string().optional(),
  metaKeyword: string().optional(),
  status: number().optional(),
  banner: mixed<File>()
    .nullable()
    .notRequired(),
  publishDate: string().optional()
});

export {
  createPageFormValidation,
  updatePageFormValidation,
};

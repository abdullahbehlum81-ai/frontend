import { FormField } from "./form";

interface PageFormInterface {
    pageTitle: string;
    pageDescription: string;
    slug: string;
    banner: File | string | null;
    metaTitle: string;
    metaDescription: string;
    metaKeyword: string;
    status: number | string
    publishDate: string;

}
type PageFormValues = Omit<FormField<PageFormInterface>, "fieldname"> & {
    fieldname: keyof PageFormInterface
}

export type { PageFormInterface, PageFormValues }
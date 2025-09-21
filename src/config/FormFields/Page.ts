import { PageFormValues } from "@/types/Page";

const PageFormField = (): PageFormValues[] => [
    {
        label: "Title",
        htmlfor: "page-title",
        fieldname: "pageTitle",
        placeholder: "Enter Page Title",
        type: "text",
    },
    {
        label: "Description",
        htmlfor: "page-description",
        fieldname: "pageDescription",
        placeholder: "Enter Page Description",
        type: "text",
    },
    {
        label: "Url",
        htmlfor: "page-url",
        fieldname: "slug",
        placeholder: "Enter Page Url",
        type: "text",
    },
    {
        label: "Banner",
        htmlfor: "page-banner-img",
        fieldname: "banner",
        placeholder: "",
        type: "file",
        name: "banner"
    },
    {
        label: "Meta Title",
        htmlfor: "page-title",
        fieldname: "metaTitle",
        placeholder: "Enter Meta Title",
        type: "text",
    }, {
        label: "Meta Description",
        htmlfor: "page-description",
        fieldname: "metaDescription",
        placeholder: "Enter Meta Description",
        textarea: true
    },
    {
        label: "Meta Keyword",
        htmlfor: "page-keyword",
        fieldname: "metaKeyword",
        placeholder: "Enter Meta Keyword",
        type: "text",
    },
    {
        fieldname: "status",
        select: true,
        label: "Status",
        htmlfor: "status",
        options: [
            { name: "Active", id: 1 },
            { name: "Inactive", id: 0 },
        ],
    },
    {
        fieldname: "publishDate",
        type: "date",
        label: "Publish Date",
        htmlfor: "publishDate",
    },
];
export { PageFormField };

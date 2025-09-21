import { MenuFormValues } from "@/types/global";

const MenuFormField = (view: true | "page" | "custom-url" | false): MenuFormValues[] => {
    const baseFields: MenuFormValues[] = [
        {
            label: "Navigation Label",
            placeholder: "Enter Navigation Label",
            type: "text",
            htmlfor: "navigation-label",
            fieldname: "name",
        },
        {
            label: "Open In",
            htmlfor: "open-in",
            select: true,
            options: [
                { id: "_self", name: "Open in Same Tab" },
                { id: "_blank", name: "Open in a new tab" },
            ],
            fieldname: "target",
        },
    ];

    const conditionalField: MenuFormValues =
        view === "custom-url"
            ? {
                label: "Custom URL",
                htmlfor: "custom-link",
                type: "text",
                placeholder: "Enter Custom URL",
                fieldname: "url",
            }
            : {
                label: "Select Page",
                htmlfor: "page-link",
                select: true,
                options: [{ id: "/", name: "Home" }],
                fieldname: "url",
            };

    return [...baseFields, conditionalField];
};

export { MenuFormField };

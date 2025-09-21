import { FormField } from "./form";
interface ImagePreviewProps {
    fileImage?: File | string | null;
    placeholderImage?: string;
    previewPosition?: "top" | "bottom" | "left" | "right";
    className?: string;
    imageClassName?: string;
    alt?: string;
    width?: number;
    height?: number;
    unoptimized?: boolean;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

interface MenuInterface {
    name: string,
    target: string,
    url: string,
    is_enabled: number
}

type MenuFormValues = Omit<FormField<MenuInterface>, "fieldname"> & {
    fieldname: keyof MenuInterface
}


export type { MenuFormValues, MenuInterface, ImagePreviewProps }
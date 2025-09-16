import { ReactNode } from "react";

interface LogoProps {
    linkClassName?: string;
    href?: string;
    alt?: string;
    src?: string;
    width: number;
    height: number;
    imgClassName?: string;
}
interface NavArrayProps {
    path: string;
    label: string;
    icon?: ReactNode
}
interface NavLinkProps {
    ulClassName?: string;
    listclassName?: string;
    anchorClassName?: string;
    sectionKey: string
}
export type { LogoProps, NavLinkProps, NavArrayProps }
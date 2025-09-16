import type { Path } from "react-hook-form";

interface OptionType {
    id: string | number;
    name: string;
}

type InputType =
    | "text"
    | "email"
    | "password"
    | "checkbox"
    | "date"
    | "color"
    | "file";

interface FormField<T> {
    name?: string;
    label: string;
    fieldname: Path<T>;
    placeholder?: string;
    htmlfor: string;
    type?: InputType;
    select?: boolean;
    options?: OptionType[];
    id?: string;
    className?: string;
    multiple?: boolean;
    readOnly?: boolean;
    defaultValue?: string;
}

export type { FormField, OptionType };

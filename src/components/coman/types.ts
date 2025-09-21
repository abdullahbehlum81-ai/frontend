import { OptionType } from "@/types/form";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface InputFieldProps {
    className?: string,
    setValue?: Dispatch<SetStateAction<any>> | ((value: any) => void);
    type?: "text" | "email" | "password" | "file" | "checkbox" | "date" | "color" | "search";
    value?: string | File | File[];
    fieldName?: string;
    placeholder?: string;
    name?: string;
    id?: string;
    autoComplete?: string;
    multiple?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hookform?: boolean;
    readOnly?: boolean;
}
interface PasswordFieldProps {
    className?: string;
    setValue?: Dispatch<SetStateAction<any>> | ((value: any) => void);
    value?: string;
    fieldName?: string;
    placeholder?: string;
    id?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hookform?: boolean
}


interface SelectFieldProps {
    name?: string;
    id?: string;
    optionlabel?: string;
    options?: OptionType[];
    setValue?: Dispatch<SetStateAction<any>> | ((value: any) => void);
    className?: string;
    fieldName: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hookform?: boolean;
    value?: string;
    instanceId?: string;
    defaultValue?: string;
}

interface DialogProps {
    isOpen: boolean;
    onClose: Dispatch<SetStateAction<any>> | (() => void);
    title?: string | ReactNode;
    description?: string | ReactNode;
    content: ReactNode;
    className?: string;
    description_className?: string;
    Title_className?: string;
    Content_ClassName?: string;
}
interface SwitchProps {
    status: string | number;
    onChange: (checked: boolean) => void;

}
interface DropdownItem {
    label: string;
    imageUrl?: string;
}

interface TextareaProps {
    name?: string
    id?: string
    value?: string
    disabled?: boolean,
    fieldName?: string,
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    hookForm: boolean,
    className?: string;
    setValue?: React.Dispatch<any> | ((value: any) => void);

}
export type {
    InputFieldProps,
    PasswordFieldProps,
    SelectFieldProps,
    DialogProps,
    SwitchProps,
    DropdownItem,
    TextareaProps
};
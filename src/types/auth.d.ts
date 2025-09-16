import { FormField } from "./form";

interface RegisterInterface {
    fullname: string,
    email: string,
    password: string,
    confirmPassword: string,
}

interface LoginInterface {
    email: string
    password: string
}

interface ForgotPasswordInterface {
    email: string
}

interface ResetPasswordInterface {
    oldPassword: string,
    newPassword: string
}

type LoginFormValues = Omit<FormField<LoginInterface>, "fieldname"> & {
    fieldname: keyof LoginInterface;
};

type ForgotFormValues = Omit<FormField, "fieldname"> & {
    fieldname: keyof ForgotPasswordInterface
}

type ResetFormValues = Omit<FormField, "fieldname"> & {
    fieldname: keyof ResetPasswordInterface
}

type RegisterFormValues = Omit<FormField, "fieldname"> & {
    fieldname: keyof RegisterInterface
}

export type {
    LoginFormValues,
    LoginInterface,
    ForgotPasswordInterface,
    ForgotFormValues,
    ResetFormValues,
    ResetPasswordInterface,
    RegisterInterface,
    RegisterFormValues
}
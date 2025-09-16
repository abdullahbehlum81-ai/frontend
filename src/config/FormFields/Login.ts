import { LoginFormValues } from "@/types/auth"
const LoginFormFields = (): LoginFormValues[] => [
    {
        label: "Email:",
        fieldname: "email",
        placeholder: "Enter Email Address",
        htmlfor: "login-email-input",
        type: "text"
    },
    {
        label: "Password:",
        fieldname: "password",
        placeholder: "Enter Password",
        htmlfor: "login-password-input",
        type: "password"
    }
];
export { LoginFormFields }
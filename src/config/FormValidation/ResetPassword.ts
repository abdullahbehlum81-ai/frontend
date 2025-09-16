import { ObjectSchema, object, string } from "yup";

interface ForgotPassword {
    email: string
}

interface ResetPassword {
    oldPassword: string,
    newPassword: string
}

const ForgotPasswordSchema: ObjectSchema<ForgotPassword> = object({
    email: string().required("Email is required!")
        .email("Invalid email format")
})

const ResetPasswordSchema: ObjectSchema<ResetPassword> = object({
    oldPassword: string().required("Old password is required").min(8, "Old password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Must contain at least one special character"
        ),
    newPassword: string().required("New password is required").min(8, "New password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Must contain at least one special character"
        ),
})

export { ForgotPasswordSchema, ResetPasswordSchema }
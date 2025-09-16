import { LoginInterface } from "@/types/auth";
import { object, string, ObjectSchema } from "yup";
const LoginSchema: ObjectSchema<LoginInterface> = object({
    email: string().required("Email is required!").email("Invalid email format!"),
    password: string()
        .required("Password is required!")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
            /[!@#$%^&*(),.?":{}|<>]/,
            "Must contain at least one special character"
        ),
});
export { LoginSchema };
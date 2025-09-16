import { RegisterInterface } from "@/types/auth"
import { ObjectSchema, string, object, ref } from "yup"


const RegisterSchema: ObjectSchema<RegisterInterface> = object({
    fullname: string().required("Full name is required").min(4, "Name at least 4 characters"),
    email: string().required("Email is required").email("Invalid email format"),
    password: string().required("Password is required").min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number"),
    confirmPassword: string().required("Please confirm your password").oneOf([ref("password")], "Passwords must match")

})

export { RegisterSchema }
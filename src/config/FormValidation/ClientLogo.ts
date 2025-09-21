import { LogoInterface } from "@/types/Logo";
import { object, mixed, ObjectSchema, string } from "yup";


const LogoValidation: ObjectSchema<LogoInterface> = object({
    logo: mixed<File>()
        .required("Logo is required"),
    alt: string().required("Logo Alt is required")
});

export { LogoValidation };

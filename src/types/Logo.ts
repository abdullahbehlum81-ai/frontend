import { FormField } from "@/types/form"

interface LogoInterface {
    logo: File | null | string;
    alt: string
}
type LogoFormValues = Omit<FormField<LogoInterface>, "fieldname"> & {
    fieldname: keyof LogoInterface
}
export type { LogoInterface, LogoFormValues }
import { cn } from "@/utils/utils";
import { InputFieldProps, PasswordFieldProps, SelectFieldProps } from "./types";
import React, { ChangeEvent, forwardRef, useState } from "react";
import {
  EyeCloseIcon,
  EyeOpenIcon,
} from "../../../public/static/assets/icon/icon";
import ReactSelect from "react-select";
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      setValue,
      type = "text",
      value,
      fieldName,
      placeholder = "Enter Your Name",
      name,
      id,
      autoComplete = "off",
      multiple = false,
      onChange,
      hookform = false,
      readOnly = false,
      ...rest
    },
    ref
  ) => {
    const handleFormData = (e: ChangeEvent<HTMLInputElement>) => {
      const val =
        type === "file"
          ? multiple
            ? e.target.files
            : e.target.files?.[0]
          : e.target.value;

      if (typeof value === "string" || value === undefined) {
        setValue?.(val);
      } else {
        setValue?.((prev: any) => ({
          ...prev,
          [fieldName as string]: val,
        }));
      }
    };

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        multiple={multiple}
        readOnly={readOnly}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={type !== "file" ? (value as string) ?? "" : undefined}
        className={cn(
          type === "checkbox"
            ? "fm-checkbox"
            : type === "color"
            ? "fm-color-feild"
            : "form-control",
          className
        )}
        onChange={hookform ? onChange : handleFormData}
        {...rest}
      />
    );
  }
);

InputField.displayName = "InputField";
const PasswordField: React.FC<PasswordFieldProps> = ({
  className,
  setValue,
  value,
  fieldName,
  placeholder = "Enter Your Password",
  id,
  name,
  onChange,
  hookform = false,
  ...reset
}) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (typeof val === "string" || val === undefined) {
      setValue?.(val);
    } else {
      setValue?.((prev: any) => ({
        ...prev,
        [fieldName as string]: val,
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={visibility ? "text" : "password"}
        className={cn("form-control", className)}
        value={value}
        onChange={hookform ? onChange : handleFormData}
        placeholder={placeholder}
        name={name}
        id={id}
        {...reset}
      />

      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 !text-gray-500 focus:outline-none"
      >
        {visibility ? <EyeOpenIcon /> : <EyeCloseIcon />}
      </button>
    </div>
  );
};
PasswordField.displayName = "PasswordField";

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  id,
  optionlabel,
  options = [],
  setValue,
  className,
  fieldName,
  value,
  onChange,
  hookform = false,
  instanceId,
  defaultValue,
}) => {
  const formattedOptions = options.map((option) => ({
    value: String(option?.id),
    label: String(option?.name),
  }));

  const selectedOption =
    formattedOptions.find((opt) => String(opt.value) === String(value)) ||
    formattedOptions.find(
      (opt) => String(opt.value) === String(defaultValue)
    ) ||
    null;

  const handleChange = (selected: any) => {
    if (hookform && onChange) {
      onChange({
        target: { name, value: selected?.value || "" },
      } as any);
    } else {
      setValue?.((prev: any) => ({
        ...prev,
        [fieldName]: selected?.value || "",
      }));
    }
  };

  return (
    <ReactSelect
      name={name}
      inputId={id}
      instanceId={instanceId}
      value={selectedOption}
      onChange={handleChange}
      options={formattedOptions}
      placeholder={optionlabel}
      className={cn("select-control", className)}
      isClearable
    />
  );
};

export { InputField, PasswordField, SelectField };

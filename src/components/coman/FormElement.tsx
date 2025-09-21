import { cn } from "@/utils/utils";
import {
  InputFieldProps,
  PasswordFieldProps,
  SelectFieldProps,
  TextareaProps,
} from "./types";
import React, { ChangeEvent, forwardRef, useState } from "react";
import {
  EyeCloseIcon,
  EyeOpenIcon,
} from "../../../public/static/assets/icon/icon";
import ReactSelect from "react-select";
import Image from "next/image";
import { ImagePreviewProps } from "@/types";
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
const TextAreaField: React.FC<TextareaProps> = ({
  name,
  id,
  value,
  disabled = false,
  setValue,
  fieldName,
  placeholder = "Enter Description",
  onChange,
  hookForm = false,
  className,
}: TextareaProps) => {
  const handleTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (setValue && fieldName) {
      if (typeof setValue === "function") {
        setValue((prev: any) => ({
          ...prev,
          [fieldName]: e.target.value,
        }));
      }
    }
  };

  return (
    <textarea
      name={name}
      className={cn("form_control", className)}
      id={id}
      onChange={hookForm !== false ? onChange : handleTextarea}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

const ImagePreview: React.FC<ImagePreviewProps> = ({
  fileImage,
  placeholderImage = "/300x150",
  className = "",
  imageClassName = "",
  alt = "preview",
  width = 100,
  height = 100,
  unoptimized = false,
  objectFit = "contain",
}) => {
  const imageSrc =
    fileImage instanceof File
      ? URL.createObjectURL(fileImage)
      : typeof fileImage === "string"
      ? fileImage
      : "https://placehold.co" + placeholderImage;

  return (
    <div className={`${className} image-preview-wrapper`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={imageClassName}
        style={{ objectFit }}
        unoptimized={unoptimized}
      />
    </div>
  );
};

export { InputField, PasswordField, SelectField, TextAreaField, ImagePreview };

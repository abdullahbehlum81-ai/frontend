"use client";

import React from "react";
import {
  Controller,
  Control,
  FieldErrors,
  FieldValues,
  useWatch,
} from "react-hook-form";

import {
  InputField,
  PasswordField,
  SelectField,
  TextAreaField,
} from "@/components/coman/FormElement";
import type { FormField } from "@/types/form";
import ImagePreview from "@/components/coman/ImagePreview";

interface DynamicFormProps<T extends FieldValues> {
  fields: FormField<T>[];
  control: Control<T>;
  errors?: FieldErrors<T>;
  instanceId: string;
  labelClassName?: string;
  forgotWidget?: boolean;
  onClick?: () => void;
  placeholderImage?: string;
  width?: number;
  height?: number;
  previewClassName?: string;
}

export function DynamicFormRenderer<T extends FieldValues>({
  fields,
  control,
  errors,
  instanceId,
  labelClassName,
  forgotWidget = false,
  onClick,
  height,
  placeholderImage,
  previewClassName,
  width,
}: DynamicFormProps<T>) {
  return (
    <>
      {fields.map((form, index) => {
        const watchedValue = useWatch({ control, name: form.fieldname });

        return (
          <div className="fm-group" key={`field-${index}`}>
            {form.label && (
              <label className={labelClassName} htmlFor={form.htmlfor}>
                {form.label}
                {forgotWidget && form.fieldname === "password" ? (
                  <button
                    type="button"
                    className="forgot-model-btn"
                    onClick={onClick}
                  >
                    Forgot password?
                  </button>
                ) : null}
              </label>
            )}

            <Controller
              control={control}
              name={form.fieldname}
              render={({ field }) => {
                if (form.select) {
                  return (
                    <SelectField
                      defaultValue={form.defaultValue}
                      fieldName={String(form.fieldname)}
                      hookform
                      {...field}
                      optionlabel={form.label}
                      instanceId={instanceId}
                      options={form.options || []}
                    />
                  );
                }

                if (form.textarea) {
                  return (
                    <TextAreaField
                      hookForm={true}
                      {...field}
                      placeholder={form.placeholder}
                    />
                  );
                }

                if (form.type === "password") {
                  return (
                    <PasswordField
                      hookform
                      placeholder={form.placeholder}
                      {...field}
                    />
                  );
                }

                if (form.type === "file") {
                  return (
                    <>
                      <InputField
                        hookform
                        type={form.type}
                        placeholder={form.placeholder}
                        multiple={form.multiple}
                        onChange={(e) => {
                          const file = form.multiple
                            ? e.target.files
                              ? Array.from(e.target.files)
                              : []
                            : e.target.files?.[0] ?? null;
                          field.onChange(file);
                        }}
                      />

                      <ImagePreview
                        fileImage={watchedValue}
                        placeholderImage={placeholderImage}
                        width={width}
                        height={height}
                        alt={form.label || "preview"}
                        className={previewClassName}
                      />
                    </>
                  );
                }

                return (
                  <InputField
                    hookform
                    type={form.type}
                    placeholder={form.placeholder}
                    {...field}
                  />
                );
              }}
            />

            {errors?.[form.fieldname] && (
              <p className="text-red-500 text-sm !mt-2">
                {String(errors[form.fieldname]?.message)}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

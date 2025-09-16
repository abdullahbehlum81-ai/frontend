"use client";

import React from "react";
import { Controller, Control, FieldErrors, FieldValues } from "react-hook-form";

import {
  InputField,
  PasswordField,
  SelectField,
} from "@/components/coman/FormElement";

import type { FormField } from "@/types/form";

interface DynamicFormProps<T extends FieldValues> {
  fields: FormField<T>[];
  control: Control<T>;
  errors?: FieldErrors<T>;
  instanceId: string;
  labelClassName?: string;
  forgotWidget?: boolean;
  onClick?: () => void;
}

export function DynamicFormRenderer<T extends FieldValues>({
  fields,
  control,
  errors,
  instanceId,
  labelClassName,
  forgotWidget = false,
  onClick,
}: DynamicFormProps<T>) {
  return (
    <>
      {fields.map((form, index) => (
        <div className="fm-group" key={`field-${index}`}>
          {form.label && (
            <label className={labelClassName} htmlFor={form.htmlfor}>
              {form.label}{" "}
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

              if (form.type === "password") {
                return (
                  <PasswordField
                    hookform
                    placeholder={form.placeholder}
                    {...field}
                  />
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
      ))}
    </>
  );
}

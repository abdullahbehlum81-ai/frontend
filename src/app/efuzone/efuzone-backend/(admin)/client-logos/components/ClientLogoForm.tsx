"use client";
import { useForm } from "react-hook-form";
import { LogoFormValues, LogoInterface } from "@/types/Logo";
import { useEffect, useMemo, useState } from "react";
import { DynamicFormRenderer } from "@/helpers/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LogoValidation } from "@/config/FormValidation/ClientLogo";
import { FaUpload } from "react-icons/fa";
import {
  updateLogo,
  uploadLogo,
  getSingleLogo,
} from "@/service/ClientLogoService";
import { useRouter } from "next/navigation";
import { PANNEL_URL_PATH } from "@/constant/constant";
import toast from "react-hot-toast";
import { BASEURL } from "@/constant";
import Image from "next/image";

interface FormProps {
  id?: number;
}

const DEFAULT_VALUES: LogoInterface = {
  logo: null,
  alt: "",
};

const ClientLogoField = (): LogoFormValues[] => [
  {
    label: "Upload Logo",
    htmlfor: "upload-logo",
    fieldname: "logo",
    type: "file",
  },

  {
    label: "Logo Alt",
    htmlfor: "logo-alt",
    placeholder: "Enter Logo Alt",
    fieldname: "alt",
    type: "text",
  },
];

function ClientLogoForm({ id }: FormProps) {
  const navigate = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LogoInterface>({
    resolver: yupResolver(LogoValidation),
    defaultValues: DEFAULT_VALUES,
  });

  const FormField = useMemo(() => {
    return ClientLogoField();
  }, []);

  const ClientLogo = watch("logo") as File | null | string;
  const handleUploadLogo = async (data: LogoInterface) => {
    if (id) {
      const { response } = await updateLogo({ client_logo: id, payload: data });
      if (response?.success) {
        toast.success(response?.message);
      }
    } else {
      const { response } = await uploadLogo(data);
      if (response?.success) {
        toast.success(response?.message);
        reset({ logo: undefined, alt: "" });
      }
    }
    navigate.push(`${PANNEL_URL_PATH}/client-logos`);
  };
  const placeholderImg = "https://placehold.co/300x150";

  const imageSrc =
    ClientLogo instanceof File
      ? URL.createObjectURL(ClientLogo)
      : typeof ClientLogo === "string"
      ? ClientLogo
      : placeholderImg;

  useEffect(() => {
    if (id) {
      getSingleLogo(id).then(({ singleItem }) => {
        reset({
          logo: `${BASEURL}${singleItem.logo}`,
          alt: singleItem?.alt || "",
        });
      });
    } else {
      reset(DEFAULT_VALUES);
    }
  }, [id, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(handleUploadLogo)} id="submitClientLogos">
        <DynamicFormRenderer
          control={control}
          fields={FormField}
          instanceId="client-logo-upload"
          errors={errors}
        />

        <div className="myPage-img-preview page-header-wrap">
          <Image
            src={imageSrc}
            alt="Logo"
            width={300}
            height={150}
            style={{ objectFit: "contain" }}
            unoptimized
          />
        </div>

        <div className="myPage-align-item-end ">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bs-btn bs-btn-primary page-item-wrap "
          >
            {isSubmitting ? (
              "Uploading...."
            ) : (
              <>
                <FaUpload /> Upload Client Logo
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default ClientLogoForm;

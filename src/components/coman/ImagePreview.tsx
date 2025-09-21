"use client";

import { BASEURL } from "@/constant";
import Image from "next/image";
import React from "react";

export interface ImagePreviewProps {
  fileImage?: File | string | (File | string | null)[] | null;
  placeholderImage?: string;
  className?: string;
  imageClassName?: string;
  alt?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const resolveSrc = (file: File | string | null, placeholderImage: string) => {
  if (file instanceof File) {
    return URL.createObjectURL(file);
  }
  if (typeof file === "string") {
    return BASEURL + file;
  }
  return "https://placehold.co" + placeholderImage;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({
  fileImage,
  placeholderImage = "300x150",
  className = "",
  imageClassName = "",
  alt = "preview",
  width = 100,
  height = 100,
  unoptimized = false,
  objectFit = "contain",
}) => {
  const imagesArray =
    Array.isArray(fileImage) && fileImage.length > 0
      ? fileImage
      : fileImage
      ? [fileImage]
      : [];

  return (
    <div className={`${className} myPage-img-preview `}>
      {imagesArray.length === 0 ? (
        <img
          src={`https://placehold.co/${placeholderImage}`}
          alt={alt}
          width={width}
          height={height}
          className={imageClassName}
          style={{ objectFit }}
        />
      ) : (
        imagesArray.map((img, index) => {
          const validImage = img as File | string | null;
          return (
            <Image
              key={index}
              src={resolveSrc(validImage, placeholderImage)}
              alt={alt}
              width={width}
              height={height}
              className={imageClassName}
              style={{ objectFit }}
              unoptimized={unoptimized}
            />
          );
        })
      )}
    </div>
  );
};

export default ImagePreview;

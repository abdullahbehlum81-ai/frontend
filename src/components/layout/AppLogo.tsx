import Image from "next/image";
import { IMAGES_FOLDER_PATH } from "@/constant/constant";
import { ExternalLink } from "../coman/ExternalLink";
import { LogoProps } from "./types";

function AppLogo({
  href = "/",
  alt = "efuzone",
  imgClassName,
  height = 91,
  src = `${IMAGES_FOLDER_PATH}/logo.png`,
  width = 230,
  linkClassName,
}: LogoProps) {
  return (
    <ExternalLink href={href} className={linkClassName}>
      <Image
        src={src}
        alt={alt}
        className={imgClassName}
        width={width}
        height={height}
      />
    </ExternalLink>
  );
}

export default AppLogo;

import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

function ExternalLink({ href, children, className }: LinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

export { ExternalLink };

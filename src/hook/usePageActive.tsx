"use client";

import { usePathname } from "next/navigation";
interface NavLink {
  path: string;
}

interface UsePageActiveProps {
  NavLinks: NavLink[];
}

const usePageActive = ({ NavLinks }: UsePageActiveProps) => {
  const pathname = usePathname();
  const activeNav = NavLinks.find((i) => i.path === pathname);
  const activePage = activeNav?.path;
  return { activePage };
};
export { usePageActive };

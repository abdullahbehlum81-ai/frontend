import { ClassValue, clsx } from "clsx";
import { useSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function parseSearchParams() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("perPage")) || 10;
  const search = searchParams.get("search") || "";
  return { page, perPage, search }
}
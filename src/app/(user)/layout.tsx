import CurrentLayout from "@/components/layout/currentLayout";

import { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  
  return (
    <CurrentLayout>
      {children}
    </CurrentLayout>
  );
}

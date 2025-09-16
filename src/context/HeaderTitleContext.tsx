import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderTitleContextType {
  headerTitle: string;
  setHeaderTitle: (title: string) => void;
}

const HeaderTitleContext = createContext<HeaderTitleContextType | undefined>(
  undefined
);

export const HeaderTitleProvider = ({ children }: { children: ReactNode }) => {
  const [headerTitle, setHeaderTitle] = useState("Efuzone Dashboard");

  return (
    <HeaderTitleContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};

export const useHeaderTitle = () => {
  const context = useContext(HeaderTitleContext);
  if (!context) {
    throw new Error("useHeaderTitle must be used within a HeaderTitleProvider");
  }
  return context;
};

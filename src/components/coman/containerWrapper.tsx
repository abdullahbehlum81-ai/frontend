import React, { ReactNode } from "react";

function ContainerWrapper({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="main-container">
      <div className="container-spc">{children}</div>
    </div>
  );
}

export default ContainerWrapper;

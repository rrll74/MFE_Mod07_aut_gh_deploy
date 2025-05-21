import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-app-container">
    <div className="layout-app-header">
      <span>Pedidos</span>
    </div>
    <div className="layout-app-body">{children}</div>
  </div>
);

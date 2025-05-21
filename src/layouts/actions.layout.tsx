import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ActionsLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-actions">{children}</div>
);

import React from "react";

interface Props {
  children: React.ReactNode;
}

export const OrderBodyLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-order-body">{children}</div>
);

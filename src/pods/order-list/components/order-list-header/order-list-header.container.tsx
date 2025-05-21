import React from "react";
import { OrderListHeader } from "./order-list-header.component";

interface Props {
  headers: string[];
}

export const OrderListHeaderContainer: React.FC<Props> = (props) => {
  const { headers } = props;
  return <OrderListHeader headers={headers} />;
};

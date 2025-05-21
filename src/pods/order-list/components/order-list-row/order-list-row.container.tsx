import React from "react";
import { OrderEntity } from "@/common/order";
import { OrderListRowComponent } from "./order-list-row.component";

interface Props {
  order: OrderEntity;
  handleDeleteAction: (nro: number) => void;
  handleEditAction: (nro: number) => void;
}

export const OrderListRowContainer: React.FC<Props> = (props) => {
  const { handleDeleteAction, handleEditAction, order } = props;

  return (
    <OrderListRowComponent
      order={order}
      handleClickDelete={handleDeleteAction}
      handleClickEdit={handleEditAction}
    />
  );
};

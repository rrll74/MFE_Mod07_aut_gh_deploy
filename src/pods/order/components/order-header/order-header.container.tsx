import React from "react";
import { OrderEntity } from "@/common/order";
import { OrderHeaderComponent } from "./order-header.component";

interface Props {
  order: OrderEntity;
  setOrder: React.Dispatch<React.SetStateAction<OrderEntity>>;
  saveOrder: (row: OrderEntity) => void;
}

export const OrderHeaderContainer: React.FC<Props> = (props) => {
  const { order, setOrder, saveOrder } = props;

  return (
    <React.Fragment>
      <OrderHeaderComponent
        order={order}
        setOrder={setOrder}
        saveOrder={saveOrder}
      />
    </React.Fragment>
  );
};

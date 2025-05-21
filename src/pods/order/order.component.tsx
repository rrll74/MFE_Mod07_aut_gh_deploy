import React from "react";
import { OrderEntity } from "@/common/order";
import { OrderHeaderContainer } from "./components/order-header";
import { OrderRowsContainer } from "./components/order-rows";

interface Props {
  order: OrderEntity;
  setOrder: React.Dispatch<React.SetStateAction<OrderEntity>>;
  saveOrder: (row: OrderEntity) => void;
}

export const OrderComponent: React.FC<Props> = (props) => {
  const { order, saveOrder, setOrder } = props;

  return (
    <React.Fragment>
      <OrderHeaderContainer
        order={order}
        setOrder={setOrder}
        saveOrder={saveOrder}
      />
      <OrderRowsContainer
        order={order}
        setOrder={setOrder}
        saveOrder={saveOrder}
      />
    </React.Fragment>
  );
};

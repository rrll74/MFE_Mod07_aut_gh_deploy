import React from "react";
import { OrderRowsComponent } from "./order-rows.component";
import { OrderEntity, RowOrderEntity } from "@/common/order";

interface Props {
  order: OrderEntity;
  setOrder: React.Dispatch<React.SetStateAction<OrderEntity>>;
  saveOrder: (row: OrderEntity) => void;
}

export const OrderRowsContainer: React.FC<Props> = (props) => {
  const { order, setOrder, saveOrder } = props;

  const handleClickDeleteRow = (row: RowOrderEntity) => {
    const newOrders: RowOrderEntity[] = [];
    order.orders.forEach((current) => {
      if (current.description !== row.description) newOrders.push(current);
    });
    setOrder({
      ...order,
      total: recalculateTotal(newOrders),
      state: recalculateState(newOrders),
      orders: newOrders,
    });
    console.log("NewOrders", newOrders);
  };

  const handleClickInvalidateRow = (row: RowOrderEntity) => {
    let validItems: number = 0;
    const newOrders = order.orders.map((current) => {
      // console.log(current);
      if (current.description === row.description) {
        current.valid = !current.valid;
        current.state = current.valid ? "Válido" : "Pendiente";
      }
      validItems = current.valid ? validItems + 1 : validItems;
      return current;
    });
    setOrder({
      ...order,
      state: recalculateState(newOrders),
      orders: newOrders,
    });
  };

  const handleClickNewLine = (row: RowOrderEntity): void => {
    const newOrders: RowOrderEntity[] = [];
    order.orders.forEach((row) => {
      newOrders.push(row);
    });
    newOrders.push(row);
    setOrder({
      ...order,
      total: recalculateTotal(newOrders),
      state: recalculateState(newOrders),
      orders: newOrders,
    });
  };

  const recalculateState = (rows: RowOrderEntity[]) => {
    let validItems: number = 0;
    rows.forEach(
      (row) => (validItems = row.valid ? validItems + 1 : validItems)
    );
    return rows.length ? (validItems * 100) / rows.length : 0;
  };

  const recalculateTotal = (rows: RowOrderEntity[]) => {
    let total: number = 0;
    rows.forEach((row) => (total = row !== null ? total + row.price : total));
    return total;
  };

  return (
    <React.Fragment>
      <OrderRowsComponent
        order={order}
        handleClickDeleteRow={handleClickDeleteRow}
        handleClickInvalidateRow={handleClickInvalidateRow}
        handleClickNewLine={handleClickNewLine}
      />
    </React.Fragment>
  );
};

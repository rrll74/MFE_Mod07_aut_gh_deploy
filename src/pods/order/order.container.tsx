import React from "react";
import { findOrderByNro, OrderListContext } from "@/common/order-list";
import { asignInfoOrderEntity, OrderEntity } from "@/common/order";
import { OrderComponent } from "./order.component";

interface Props {
  nro: number;
}

export const OrderContainer: React.FC<Props> = (props) => {
  const { nro } = props;
  const orderListProvider = React.useContext(OrderListContext);
  const [order, setOrder] = React.useState<OrderEntity>(
    findOrderByNro(nro, orderListProvider.orderList)
  );

  React.useEffect(() => {
    console.log("carga", order);
  }, [order]);

  const saveOrder = (row: OrderEntity) => {
    const editionOrder: OrderEntity = findOrderByNro(
      nro,
      orderListProvider.orderList
    );
    // console.log(nro, orderListProvider, editionOrder);
    asignInfoOrderEntity(order, editionOrder);
  };

  return (
    <OrderComponent order={order} setOrder={setOrder} saveOrder={saveOrder} />
  );
};

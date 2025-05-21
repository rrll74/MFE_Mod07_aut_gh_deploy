import { OrderEntity } from "@/common/order";

export interface OrderListProfile {
  orderList: OrderEntity[];
}

export const createEmptyOrderListProfile = (): OrderListProfile => ({
  orderList: [],
});

export const findOrderByNro = (nro: number, orders: OrderEntity[]) => {
  let orderFound: OrderEntity = null;

  orders.map((order) => {
    if (order.nro === nro) {
      orderFound = order;
    }
  });
  return orderFound;
};

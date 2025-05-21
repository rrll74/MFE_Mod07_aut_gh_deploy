import * as vm from "@/common/order";
import * as api from "./order-list.api";

const mapRowOrderFromApiToVm = (
  rowOrder: api.RowOrderEntityApi
): vm.RowOrderEntity => {
  const state: vm.OrderState =
    rowOrder.state !== "Pendiente" && rowOrder.state !== "Válido"
      ? "Pendiente"
      : rowOrder.state;

  return {
    valid: rowOrder.valid,
    state: state,
    description: rowOrder.description,
    price: rowOrder.price,
  };
};

export const mapOrderFromApiToVm = (
  order: api.OrderEntityApi
): vm.OrderEntity => {
  let total: number = 0;
  let validateds: number = 0;

  const rowOrders: vm.RowOrderEntity[] = order.orders.map((order) => {
    const rowOrderMapped = mapRowOrderFromApiToVm(order);
    total += rowOrderMapped.price;
    validateds += rowOrderMapped.valid ? 1 : 0;
    return rowOrderMapped;
  });

  return {
    nro: order.nro,
    provider: order.provider,
    date: order.date,
    total: total,
    state: (validateds * 100) / rowOrders.length,
    orders: rowOrders,
  };
};

export const mapOrderCollectionFromApiToVm = (
  orderCollection: api.OrderEntityApi[]
): vm.OrderEntity[] => orderCollection.map(mapOrderFromApiToVm);

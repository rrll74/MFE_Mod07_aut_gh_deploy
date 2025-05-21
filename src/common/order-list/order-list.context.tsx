import React from "react";
import { OrderListProfile } from "./order-list.viewmodel";
import { getOrderCollection } from "./order-list.api";
import { mapOrderCollectionFromApiToVm } from "./order-list.mapper";

interface Context extends OrderListProfile {
  setOrderListProfile: (orderListProfile: OrderListProfile) => void;
}

export const OrderListContext = React.createContext<Context>({
  orderList: [],
  setOrderListProfile: () =>
    console.warn(
      "** If you are reading this, likely you have forgotten to add the provider on top of your app"
    ),
});

interface Props {
  children: React.ReactNode;
}

export const OrderListProvider: React.FC<Props> = ({ children }) => {
  const [orderListProfile, setOrderListProfile] =
    React.useState<OrderListProfile>({
      orderList: mapOrderCollectionFromApiToVm(getOrderCollection()),
    });

  // console.log("carga lista");

  return (
    <OrderListContext.Provider
      value={{ orderList: orderListProfile.orderList, setOrderListProfile }}
    >
      {children}
    </OrderListContext.Provider>
  );
};

import React from "react";
import { createEmptyOrderEntity, OrderEntity } from "./order.viewmodel";

interface Context extends OrderEntity {
  setOrderProfile: (orderProfile: OrderEntity) => void;
}

export const OrderContext = React.createContext<Context>({
  nro: 0,
  provider: "",
  date: "",
  total: 0,
  state: 0,
  orders: [],
  setOrderProfile: () =>
    console.warn(
      "** If you are reading this, likely you have forgotten to add the provider on top of your app"
    ),
});

interface Props {
  children: React.ReactNode;
}

export const OrderProvider: React.FC<Props> = ({ children }) => {
  const [orderProfile, setOrderProfile] = React.useState<OrderEntity>(
    createEmptyOrderEntity()
  );

  return (
    <OrderContext.Provider
      value={{
        nro: orderProfile.nro,
        provider: orderProfile.provider,
        date: orderProfile.date,
        total: orderProfile.total,
        state: orderProfile.state,
        orders: orderProfile.orders,
        setOrderProfile,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

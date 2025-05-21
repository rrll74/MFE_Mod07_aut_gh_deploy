import React from "react";
import { ActionsLayout, AppLayout } from "@/layouts";
import { OrderListContainer } from "@/pods/order-list";
import { OrderLinksContainer } from "@/pods/links";

export const OrderListScene: React.FC = () => {
  return (
    <AppLayout>
      <ActionsLayout>
        <OrderLinksContainer />
      </ActionsLayout>
      <OrderListContainer />
    </AppLayout>
  );
};

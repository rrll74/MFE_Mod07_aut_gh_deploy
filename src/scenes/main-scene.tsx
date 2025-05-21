import { OrderListProvider } from "@/common/order-list";
import React from "react";
import { OrderListScene } from "./order-list.scene";
import { OrderScene } from "./order.scene";

type SceneType = "List" | "Order";

interface Props {
  scene: SceneType;
}

export const MainScene: React.FC<Props> = (props) => {
  const { scene } = props;
  return (
    <OrderListProvider>
      {scene === "List" ? (
        <OrderListScene></OrderListScene>
      ) : (
        <OrderScene></OrderScene>
      )}
    </OrderListProvider>
  );
};

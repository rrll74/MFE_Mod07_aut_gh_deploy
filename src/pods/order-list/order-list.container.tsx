import React from "react";
import { useNavigate } from "react-router-dom";
import { OrderEntity } from "@/common/order";
import { OrderListContext } from "@/common/order-list";
import { OrderListComponent } from "./order-list.component";

export const OrderListContainer: React.FC = () => {
  const { orderList, setOrderListProfile } = React.useContext(OrderListContext);
  const navigate = useNavigate();

  const handleDeleteAction = (nro: number) => {
    // Delete order from list
    const newList: OrderEntity[] = [];

    orderList.map((order) => {
      if (order.nro !== nro) {
        newList.push(order);
      }
    });
    setOrderListProfile({ orderList: newList });
  };

  const handleEditAction = (nro: number) => {
    navigate(`/order/${nro}`);
  };

  const handleClickNewOrder = (order: OrderEntity) => {
    const newList: OrderEntity[] = [];
    orderList.map((o) => {
      newList.push(o);
    });
    newList.push(order);
    console.log(newList);
    setOrderListProfile({ orderList: newList });
  };

  return (
    <div className="layout-main-list">
      <OrderListComponent
        orderList={orderList}
        handleEditAction={handleEditAction}
        handleDeleteAction={handleDeleteAction}
        handleClickNewOrder={handleClickNewOrder}
      />
    </div>
  );
};

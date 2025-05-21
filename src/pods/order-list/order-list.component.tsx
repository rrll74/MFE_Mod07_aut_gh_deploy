import React from "react";
import { Button, Table, TableBody } from "@mui/material";
import { createEmptyOrderEntity, OrderEntity } from "@/common/order";
import { FormNewOrderDialog } from "@/pods/dialogs";
import { OrderListRowContainer } from "./components/order-list-row";
import { OrderListHeaderContainer } from "./components/order-list-header";

interface Props {
  orderList: OrderEntity[];
  handleEditAction: (nro: number) => void;
  handleDeleteAction: (nro: number) => void;
  handleClickNewOrder: (order: OrderEntity) => void;
}

export const OrderListComponent: React.FC<Props> = (props) => {
  const {
    orderList,
    handleDeleteAction,
    handleEditAction,
    handleClickNewOrder,
  } = props;

  const [open, setOpen] = React.useState(false);

  const newOrder = () => {
    setOpen(true);
  };

  const saveOrder = (nro: number) => {
    if (nro) {
      const newOrder: OrderEntity = createEmptyOrderEntity();
      newOrder.nro = nro;
      handleClickNewOrder(newOrder);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={newOrder}>
        Nuevo pedido
      </Button>
      <Table>
        <OrderListHeaderContainer
          headers={["Número", "Proveedor", "Fecha", "Total", "Estado", "", ""]}
        />
        <TableBody>
          {orderList.map((order) => (
            <OrderListRowContainer
              key={`order${order.nro}`}
              order={order}
              handleDeleteAction={handleDeleteAction}
              handleEditAction={handleEditAction}
            />
          ))}
        </TableBody>
      </Table>
      <FormNewOrderDialog
        title="Nuevo pedido"
        msg="Introduzca el número del pedido"
        open={open}
        setOpen={setOpen}
        saveOrder={saveOrder}
      />
    </React.Fragment>
  );
};

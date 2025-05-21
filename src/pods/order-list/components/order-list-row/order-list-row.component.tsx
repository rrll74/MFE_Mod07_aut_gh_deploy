import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { OrderEntity } from "@/common/order";
import { invert_date } from "@/common/common-functions";

interface Props {
  order: OrderEntity;
  handleClickEdit: (nro: number) => void;
  handleClickDelete: (nro: number) => void;
}

export const OrderListRowComponent: React.FC<Props> = (props) => {
  const { order, handleClickDelete, handleClickEdit } = props;

  return (
    <TableRow key={`order${order.nro}`}>
      <TableCell>{order.nro}</TableCell>
      <TableCell>{order.provider}</TableCell>
      <TableCell>{invert_date(order.date)}</TableCell>
      <TableCell>{`${(Math.round(order.total * 100) / 100).toFixed(
        2
      )} €`}</TableCell>
      <TableCell align="center">{`${order.state.toFixed(2)} %`}</TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          onClick={(e) => handleClickEdit(order.nro)}
        >
          Editar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          onClick={(e) => handleClickDelete(order.nro)}
          color="error"
        >
          Borrar
        </Button>
      </TableCell>
    </TableRow>
  );
};

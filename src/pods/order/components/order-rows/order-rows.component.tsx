import React from "react";
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { OrderEntity, RowOrderEntity } from "@/common/order";
import { FormNewRowDialog } from "@/pods/dialogs/form-new-row-dialog.component";

export interface DataRowOrder {
  description: string;
  price: number;
}

interface Props {
  order: OrderEntity;
  handleClickDeleteRow: (row: RowOrderEntity) => void;
  handleClickInvalidateRow: (row: RowOrderEntity) => void;
  handleClickNewLine: (row: RowOrderEntity) => void;
}

export const OrderRowsComponent: React.FC<Props> = (props) => {
  const {
    order,
    handleClickDeleteRow,
    handleClickInvalidateRow,
    handleClickNewLine,
  } = props;
  const [open, setOpen] = React.useState(false);

  const newLine = () => {
    setOpen(true);
  };

  const saveLine = (data: DataRowOrder) => {
    if (data.description) {
      const newRow: RowOrderEntity = {
        description: data.description,
        price: data.price,
        state: "Pendiente",
        valid: false,
      };
      handleClickNewLine(newRow);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={newLine}>
        Nueva línea
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Válido</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Opción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.orders.map((row, index) => {
            console.log(row, index);
            return (
              <TableRow key={`line_${index}`}>
                <TableCell>
                  <Checkbox disabled checked={row?.valid} />
                </TableCell>
                <TableCell>
                  {row?.state}{" "}
                  <Button
                    variant="contained"
                    size="small"
                    color={row?.valid ? "warning" : "success"}
                    onClick={() => handleClickInvalidateRow(row)}
                  >
                    {row?.valid ? "Invalidar" : "Validar"}
                  </Button>
                </TableCell>
                <TableCell>{row?.description}</TableCell>
                <TableCell>{row?.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => handleClickDeleteRow(row)}
                  >
                    Borrar
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <FormNewRowDialog
        title="Nueva línea de material"
        msg="Introduzca los datos del material"
        open={open}
        setOpen={setOpen}
        saveLine={saveLine}
      />
    </React.Fragment>
  );
};

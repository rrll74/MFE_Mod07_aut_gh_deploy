import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { OrderEntity } from "@/common/order";
import { invert_date } from "@/common/common-functions";
import { InfoDialog } from "@/pods/dialogs";

interface Props {
  order: OrderEntity;
  setOrder: React.Dispatch<React.SetStateAction<OrderEntity>>;
  saveOrder: (row: OrderEntity) => void;
}

export const OrderHeaderComponent: React.FC<Props> = (props) => {
  const { order, setOrder, saveOrder } = props;
  const [provider, setProvider] = React.useState(order.provider);
  const [date, setDate] = React.useState(invert_date(order.date));
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // setProvider(order.provider);
    // setDate(invert_date(order.date));
    setOrder({ ...order, date: invert_date(date), provider: provider });
  }, [date, provider]);

  const sendOrder = () => {
    setOpen(true);
  };

  return (
    <div className="order-header">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            label="Número"
            variant="outlined"
            value={order.nro}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{ width: "100%" }}
            label="Proveedor"
            variant="outlined"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Fecha"
            variant="outlined"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Total"
            variant="outlined"
            value={order.total.toFixed(2)}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Estado"
            variant="outlined"
            value={order.state.toFixed(2)}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={(e) => saveOrder(order)}>
            Guardar cambios
          </Button>{" "}
          <Button
            variant="contained"
            disabled={order.state !== 100}
            onClick={sendOrder}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
      <InfoDialog
        title="Envío de pedido"
        msg="Pedido enviado"
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

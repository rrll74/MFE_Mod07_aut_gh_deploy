import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataRowOrder } from "../order/components/order-rows/order-rows.component";

interface Props {
  title: string;
  msg: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  saveLine: (data: DataRowOrder) => void;
}

export const FormNewRowDialog: React.FC<Props> = (props) => {
  const { msg, title, open, setOpen, saveLine } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(formJson);
            saveLine({
              description: formJson.description,
              price: parseFloat(formJson.price),
            });
            handleClose();
          },
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {msg}
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="Descripción"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              margin="dense"
              id="price"
              name="price"
              label="Precio"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Crear</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

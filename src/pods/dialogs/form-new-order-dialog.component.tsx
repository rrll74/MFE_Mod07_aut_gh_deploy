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

interface Props {
  title: string;
  msg: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  saveOrder: (nro: number) => void;
}

export const FormNewOrderDialog: React.FC<Props> = (props) => {
  const { msg, title, open, setOpen, saveOrder } = props;

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
            saveOrder(parseInt(formJson.nro));
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
              id="nro"
              name="nro"
              label="Número"
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

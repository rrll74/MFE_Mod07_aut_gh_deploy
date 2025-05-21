export type OrderState = "Pendiente" | "Válido";

export interface RowOrderEntity {
  valid: boolean;
  state: OrderState;
  description: string;
  price: number;
}

export interface OrderEntity {
  nro: number;
  provider: string;
  date: string;
  total: number;
  state: number;
  orders: RowOrderEntity[];
}

export const createEmptyOrderEntity = (): OrderEntity => ({
  nro: 0,
  provider: "",
  date: "",
  total: 0,
  state: 0,
  orders: [],
});

export const asignInfoOrderEntity = (
  origin: OrderEntity,
  destiny: OrderEntity
): void => {
  destiny.date = origin.date;
  destiny.nro = origin.nro;
  destiny.provider = origin.provider;
  destiny.state = origin.state;
  destiny.total = origin.total;
  destiny.orders = origin.orders;
};

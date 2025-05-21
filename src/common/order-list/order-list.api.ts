import { mainData } from "mockdata";

export interface RowOrderEntityApi {
  valid: boolean;
  state: string;
  description: string;
  price: number;
}

export interface OrderEntityApi {
  nro: number,
  provider: string;
  date: string;
  orders: RowOrderEntityApi[];
}

export const getOrderCollection = ():OrderEntityApi[] => {
  return mainData;
};

import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  order: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  order: "/order/:nro",
};

interface Routes extends Omit<SwitchRoutes, "order" | "roworder"> {
  order: (nro: number) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  order: (nro) => generatePath(switchRoutes.order, { nro }),
};

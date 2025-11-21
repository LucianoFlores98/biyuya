import type IData from "../entities/IData";

export interface IDashboardGateway {
  getData: () => Promise<IData[]>;
}

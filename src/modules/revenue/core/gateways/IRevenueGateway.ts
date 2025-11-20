import type { IEditRevenueParams, ISaveRevenueParams } from "../entities/IRevenue";
import type IRevenue from "../entities/IRevenue";


export interface IRevenueGateway {
  getRevenue: () => Promise<IRevenue[]>;
  editRevenue: (params: IEditRevenueParams) => Promise<IRevenue>;
  saveRevenue: (params: ISaveRevenueParams) => Promise<IRevenue>;
  deleteRevenue: (id: string) => Promise<IRevenue>;
}

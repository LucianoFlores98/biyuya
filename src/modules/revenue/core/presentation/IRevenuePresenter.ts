import type IRevenue from "../entities/IRevenue";

export interface IRevenuePresenter {
  getRevenue: () => Promise<void>;
  editRevenue: (body: Partial<IRevenue>, id: string) => Promise<void>;
  saveRevenue: (body: Partial<IRevenue>) => Promise<void>;
  deleteRevenue: (id: string) => Promise<void>;
}

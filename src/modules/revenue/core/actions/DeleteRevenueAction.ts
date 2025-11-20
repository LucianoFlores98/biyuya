import type IRevenue from "../entities/IRevenue";
import type { IRevenueGateway } from "../gateways/IRevenueGateway";

export interface IDeleteRevenueAction {
  execute: (id: string) => Promise<IRevenue>;
}

export const DeleteRevenueAction = (revenueGateway: IRevenueGateway): IDeleteRevenueAction => {
  return {
    async execute(id) {
      try {
        const result = await revenueGateway.deleteRevenue(id);
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

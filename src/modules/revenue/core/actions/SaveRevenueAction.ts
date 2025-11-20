import type IRevenue from "../entities/IRevenue";
import type { IRevenueGateway } from "../gateways/IRevenueGateway";

export interface ISaveRevenueAction {
  execute: (body: Partial<IRevenue>) => Promise<IRevenue>;
}

export const SaveRevenueAction = (revenueGateway: IRevenueGateway): ISaveRevenueAction => {
  return {
    async execute(body) {
      try {
        const result = await revenueGateway.saveRevenue({body});
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

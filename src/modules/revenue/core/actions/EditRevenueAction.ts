import type IRevenue from "../entities/IRevenue";
import type { IRevenueGateway } from "../gateways/IRevenueGateway";

export interface IEditRevenueAction {
  execute: (body: Partial<IRevenue>, id: string) => Promise<unknown>;
}

export const EditRevenueAction = (revenueGateway: IRevenueGateway): IEditRevenueAction => {
  return {
    async execute(body,id) {
      try {
        const result = await revenueGateway.editRevenue({body, id });
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

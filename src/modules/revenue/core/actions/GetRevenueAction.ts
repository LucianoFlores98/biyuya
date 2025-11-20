import type { IRevenueGateway } from "../gateways/IRevenueGateway";

export interface IGetRevenueAction {
  execute: () => Promise<unknown>;
}

export const GetRevenueAction = (
  revenueGateway: IRevenueGateway
): IGetRevenueAction => {
  return {
    async execute() {
      try {
        const result = await revenueGateway.getRevenue();
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

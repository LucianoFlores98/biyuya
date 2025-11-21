import type { IDashboardGateway } from "../gateways/IDashboardGateway";

export interface IGetDataAction {
  execute: () => Promise<unknown>;
}

export const GetDataAction = (
  dashboardGateway: IDashboardGateway
): IGetDataAction => {
  return {
    async execute() {
      try {
        const result = await dashboardGateway.getData();
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

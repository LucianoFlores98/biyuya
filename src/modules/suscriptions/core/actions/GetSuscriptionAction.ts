import type { ISuscriptionGateway } from "../gateways/ISuscriptionGateway";

export interface IGetSuscriptionAction {
  execute: () => Promise<unknown>;
}

export const GetSuscriptionAction = (
  suscriptionGateway: ISuscriptionGateway
): IGetSuscriptionAction => {
  return {
    async execute() {
      try {
        const result = await suscriptionGateway.getSuscription();
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

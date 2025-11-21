import type ISuscription from "../entities/ISuscription";
import type { ISuscriptionGateway } from "../gateways/ISuscriptionGateway";

export interface IDeleteSuscriptionAction {
  execute: (id: string) => Promise<ISuscription>;
}

export const DeleteSuscriptionAction = (suscriptionGateway: ISuscriptionGateway): IDeleteSuscriptionAction => {
  return {
    async execute(id) {
      try {
        const result = await suscriptionGateway.deleteSuscription(id);
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

import type ISuscription from "../entities/ISuscription";
import type { ISuscriptionGateway } from "../gateways/ISuscriptionGateway";

export interface IEditSuscriptionAction {
  execute: (body: Partial<ISuscription>, id: string) => Promise<unknown>;
}

export const EditSuscriptionAction = (suscriptionGateway: ISuscriptionGateway): IEditSuscriptionAction => {
  return {
    async execute(body,id) {
      try {
        const result = await suscriptionGateway.editSuscription({body, id });
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

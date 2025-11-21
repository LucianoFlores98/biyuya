import type ISuscription from "../entities/ISuscription";
import type { ISuscriptionGateway } from "../gateways/ISuscriptionGateway";

export interface ISaveSuscriptionAction {
  execute: (body: Partial<ISuscription>) => Promise<ISuscription>;
}

export const SaveSuscriptionAction = (suscriptionGateway: ISuscriptionGateway): ISaveSuscriptionAction => {
  return {
    async execute(body) {
      try {
        const result = await suscriptionGateway.saveSuscription({body});
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

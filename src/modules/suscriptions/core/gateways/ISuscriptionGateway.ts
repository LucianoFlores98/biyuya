import type { IEditSuscriptionParams, ISaveSuscriptionParams } from "../entities/ISuscription";
import type ISuscription from "../entities/ISuscription";


export interface ISuscriptionGateway {
  getSuscription: () => Promise<ISuscription[]>;
  editSuscription: (params: IEditSuscriptionParams) => Promise<ISuscription>;
  saveSuscription: (params: ISaveSuscriptionParams) => Promise<ISuscription>;
  deleteSuscription: (id: string) => Promise<ISuscription>;
}

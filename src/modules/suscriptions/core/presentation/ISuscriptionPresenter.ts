import type ISuscription from "../entities/ISuscription";

export interface ISuscriptionPresenter {
  getSuscription: () => Promise<void>;
  editSuscription: (body: Partial<ISuscription>, id: string) => Promise<void>;
  saveSuscription: (body: Partial<ISuscription>) => Promise<void>;
  deleteSuscription: (id: string) => Promise<void>;
}

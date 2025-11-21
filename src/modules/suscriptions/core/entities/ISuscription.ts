export default interface ISuscription {
  order: number;
  key: string;
  value: string;
  id: string;
}

export interface IEditSuscriptionParams {
  body: {
    key?: string;
    value?: string;
  };
  id: string;
}

export interface ISaveSuscriptionParams {
  body: {
    order?: number;
    key?: string;
    value?: string;
  };
}

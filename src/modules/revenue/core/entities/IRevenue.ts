export default interface IRevenue {
  order: number;
  key: string;
  value: string;
  id: string;
}

export interface IEditRevenueParams {
  body: {
    key?: string;
    value?: string;
  };
  id: string;
}

export interface ISaveRevenueParams {
  body: {
    order?: number;
    key?: string;
    value?: string;
  };
}

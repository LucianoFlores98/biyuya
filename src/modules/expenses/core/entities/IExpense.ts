export default interface IExpense {
  order: number;
  key: string;
  value: string;
  id: string;
}

export interface IEditExpenseParams {
  body: {
    key?: string;
    value?: string;
  };
  id: string;
}

export interface ISaveExpenseParams {
  body: {
    order?: number;
    key?: string;
    value?: string;
  };
}

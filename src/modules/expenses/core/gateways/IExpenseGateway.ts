import type { IEditExpenseParams, ISaveExpenseParams } from "../entities/IExpense";
import type IExpense from "../entities/IExpense";


export interface IExpenseGateway {
  getExpense: () => Promise<IExpense[]>;
  editExpense: (params: IEditExpenseParams) => Promise<IExpense>;
  saveExpense: (params: ISaveExpenseParams) => Promise<IExpense>;
  deleteExpense: (id: string) => Promise<IExpense>;
}

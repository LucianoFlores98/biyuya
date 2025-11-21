import type IExpense from "../entities/IExpense";

export interface IExpensePresenter {
  getExpense: () => Promise<void>;
  editExpense: (body: Partial<IExpense>, id: string) => Promise<void>;
  saveExpense: (body: Partial<IExpense>) => Promise<void>;
  deleteExpense: (id: string) => Promise<void>;
}

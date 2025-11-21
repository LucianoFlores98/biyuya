import type IExpense from "../entities/IExpense";

export interface IExpenseScreens {
  onGetExpenseSuccess: (value: IExpense[]) => void;
  onGetExpenseError: (error: string) => void;

  onEditExpenseSuccess: (value: IExpense) => void;
  onEditExpenseError: (error: string) => void;

  onSaveExpenseSuccess: (value: IExpense) => void;
  onSaveExpenseError: (error: string) => void;

  onDeleteExpenseSuccess: (value: IExpense) => void;
  onDeleteExpenseError: (error: string) => void;
}

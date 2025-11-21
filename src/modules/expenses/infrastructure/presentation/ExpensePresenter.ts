import type { IDeleteExpenseAction } from "../../core/actions/DeleteExpenseAction";
import type { IEditExpenseAction } from "../../core/actions/EditExpenseAction";
import type { IGetExpenseAction } from "../../core/actions/GetExpenseAction";
import type { ISaveExpenseAction } from "../../core/actions/SaveExpenseAction";
import type { IExpensePresenter } from "../../core/presentation/IExpensePresenter";
import type { IExpenseScreens } from "../../core/screens/IExpenseScreens";

export const ExpensePresenter = (
  getExpense: IGetExpenseAction,
  editExpense: IEditExpenseAction,
  saveExpense: ISaveExpenseAction,
  deleteExpense: IDeleteExpenseAction,
  expenseScreen: IExpenseScreens
): IExpensePresenter => {
  return {
    async getExpense() {
      try {
        const res = await getExpense.execute();
        expenseScreen.onGetExpenseSuccess(res);
      } catch (error) {
        expenseScreen.onGetExpenseError(error);
      }
    },

    async editExpense(body: object, id: string) {
      try {
        const res = await editExpense.execute(body, id);
        expenseScreen.onEditExpenseSuccess(res);
      } catch (error) {
        expenseScreen.onEditExpenseError(error);
      }
    },

    async saveExpense(body: object) {
      try {
        const res = await saveExpense.execute(body);
        expenseScreen.onSaveExpenseSuccess(res);
      } catch (error) {
        expenseScreen.onSaveExpenseError(error);
      }
    },

    async deleteExpense(id: string) {
      try {
        const res = await deleteExpense.execute(id);
        expenseScreen.onDeleteExpenseSuccess(res);
      } catch (error) {
        expenseScreen.onDeleteExpenseError(error);
      }
    },
  };
};

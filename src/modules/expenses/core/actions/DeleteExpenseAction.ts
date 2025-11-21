import type IExpense from "../entities/IExpense";
import type { IExpenseGateway } from "../gateways/IExpenseGateway";

export interface IDeleteExpenseAction {
  execute: (id: string) => Promise<IExpense>;
}

export const DeleteExpenseAction = (expenseGateway: IExpenseGateway): IDeleteExpenseAction => {
  return {
    async execute(id) {
      try {
        const result = await expenseGateway.deleteExpense(id);
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

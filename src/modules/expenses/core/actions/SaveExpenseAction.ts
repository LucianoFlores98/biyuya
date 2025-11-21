import type IExpense from "../entities/IExpense";
import type { IExpenseGateway } from "../gateways/IExpenseGateway";

export interface ISaveExpenseAction {
  execute: (body: Partial<IExpense>) => Promise<IExpense>;
}

export const SaveExpenseAction = (expenseGateway: IExpenseGateway): ISaveExpenseAction => {
  return {
    async execute(body) {
      try {
        const result = await expenseGateway.saveExpense({body});
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

import type IExpense from "../entities/IExpense";
import type { IExpenseGateway } from "../gateways/IExpenseGateway";

export interface IEditExpenseAction {
  execute: (body: Partial<IExpense>, id: string) => Promise<unknown>;
}

export const EditExpenseAction = (expenseGateway: IExpenseGateway): IEditExpenseAction => {
  return {
    async execute(body,id) {
      try {
        const result = await expenseGateway.editExpense({body, id });
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

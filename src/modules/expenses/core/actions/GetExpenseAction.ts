import type { IExpenseGateway } from "../gateways/IExpenseGateway";

export interface IGetExpenseAction {
  execute: () => Promise<unknown>;
}

export const GetExpenseAction = (
  expenseGateway: IExpenseGateway
): IGetExpenseAction => {
  return {
    async execute() {
      try {
        const result = await expenseGateway.getExpense();
        return Promise.resolve(result);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  };
};

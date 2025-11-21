import { DependencyManager } from "../../dependencyManager";
import type { IHttpClient } from "../httpClient/interfaces";
import { DeleteExpenseAction } from "./core/actions/DeleteExpenseAction";
import { EditExpenseAction } from "./core/actions/EditExpenseAction";
import { GetExpenseAction } from "./core/actions/GetExpenseAction";
import { SaveExpenseAction } from "./core/actions/SaveExpenseAction";
import { ExpenseGateway } from "./infrastructure/gateways/ExpenseGateway";

export const expenseModuleInitialize = (
  dependencyManager: DependencyManager
) => {
  const expenseGateway = ExpenseGateway(
    GetHttpClientDependency(dependencyManager)
  );
  const getExpenseAction = GetExpenseAction(expenseGateway);
  const editExpenseAction = EditExpenseAction(expenseGateway);
  const saveExpenseAction = SaveExpenseAction(expenseGateway);
  const deleteExpenseAction = DeleteExpenseAction(expenseGateway);

  dependencyManager.register("getExpenseAction", getExpenseAction);
  dependencyManager.register("editExpenseAction", editExpenseAction);
  dependencyManager.register("saveExpenseAction", saveExpenseAction);
  dependencyManager.register("deleteExpenseAction", deleteExpenseAction);

};

export const GetHttpClientDependency = (dependencyManager: DependencyManager) =>
  dependencyManager.resolve("httpClient") as IHttpClient;

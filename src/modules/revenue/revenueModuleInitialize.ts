import { DependencyManager } from "../../dependencyManager";
import type { IHttpClient } from "../httpClient/interfaces";
import { DeleteRevenueAction } from "./core/actions/DeleteRevenueAction";
import { EditRevenueAction } from "./core/actions/EditRevenueAction";
import { GetRevenueAction } from "./core/actions/GetRevenueAction";
import { SaveRevenueAction } from "./core/actions/SaveRevenueAction";
import { RevenueGateway } from "./infrastructure/gateways/RevenueGateway";

export const revenueModuleInitialize = (
  dependencyManager: DependencyManager
) => {
  const revenueGateway = RevenueGateway(
    GetHttpClientDependency(dependencyManager)
  );
  const getRevenueAction = GetRevenueAction(revenueGateway);
  const editRevenueAction = EditRevenueAction(revenueGateway);
  const saveRevenueAction = SaveRevenueAction(revenueGateway);
  const deleteRevenueAction = DeleteRevenueAction(revenueGateway);

  dependencyManager.register("getRevenueAction", getRevenueAction);
  dependencyManager.register("editRevenueAction", editRevenueAction);
  dependencyManager.register("saveRevenueAction", saveRevenueAction);
  dependencyManager.register("deleteRevenueAction", deleteRevenueAction);

};

export const GetHttpClientDependency = (dependencyManager: DependencyManager) =>
  dependencyManager.resolve("httpClient") as IHttpClient;

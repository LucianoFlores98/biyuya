import { DependencyManager } from "../../dependencyManager";
import type { IHttpClient } from "../httpClient/interfaces";
import { GetDataAction } from "./core/actions/GetDataAction";
import { DashboardGateway } from "./infrastructure/gateways/DashboardGateway";

export const dashboardModuleInitialize = (
  dependencyManager: DependencyManager
) => {
  const dashboardGateway = DashboardGateway(
    GetHttpClientDependency(dependencyManager)
  );
  const getDataAction = GetDataAction(dashboardGateway);
  dependencyManager.register("getDataAction", getDataAction);

};

export const GetHttpClientDependency = (dependencyManager: DependencyManager) =>
  dependencyManager.resolve("httpClient") as IHttpClient;

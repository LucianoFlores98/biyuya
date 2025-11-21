import { DependencyManager } from "../../dependencyManager";
import type { IHttpClient } from "../httpClient/interfaces";
import { DeleteSuscriptionAction } from "./core/actions/DeleteSuscriptionAction";
import { EditSuscriptionAction } from "./core/actions/EditSuscriptionAction";
import { GetSuscriptionAction } from "./core/actions/GetSuscriptionAction";
import { SaveSuscriptionAction } from "./core/actions/SaveSuscriptionAction";
import { SuscriptionGateway } from "./infrastructure/gateways/SuscriptionGateway";

export const suscriptionModuleInitialize = (
  dependencyManager: DependencyManager
) => {
  const suscriptionGateway = SuscriptionGateway(
    GetHttpClientDependency(dependencyManager)
  );
  const getSuscriptionAction = GetSuscriptionAction(suscriptionGateway);
  const editSuscriptionAction = EditSuscriptionAction(suscriptionGateway);
  const saveSuscriptionAction = SaveSuscriptionAction(suscriptionGateway);
  const deleteSuscriptionAction = DeleteSuscriptionAction(suscriptionGateway);

  dependencyManager.register("getSuscriptionAction", getSuscriptionAction);
  dependencyManager.register("editSuscriptionAction", editSuscriptionAction);
  dependencyManager.register("saveSuscriptionAction", saveSuscriptionAction);
  dependencyManager.register("deleteSuscriptionAction", deleteSuscriptionAction);

};

export const GetHttpClientDependency = (dependencyManager: DependencyManager) =>
  dependencyManager.resolve("httpClient") as IHttpClient;

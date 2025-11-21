import { apis } from "../../../../constants/api";
import type { HttpResponse, IHttpClient } from "../../../httpClient/interfaces";
import type IData from "../../core/entities/IData";
import type { IDashboardGateway } from "../../core/gateways/IDashboardGateway";

export const DashboardGateway = (httpClient: IHttpClient): IDashboardGateway => {
  return {
    async getData() {
      try {
        const response = await httpClient.get(apis.modules.suscription);
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseData(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    }
  };
};

const responseData = (response: HttpResponse): IData => {
  const { data } = response;
  return {
    id: data.id,
    key: data.key,
    value: data.value,
    order: data.order,
  };
};

const responseError = (error: HttpResponse): string => {

  if (!error.error) {
    return "undefined";
  }

  return error.error?.message;
};
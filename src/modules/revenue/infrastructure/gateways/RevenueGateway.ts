import { apis } from "../../../../constants/api";
import type { HttpResponse, IHttpClient } from "../../../httpClient/interfaces";
import type IRevenue from "../../core/entities/IRevenue";
import type { IRevenueGateway } from "../../core/gateways/IRevenueGateway";

export const RevenueGateway = (httpClient: IHttpClient): IRevenueGateway => {
  return {
    async getRevenue() {
      try {
        const response = await httpClient.get(apis.modules.revenue);
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(mapResponseToGetRevenue(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async editRevenue(params) {
      try {
        const { body, id } = params;
        const response = await httpClient.patch(
          `${apis.modules.revenue}/${id}`,
          body
        );
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseRevenue(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async saveRevenue(params) {
      try {
        const { body } = params;

        const response = await httpClient.post(
          apis.modules.revenue,
          body
        );

        if (!response.status) {
          return Promise.reject(response.error);
        }

        return Promise.resolve(responseRevenue(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async deleteRevenue(id) {
      try {
        const response = await httpClient.delete(
          `${apis.modules.revenue}/${id}`
        );
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseRevenue(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
  };
};

const responseRevenue = (response: HttpResponse): IRevenue => {
  const { data } = response;
  return {
    id: data.id,
    key: data.key,
    value: data.value,
    order: data.order,
  };
};

const mapResponseToGetRevenue = (
  response: HttpResponse
): IRevenue[] => {
  return response.data.map((registerRes) => ({
    id: registerRes.id,
    value: registerRes.value,
    key: registerRes.key,
    order: registerRes.order,
  }));
};

const responseError = (error: HttpResponse): string => {

  if (!error.error) {
    return "undefined";
  }

  return error.error?.message;
};
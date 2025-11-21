import { apis } from "../../../../constants/api";
import type { HttpResponse, IHttpClient } from "../../../httpClient/interfaces";
import type ISuscription from "../../core/entities/ISuscription";
import type { ISuscriptionGateway } from "../../core/gateways/ISuscriptionGateway";

export const SuscriptionGateway = (httpClient: IHttpClient): ISuscriptionGateway => {
  return {
    async getSuscription() {
      try {
        const response = await httpClient.get(apis.modules.suscription);
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(mapResponseToGetSuscription(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async editSuscription(params) {
      try {
        const { body, id } = params;
        const response = await httpClient.patch(
          `${apis.modules.suscription}/${id}`,
          body
        );
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseSuscription(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async saveSuscription(params) {
      try {
        const { body } = params;

        const response = await httpClient.post(
          apis.modules.suscription,
          body
        );

        if (!response.status) {
          return Promise.reject(response.error);
        }

        return Promise.resolve(responseSuscription(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async deleteSuscription(id) {
      try {
        const response = await httpClient.delete(
          `${apis.modules.suscription}/${id}`
        );
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseSuscription(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
  };
};

const responseSuscription = (response: HttpResponse): ISuscription => {
  const { data } = response;
  return {
    id: data.id,
    key: data.key,
    value: data.value,
    order: data.order,
  };
};

const mapResponseToGetSuscription = (
  response: HttpResponse
): ISuscription[] => {
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
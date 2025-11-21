import { apis } from "../../../../constants/api";
import type { HttpResponse, IHttpClient } from "../../../httpClient/interfaces";
import type IExpense from "../../core/entities/IExpense";
import type { IExpenseGateway } from "../../core/gateways/IExpenseGateway";

export const ExpenseGateway = (httpClient: IHttpClient): IExpenseGateway => {
  return {
    async getExpense() {
      try {
        const response = await httpClient.get(apis.modules.expense);
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(mapResponseToGetExpense(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async editExpense(params) {
      try {
        const { body, id } = params;
        const response = await httpClient.patch(
          `${apis.modules.expense}/${id}`,
          body
        );
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseExpense(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async saveExpense(params) {
      try {
        const { body } = params;

        const response = await httpClient.post(
          apis.modules.expense,
          body
        );

        if (!response.status) {
          return Promise.reject(response.error);
        }

        return Promise.resolve(responseExpense(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
    async deleteExpense(id) {
      try {
        const response = await httpClient.delete(
          `${apis.modules.expense}/${id}`
        );
        if (!response.status) {
          return Promise.reject(response.error);
        }
        return Promise.resolve(responseExpense(response));
      } catch (error) {
        return Promise.reject(responseError(error));
      }
    },
  };
};

const responseExpense = (response: HttpResponse): IExpense => {
  const { data } = response;
  return {
    id: data.id,
    key: data.key,
    value: data.value,
    order: data.order,
  };
};

const mapResponseToGetExpense = (
  response: HttpResponse
): IExpense[] => {
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
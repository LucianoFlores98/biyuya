import type { IDeleteRevenueAction } from "../../core/actions/DeleteRevenueAction";
import type { IEditRevenueAction } from "../../core/actions/EditRevenueAction";
import type { IGetRevenueAction } from "../../core/actions/GetRevenueAction";
import type { ISaveRevenueAction } from "../../core/actions/SaveRevenueAction";
import type { IRevenuePresenter } from "../../core/presentation/IRevenuePresenter";
import type { IRevenueScreens } from "../../core/screens/IRevenueScreens";

export const RevenuePresenter = (
  getRevenue: IGetRevenueAction,
  editRevenue: IEditRevenueAction,
  saveRevenue: ISaveRevenueAction,
  deleteRevenue: IDeleteRevenueAction,
  revenueScreen: IRevenueScreens
): IRevenuePresenter => {
  return {
    async getRevenue() {
      try {
        const res = await getRevenue.execute();
        revenueScreen.onGetRevenueSuccess(res);
      } catch (error) {
        revenueScreen.onGetRevenueError(error);
      }
    },

    async editRevenue(body: object, id: string) {
      try {
        const res = await editRevenue.execute(body, id);
        revenueScreen.onEditRevenueSuccess(res);
      } catch (error) {
        revenueScreen.onEditRevenueError(error);
      }
    },

    async saveRevenue(body: object) {
      try {
        const res = await saveRevenue.execute(body);
        revenueScreen.onSaveRevenueSuccess(res);
      } catch (error) {
        revenueScreen.onSaveRevenueError(error);
      }
    },

    async deleteRevenue(id: string) {
      try {
        const res = await deleteRevenue.execute(id);
        revenueScreen.onDeleteRevenueSuccess(res);
      } catch (error) {
        revenueScreen.onDeleteRevenueError(error);
      }
    },
  };
};

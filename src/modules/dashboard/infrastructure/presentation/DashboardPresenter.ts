import type { IGetDataAction } from "../../core/actions/GetDataAction";
import type { IDashboardPresenter } from "../../core/presentation/IDashboardPresenter";
import type { IDashboardScreens } from "../../core/screens/IDashboardScreens";

export const DashboardPresenter = (
  getData: IGetDataAction,
  dashboardScreen: IDashboardScreens
): IDashboardPresenter => {
  return {
    async getData() {
      try {
        const res = await getData.execute();
        dashboardScreen.onGetDataSuccess(res);
      } catch (error) {
        dashboardScreen.onGetDataError(error);
      }
    }
  };
};

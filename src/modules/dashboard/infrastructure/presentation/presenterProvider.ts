/* eslint-disable react-hooks/rules-of-hooks */

import { useDependency } from "../../../../hooks/useDependency";
import type { IPresenterProvider } from "../../../../utils/iPresenterProvider";
import type { IGetDataAction } from "../../core/actions/GetDataAction";
import type { IDashboardPresenter } from "../../core/presentation/IDashboardPresenter";
import type { IDashboardScreens } from "../../core/screens/IDashboardScreens";
import { DashboardPresenter } from "./DashboardPresenter";

export const dashboardPresenterProvider = (): IPresenterProvider<
  IDashboardScreens,
  IDashboardPresenter
> => {
  const getDataAction = useDependency("getDataAction") as IGetDataAction;

  return {
    getPresenter(viewHandlers) {
      const presenter = DashboardPresenter(
        getDataAction,
        viewHandlers
      );
      return presenter;
    },
  };
};

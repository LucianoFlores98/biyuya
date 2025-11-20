/* eslint-disable react-hooks/rules-of-hooks */

import { useDependency } from "../../../../hooks/useDependency";
import type { IPresenterProvider } from "../../../../utils/iPresenterProvider";
import type { IDeleteRevenueAction } from "../../core/actions/DeleteRevenueAction";
import type { IEditRevenueAction } from "../../core/actions/EditRevenueAction";
import type { IGetRevenueAction } from "../../core/actions/GetRevenueAction";
import type { ISaveRevenueAction } from "../../core/actions/SaveRevenueAction";
import type { IRevenuePresenter } from "../../core/presentation/IRevenuePresenter";
import type { IRevenueScreens } from "../../core/screens/IRevenueScreens";
import { RevenuePresenter } from "./RevenuePresenter";


export const revenuePresenterProvider = (): IPresenterProvider<
  IRevenueScreens,
  IRevenuePresenter
> => {
  const getRevenueAction = useDependency("getRevenueAction") as IGetRevenueAction;
  const editRevenueAction = useDependency("editRevenueAction") as IEditRevenueAction;
  const saveRevenueAction = useDependency("saveRevenueAction") as ISaveRevenueAction;
  const deleteRevenueAction = useDependency(
    "deleteRevenueAction"
  ) as IDeleteRevenueAction;

  return {
    getPresenter(viewHandlers) {
      const presenter = RevenuePresenter(
        getRevenueAction,
        editRevenueAction,
        saveRevenueAction,
        deleteRevenueAction,
        viewHandlers
      );
      return presenter;
    },
  };
};

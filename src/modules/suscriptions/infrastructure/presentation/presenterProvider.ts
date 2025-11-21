/* eslint-disable react-hooks/rules-of-hooks */

import { useDependency } from "../../../../hooks/useDependency";
import type { IPresenterProvider } from "../../../../utils/iPresenterProvider";
import type { IDeleteSuscriptionAction } from "../../core/actions/DeleteSuscriptionAction";
import type { IEditSuscriptionAction } from "../../core/actions/EditSuscriptionAction";
import type { IGetSuscriptionAction } from "../../core/actions/GetSuscriptionAction";
import type { ISaveSuscriptionAction } from "../../core/actions/SaveSuscriptionAction";
import type { ISuscriptionPresenter } from "../../core/presentation/ISuscriptionPresenter";
import type { ISuscriptionScreens } from "../../core/screens/ISuscriptionScreens";
import { SuscriptionPresenter } from "./SuscriptionPresenter";


export const suscriptionPresenterProvider = (): IPresenterProvider<
  ISuscriptionScreens,
  ISuscriptionPresenter
> => {
  const getSuscriptionAction = useDependency("getSuscriptionAction") as IGetSuscriptionAction;
  const editSuscriptionAction = useDependency("editSuscriptionAction") as IEditSuscriptionAction;
  const saveSuscriptionAction = useDependency("saveSuscriptionAction") as ISaveSuscriptionAction;
  const deleteSuscriptionAction = useDependency(
    "deleteSuscriptionAction"
  ) as IDeleteSuscriptionAction;

  return {
    getPresenter(viewHandlers) {
      const presenter = SuscriptionPresenter(
        getSuscriptionAction,
        editSuscriptionAction,
        saveSuscriptionAction,
        deleteSuscriptionAction,
        viewHandlers
      );
      return presenter;
    },
  };
};

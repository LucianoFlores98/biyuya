/* eslint-disable react-hooks/rules-of-hooks */

import { useDependency } from "../../../../hooks/useDependency";
import type { IPresenterProvider } from "../../../../utils/iPresenterProvider";
import type { IDeleteExpenseAction } from "../../core/actions/DeleteExpenseAction";
import type { IEditExpenseAction } from "../../core/actions/EditExpenseAction";
import type { IGetExpenseAction } from "../../core/actions/GetExpenseAction";
import type { ISaveExpenseAction } from "../../core/actions/SaveExpenseAction";
import type { IExpensePresenter } from "../../core/presentation/IExpensePresenter";
import type { IExpenseScreens } from "../../core/screens/IExpenseScreens";
import { ExpensePresenter } from "./ExpensePresenter";


export const expensePresenterProvider = (): IPresenterProvider<
  IExpenseScreens,
  IExpensePresenter
> => {
  const getExpenseAction = useDependency("getExpenseAction") as IGetExpenseAction;
  const editExpenseAction = useDependency("editExpenseAction") as IEditExpenseAction;
  const saveExpenseAction = useDependency("saveExpenseAction") as ISaveExpenseAction;
  const deleteExpenseAction = useDependency(
    "deleteExpenseAction"
  ) as IDeleteExpenseAction;

  return {
    getPresenter(viewHandlers) {
      const presenter = ExpensePresenter(
        getExpenseAction,
        editExpenseAction,
        saveExpenseAction,
        deleteExpenseAction,
        viewHandlers
      );
      return presenter;
    },
  };
};

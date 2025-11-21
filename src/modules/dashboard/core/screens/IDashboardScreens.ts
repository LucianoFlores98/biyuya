import type IData from "../entities/IData";

export interface IDashboardScreens {
  onGetDataSuccess: (value: IData[]) => void;
  onGetDataError: (error: string) => void;
}

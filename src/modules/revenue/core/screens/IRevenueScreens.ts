import type IRevenue from "../entities/IRevenue";

export interface IRevenueScreens {
  onGetRevenueSuccess: (value: IRevenue[]) => void;
  onGetRevenueError: (error: string) => void;

  onEditRevenueSuccess: (value: IRevenue) => void;
  onEditRevenueError: (error: string) => void;

  onSaveRevenueSuccess: (value: IRevenue) => void;
  onSaveRevenueError: (error: string) => void;

  onDeleteRevenueSuccess: (value: IRevenue) => void;
  onDeleteRevenueError: (error: string) => void;
}

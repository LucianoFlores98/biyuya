import { useEffect, useRef, useState } from "react";
import type { IRevenuePresenter } from "../core/presentation/IRevenuePresenter";
import { revenuePresenterProvider } from "../infrastructure/presentation/presenterProvider";
import type { IRevenueScreens } from "../core/screens/IRevenueScreens";
import type IRevenue from "../core/entities/IRevenue";

/* eslint-disable @typescript-eslint/no-explicit-any */
const RevenueScreen = () => {
  const presenterProvider = revenuePresenterProvider();

  const [revenue, setRevenue] = useState<IRevenue[]>([]);
  const [loaded] = useState(true); // Initialize to true since effect runs on mount
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);
  const presenterRef = useRef<IRevenuePresenter | null>(null);

  const revenueTitleTab = "Ingresos";

  const viewHandlers: IRevenueScreens = {
    onGetRevenueSuccess(data): void {
      setRevenue(data);
      setIsContentLoading(false);
    },
    onGetRevenueError(error): void {
    },
    onEditRevenueSuccess(): void {
    },
    onEditRevenueError(): void {
    },
    onSaveRevenueSuccess(): void {
    },
    onSaveRevenueError(): void {
    },
    onDeleteRevenueSuccess(): void {
    },
    onDeleteRevenueError(): void {

    },
  };
  
  //Con este useEffect cargamos nuestro presenter, el que se encargará de traer todas nuestras funciones que construimos
  useEffect(() => {
    document.title = revenueTitleTab;
    const presenterInstance = presenterProvider.getPresenter(viewHandlers);
    presenterRef.current = presenterInstance;
        
    // Call getRevenue - this is an async operation that will call viewHandlers
    // which will update state, but that's fine as it's in a callback
    presenterInstance.getRevenue();
  }, []);

  return (
    <div>
      {loaded && <h1>HOLA DESDE MODULO INGRESOS</h1>}
    </div>
  );
};

export default RevenueScreen;

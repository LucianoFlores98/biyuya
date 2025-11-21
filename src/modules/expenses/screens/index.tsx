import { useEffect, useRef, useState } from "react";
import type { IExpensePresenter } from "../core/presentation/IExpensePresenter";
import { expensePresenterProvider } from "../infrastructure/presentation/presenterProvider";
import type { IExpenseScreens } from "../core/screens/IExpenseScreens";
import type IExpense from "../core/entities/IExpense";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ExpenseScreen = () => {
  const presenterProvider = expensePresenterProvider();

  const [expense, setExpense] = useState<IExpense[]>([]);
  const [loaded] = useState(true); // Initialize to true since effect runs on mount
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);
  const presenterRef = useRef<IExpensePresenter | null>(null);

  const expenseTitleTab = "Ingresos";

  const viewHandlers: IExpenseScreens = {
    onGetExpenseSuccess(data): void {
      setExpense(data);
      setIsContentLoading(false);
    },
    onGetExpenseError(error): void {
    },
    onEditExpenseSuccess(): void {
    },
    onEditExpenseError(): void {
    },
    onSaveExpenseSuccess(): void {
    },
    onSaveExpenseError(): void {
    },
    onDeleteExpenseSuccess(): void {
    },
    onDeleteExpenseError(): void {

    },
  };
  
  //Con este useEffect cargamos nuestro presenter, el que se encargará de traer todas nuestras funciones que construimos
  useEffect(() => {
    document.title = expenseTitleTab;
    const presenterInstance = presenterProvider.getPresenter(viewHandlers);
    presenterRef.current = presenterInstance;
        
    // Call getExpense - this is an async operation that will call viewHandlers
    // which will update state, but that's fine as it's in a callback
    presenterInstance.getExpense();
  }, []);

  return (
    <div>
      {loaded && <h1>HOLA DESDE MODULO GASTOS</h1>}
    </div>
  );
};

export default ExpenseScreen;

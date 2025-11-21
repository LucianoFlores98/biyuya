import { useEffect, useRef, useState } from "react";
import type IData from "../core/entities/IData";
import { dashboardPresenterProvider } from "../infrastructure/presentation/presenterProvider";
import type { IDashboardPresenter } from "../core/presentation/IDashboardPresenter";
import type { IDashboardScreens } from "../core/screens/IDashboardScreens";
import { ExpensesChart } from "./components/ExpensesChart";
import { SpendingChart } from "./components/SpendingChart";
import { TransactionsTable } from "../../../components/TransactionsTable";
import { mockBudgets, mockExpensesOverTime, mockFinancialStats, mockTransactions } from "../../../mocks/data/mockData";
import { StatCard } from "./components/StatCard";
import { ChevronDown } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const DashboardScreen = () => {
  const presenterProvider = dashboardPresenterProvider();

  const [data, setData] = useState<IData[]>([]);
  const [loaded] = useState(true); // Initialize to true since effect runs on mount
  const [isContentLoading, setIsContentLoading] = useState<boolean>(false);
  const presenterRef = useRef<IDashboardPresenter | null>(null);

  const dashboardTitleTab = "Dashboard";

  const viewHandlers: IDashboardScreens = {
    onGetDataSuccess(data): void {
      setData(data);
      setIsContentLoading(false);
    },
    onGetDataError(error): void {
    }
  };
  
  //Con este useEffect cargamos nuestro presenter, el que se encargará de traer todas nuestras funciones que construimos
  useEffect(() => {
    document.title = dashboardTitleTab;
    const presenterInstance = presenterProvider.getPresenter(viewHandlers);
    presenterRef.current = presenterInstance;
        
    // Call getSuscription - this is an async operation that will call viewHandlers
    // which will update state, but that's fine as it's in a callback
    presenterInstance.getData();
  }, []);

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="p-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-700">Last 30 days</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div>
        <p className="text-emerald-600 mb-8">
          Here's a quick overview of your financial health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Monthly Spending"
            amount={`$${mockFinancialStats.totalMonthlySpending.toLocaleString()}`}
            change={mockFinancialStats.monthlySpendingChange}
          />
          <StatCard
            title="Remaining Budget"
            amount={`$${mockFinancialStats.remainingBudget.toLocaleString()}`}
            change={mockFinancialStats.remainingBudgetChange}
          />
          <StatCard
            title="Total Income"
            amount={`$${mockFinancialStats.totalIncome.toLocaleString()}`}
            change={mockFinancialStats.totalIncomeChange}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SpendingChart budgets={mockBudgets} />
          <ExpensesChart data={mockExpensesOverTime} />
        </div>

        <TransactionsTable transactions={mockTransactions} />
      </div>
    </div>
  );
};

export default DashboardScreen;

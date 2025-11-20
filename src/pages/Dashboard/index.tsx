import { ChevronDown } from 'lucide-react';
import { StatCard } from '../../components/Dashboard/StatCard';
import { SpendingChart } from '../../components/Dashboard/SpendingChart';
import { ExpensesChart } from '../../components/Dashboard/ExpensesChart';
import { TransactionsTable } from '../../components/Dashboard/TransactionsTable';
import {
  mockFinancialStats,
  mockBudgets,
  mockTransactions,
  mockExpensesOverTime,
} from '../../infrastructure/data/mockData';

const Dashboard = () => {
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

export default Dashboard;


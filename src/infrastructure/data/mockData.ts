import type { Transaction } from '../../domain/entities/Transaction';
import type { Budget } from '../../domain/entities/Budget';
import type { FinancialStats } from '../../domain/entities/FinancialStats';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: 'Oct 26, 2023',
    merchant: 'Starbucks',
    category: 'Food & Drink',
    amount: -5.75,
  },
  {
    id: '2',
    date: 'Oct 25, 2023',
    merchant: 'Amazon',
    category: 'Shopping',
    amount: -42.5,
  },
  {
    id: '3',
    date: 'Oct 24, 2023',
    merchant: 'Netflix',
    category: 'Entertainment',
    amount: -15.49,
  },
  {
    id: '4',
    date: 'Oct 23, 2023',
    merchant: 'Shell',
    category: 'Transport',
    amount: -55.2,
  },
];

export const mockBudgets: Budget[] = [
  { id: '1', category: 'Groceries', amount: 600, spent: 500.3, color: '#10b981' },
  { id: '2', category: 'Utilities', amount: 400, spent: 312.5, color: '#3b82f6' },
  { id: '3', category: 'Transport', amount: 300, spent: 250, color: '#a855f7' },
  { id: '4', category: 'Entertainment', amount: 200, spent: 187.95, color: '#f97316' },
];

export const mockFinancialStats: FinancialStats = {
  totalMonthlySpending: 1250.75,
  monthlySpendingChange: 5.2,
  remainingBudget: 749.25,
  remainingBudgetChange: -10.1,
  totalIncome: 3500,
  totalIncomeChange: 2,
};

export const mockExpensesOverTime = [
  { month: 'Jan', amount: 3200 },
  { month: 'Feb', amount: 4100 },
  { month: 'Mar', amount: 3800 },
  { month: 'Apr', amount: 4500 },
  { month: 'May', amount: 5200 },
  { month: 'Jun', amount: 4890 },
];


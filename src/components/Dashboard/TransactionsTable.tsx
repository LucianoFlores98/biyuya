import { Transaction } from '../../../domain/entities/Transaction';

interface TransactionsTableProps {
  transactions: Transaction[];
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Food & Drink': 'bg-blue-100 text-blue-700',
    'Shopping': 'bg-yellow-100 text-yellow-700',
    'Entertainment': 'bg-red-100 text-red-700',
    'Transport': 'bg-purple-100 text-purple-700',
  };
  return colors[category] || 'bg-gray-100 text-gray-700';
};

export const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-emerald-700">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-emerald-700">Merchant</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-emerald-700">Category</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-emerald-700">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-gray-100">
                <td className="py-4 px-4 text-sm text-gray-700">{transaction.date}</td>
                <td className="py-4 px-4 text-sm text-gray-900">{transaction.merchant}</td>
                <td className="py-4 px-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(transaction.category)}`}>
                    {transaction.category}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm font-semibold text-gray-900 text-right">
                  ${Math.abs(transaction.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

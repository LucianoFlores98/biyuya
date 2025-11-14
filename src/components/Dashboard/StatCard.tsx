interface StatCardProps {
  title: string;
  amount: string;
  change: number;
}

export const StatCard = ({ title, amount, change }: StatCardProps) => {
  const isPositive = change >= 0;
  const changeColor = title === 'Remaining Budget'
    ? (isPositive ? 'text-emerald-600' : 'text-red-600')
    : (isPositive ? 'text-emerald-600' : 'text-red-600');

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-gray-900">{amount}</p>
        <span className={`text-sm font-semibold ${changeColor}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  );
};

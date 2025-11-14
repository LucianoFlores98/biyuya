import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';

interface ExpensesChartProps {
  data: Array<{ month: string; amount: number }>;
}

export const ExpensesChart = ({ data }: ExpensesChartProps) => {
  const lastAmount = data[data.length - 1]?.amount || 0;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Expenses Over Time</h3>
      <div className="mb-4">
        <p className="text-3xl font-bold text-gray-900">
          ${lastAmount.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">
          Last 6 Months <span className="text-red-600 font-semibold">-3.2%</span>
        </p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#10b981', fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

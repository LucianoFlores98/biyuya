import { Budget } from '../../../domain/entities/Budget';

interface SpendingChartProps {
  budgets: Budget[];
}

export const SpendingChart = ({ budgets }: SpendingChartProps) => {
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);

  let currentAngle = 0;
  const segments = budgets.map((budget) => {
    const percentage = (budget.spent / totalSpent) * 100;
    const angle = (percentage / 100) * 360;
    const segment = {
      ...budget,
      percentage,
      startAngle: currentAngle,
      angle,
    };
    currentAngle += angle;
    return segment;
  });

  const createArc = (startAngle: number, angle: number, color: string) => {
    const start = startAngle - 90;
    const end = start + angle;
    const startRad = (start * Math.PI) / 180;
    const endRad = (end * Math.PI) / 180;
    const x1 = 50 + 40 * Math.cos(startRad);
    const y1 = 50 + 40 * Math.sin(startRad);
    const x2 = 50 + 40 * Math.cos(endRad);
    const y2 = 50 + 40 * Math.sin(endRad);
    const largeArc = angle > 180 ? 1 : 0;

    return (
      <path
        d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
        fill={color}
      />
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Spending by Category</h3>

      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 100 100">
            {segments.map((segment) => (
              <g key={segment.id}>
                {createArc(segment.startAngle, segment.angle, segment.color)}
              </g>
            ))}
            <circle cx="50" cy="50" r="25" fill="white" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-xs text-gray-500">Total Spent</div>
            <div className="text-xl font-bold text-gray-900">
              ${totalSpent.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {budgets.map((budget) => (
          <div key={budget.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: budget.color }}
              ></div>
              <span className="text-sm text-gray-700">{budget.category}</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              ${budget.spent.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

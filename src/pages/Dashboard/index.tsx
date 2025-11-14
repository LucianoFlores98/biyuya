import { TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Ingresos Totales',
      value: '$12,450',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-emerald-500',
    },
    {
      title: 'Gastos del Mes',
      value: '$8,230',
      change: '-5.2%',
      trend: 'down',
      icon: CreditCard,
      color: 'bg-red-500',
    },
    {
      title: 'Balance',
      value: '$4,220',
      change: '+18.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-blue-500',
    },
    {
      title: 'Ahorro Mensual',
      value: '$2,100',
      change: '+8.1%',
      trend: 'up',
      icon: TrendingDown,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bienvenido de vuelta, aquí está tu resumen financiero</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <span
                className={`text-sm font-semibold flex items-center gap-1 ${
                  stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                }`}
              >
                {stat.trend === 'up' ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Transacciones Recientes</h2>
          <div className="space-y-4">
            {[
              { name: 'Compra en Supermercado', amount: '-$125.50', date: 'Hoy', type: 'expense' },
              { name: 'Salario', amount: '+$3,500.00', date: 'Ayer', type: 'income' },
              { name: 'Netflix', amount: '-$15.99', date: '2 días', type: 'expense' },
              { name: 'Freelance Project', amount: '+$800.00', date: '3 días', type: 'income' },
            ].map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'income'
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {transaction.type === 'income' ? (
                      <TrendingUp size={20} />
                    ) : (
                      <TrendingDown size={20} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <span
                  className={`font-bold ${
                    transaction.type === 'income' ? 'text-emerald-600' : 'text-red-600'
                  }`}
                >
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Acciones Rápidas</h2>
          <div className="space-y-3">
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Agregar Ingreso
            </button>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
              Agregar Gasto
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors">
              Ver Reportes
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors">
              Configuración
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


import { LayoutGrid, Box, CreditCard, DollarSign, Target } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { icon: LayoutGrid, label: 'Dashboard', to: '/' },
  { icon: Box, label: 'Servicios', to: '/servicios' },
  { icon: CreditCard, label: 'Gastos', to: '/gastos' },
  { icon: DollarSign, label: 'Ingresos', to: '/ingresos' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Target className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold text-gray-900">Biyuya</span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full"></div>
            <div>
              <div className="font-semibold text-gray-900">Hola Luciano!</div>
              <div className="text-sm text-emerald-600">Otra vez!</div>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6">
        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Add Expense
        </button>
      </div>
    </aside>
  );
};

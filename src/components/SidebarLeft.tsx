import React from 'react';
import { Home, Users, Trophy, Gamepad2, Star, Settings } from 'lucide-react';

export default function SidebarLeft() {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Users, label: 'Friends' },
    { icon: Trophy, label: 'Achievements' },
    { icon: Gamepad2, label: 'Games' },
    { icon: Star, label: 'Featured' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="hidden md:block w-64 space-y-6">
      <div className="bg-gray-800 rounded-lg p-4">
        <ul className="space-y-2">
          {menuItems.map(({ icon: Icon, label, active }) => (
            <li key={label}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
                  active
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
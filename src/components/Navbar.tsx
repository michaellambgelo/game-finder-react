import React from 'react';
import { Users, GamepadIcon, Bell, MessageSquare, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <GamepadIcon className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">GamersHub</span>
          </div>
          
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search games, players, or posts..."
                className="w-full bg-gray-700 text-gray-100 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-lg md:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
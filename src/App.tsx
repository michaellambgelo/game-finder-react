import React from 'react';
import { Users, GamepadIcon, Bell, MessageSquare, Search, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import FeedSection from './components/FeedSection';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <SidebarLeft />
        <FeedSection />
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
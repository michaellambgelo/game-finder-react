import React from 'react';
import { Users } from 'lucide-react';

export default function SidebarRight() {
  const onlineFriends = [
    {
      name: 'Elena Rodriguez',
      game: 'Playing Valorant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40',
      status: 'online'
    },
    {
      name: 'John Chen',
      game: 'In Main Menu',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40',
      status: 'online'
    },
    {
      name: 'Maria Silva',
      game: 'Playing Fortnite',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=40&h=40',
      status: 'online'
    }
  ];

  return (
    <aside className="hidden lg:block w-80">
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-purple-500" />
          <h2 className="font-semibold">Online Friends</h2>
        </div>
        <ul className="space-y-3">
          {onlineFriends.map(friend => (
            <li key={friend.name} className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <div>
                <h3 className="font-medium">{friend.name}</h3>
                <p className="text-sm text-gray-400">{friend.game}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
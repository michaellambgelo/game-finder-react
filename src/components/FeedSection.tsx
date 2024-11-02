import React from 'react';
import { Heart, MessageCircle, Share2, Trophy } from 'lucide-react';

export default function FeedSection() {
  const posts = [
    {
      id: 1,
      user: {
        name: 'Sarah Connor',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40',
        handle: '@sarahc'
      },
      game: 'Elden Ring',
      content: 'Just defeated Malenia after 50 attempts! 🎮✨ The satisfaction is real!',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&h=400',
      likes: 234,
      comments: 45,
    },
    {
      id: 2,
      user: {
        name: 'Alex Martinez',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=40&h=40',
        handle: '@alexm'
      },
      game: 'Cyberpunk 2077',
      content: 'Night City never sleeps! Check out this amazing screenshot from my latest mission.',
      image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&h=400',
      likes: 156,
      comments: 23,
    }
  ];

  return (
    <main className="flex-1 max-w-2xl">
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=40&h=40"
            alt="Your profile"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Share your gaming moments..."
            className="flex-1 bg-gray-700 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {posts.map(post => (
        <article key={post.id} className="bg-gray-800 rounded-lg mb-6">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.user.image}
                alt={post.user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{post.user.name}</h3>
                <p className="text-sm text-gray-400">{post.user.handle}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-400">Playing {post.game}</span>
              </div>
            </div>
            <p className="mb-4">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="rounded-lg w-full mb-4"
              />
            )}
            <div className="flex items-center gap-6 text-gray-400">
              <button className="flex items-center gap-2 hover:text-purple-500">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-purple-500">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-purple-500">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
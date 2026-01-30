import React from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between px-20 py-6 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold text-blue-gray-900 flex items-center gap-2">
          <span className="text-purple-600">Soller</span>
        </div>
        <nav className="hidden md:flex gap-10">
            {['Products', 'Solutions', 'Services', 'Help Center', 'Pricing'].map((item) => (
                <a key={item} href="#" className="text-base font-medium text-blue-gray-900 hover:text-purple-600 transition-colors">
                    {item}
                </a>
            ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-purple-600 font-medium">Log In</Button>
        <Button variant="outline" className="rounded-full px-6 border-purple-600 text-purple-600">Request a Quote</Button>
      </div>
    </header>
  );
};

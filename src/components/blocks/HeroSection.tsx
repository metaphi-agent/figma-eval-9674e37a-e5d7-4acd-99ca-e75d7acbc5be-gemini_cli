import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-20 py-20 bg-white overflow-hidden relative">
        <div className="flex flex-col gap-8 max-w-xl z-10">
            <h1 className="text-6xl font-extrabold text-blue-gray-900 leading-tight">
                Get the Sun to Power Your Home
            </h1>
            <p className="text-xl text-blue-gray-600">
                Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
            </p>
            <div className="flex items-center gap-4">
                <Button variant="primary" size="xl" className="rounded-full bg-purple-600 hover:bg-purple-700 text-white">
                    Request a Quote
                </Button>
                <Button variant="ghost" size="xl" className="rounded-full text-purple-600 hover:bg-purple-50">
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </div>
            <div className="mt-8 flex flex-col gap-2">
                 <p className="text-blue-gray-600">
                    "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque."
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <img src="./assets/images/user-avatar.png" alt="User" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-blue-gray-900">Rwanda Melflor</span>
                        <span className="text-sm text-blue-gray-500">zerowaste.com</span>
                    </div>
                 </div>
            </div>
        </div>
        
        {/* Abstract shapes and Image placeholder */}
        <div className="relative w-full lg:w-1/2 h-[600px] flex items-center justify-center">
             <div className="absolute top-0 right-0 w-[500px] h-[700px] bg-orange-400 opacity-20 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-3xl translate-y-20 -translate-x-10"></div>
             
             <div className="relative z-10 w-[400px] h-[600px] bg-blue-100 rounded-[100px] overflow-hidden shadow-2xl border-8 border-white">
                <img src="./assets/images/hero-image.png" alt="Hero" className="w-full h-full object-cover" />
             </div>
        </div>
    </section>
  );
};

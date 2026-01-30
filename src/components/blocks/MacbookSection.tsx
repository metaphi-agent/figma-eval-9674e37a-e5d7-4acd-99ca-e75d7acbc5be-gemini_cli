import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const MacbookSection: React.FC = () => {
  return (
    <section className="bg-purple-700 py-20 px-20 text-white relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
            <div className="flex flex-col gap-8 max-w-2xl">
                 <h3 className="text-amber-400 font-bold text-xl">Get the Sun</h3>
                <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                    All the power that you need for your house is now available
                </h2>
                <div className="flex flex-col gap-4">
                     <Button variant="secondary" size="xl" className="w-fit rounded-full bg-amber-400 hover:bg-amber-500 text-blue-gray-900">
                        Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-white/80">Egestas fringilla phasellus faucibus scelerisque eleifend donec.</p>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
                {/* Macbook Image */}
                <div className="relative z-10">
                    <img 
                        src="./assets/images/37-7742.png" 
                        alt="Macbook Screen" 
                        className="w-full h-auto drop-shadow-2xl translate-x-10 scale-110"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
        
        {/* Background circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

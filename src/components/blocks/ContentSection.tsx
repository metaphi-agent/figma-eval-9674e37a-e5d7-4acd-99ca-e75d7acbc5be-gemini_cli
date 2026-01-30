import React from 'react';
import { Button } from '../ui/Button';

export const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-20 py-20 bg-white bg-amber-50/30">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-amber-400 font-bold text-xl">Get the Sun</h3>
            <h2 className="text-5xl font-extrabold text-blue-gray-900">Power for Your Business</h2>
            <p className="text-xl text-blue-gray-600">
                Amet, volutpat ridiculus. Tellus porttitor ut sollicitudin sit non sed.
            </p>
             <ul className="flex flex-col gap-4 mt-4">
                    {['Et pulvinar nec interdum integer', 'A, donec ornare sed turpis pulvinar', 'Erat porttitor pharetra sed in mauris', 'Tellus porttitor ut sollicitudin sit non sed'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-blue-gray-900 font-medium text-lg">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            <Button variant="primary" size="xl" className="mt-8 w-fit rounded-full bg-purple-600 hover:bg-purple-700 text-white">
                Request a Quote
            </Button>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
             {/* Abstract shape or placeholder */}
             <div className="w-[500px] h-[500px] bg-white rounded-full border-[20px] border-amber-100 flex items-center justify-center relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-100 rounded-full"></div>
                 <div className="relative z-10 text-center">
                    <span className="text-9xl font-extrabold text-purple-600 opacity-20">?</span>
                 </div>
             </div>
        </div>
    </section>
  );
};

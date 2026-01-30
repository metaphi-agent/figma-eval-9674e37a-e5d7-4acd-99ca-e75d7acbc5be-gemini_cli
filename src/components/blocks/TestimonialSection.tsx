import React from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-purple-900 py-20 px-20 relative overflow-hidden text-white">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 relative z-10">
            <div className="max-w-2xl">
                <h3 className="text-amber-400 font-bold text-xl mb-4">Join other Sun harvesters</h3>
                <h2 className="text-5xl font-extrabold mb-6">Make something awesome</h2>
                <p className="text-xl text-white/80">
                    Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                </p>
            </div>
            <Button variant="secondary" size="xl" className="rounded-full bg-amber-400 hover:bg-amber-500 text-blue-gray-900 mt-8 lg:mt-0">
                Request a Quote
            </Button>
        </div>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10 relative z-10">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="min-w-[350px] bg-white text-blue-gray-900 p-8 rounded-xl shadow-xl flex flex-col gap-6">
                    <p className="text-lg leading-relaxed">
                        "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non sed. Amet, volutpat ridiculus."
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                         <div className="w-12 h-12 rounded-full bg-gray-200">
                            {/* Avatar placeholder */}
                         </div>
                         <div className="flex flex-col">
                            <span className="font-bold">Jane Cooper</span>
                            <span className="text-sm text-blue-gray-500">10KWh</span>
                         </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4 mt-8 relative z-10">
            <button className="w-12 h-12 rounded-full border-2 border-amber-400 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-blue-gray-900 transition-colors">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full border-2 border-amber-400 text-amber-400 flex items-center justify-center hover:bg-amber-400 hover:text-blue-gray-900 transition-colors">
                <ArrowRight className="w-6 h-6" />
            </button>
        </div>

        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
};

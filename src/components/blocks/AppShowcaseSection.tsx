import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const AppShowcaseSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-32 px-20 py-20 bg-white">
        {/* Part 1: Text Left, Image Right (or vice versa based on design, design has image left for first one) */}
        {/* Node 30:6795 - Image Left (Purple Rectangle), Text Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="relative w-full lg:w-1/2 flex justify-center">
                 {/* Purple background shape */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-purple-900 rounded-3xl -z-10 rotate-[-6deg]"></div>
                 <div className="absolute top-20 -left-10 w-24 h-24 bg-blue-300 rounded-full blur-xl"></div>
                 
                 <img 
                    src="./assets/images/156-13639.png" 
                    alt="Mobile App 1" 
                    className="relative z-10 w-[300px] h-auto drop-shadow-2xl"
                    loading="lazy"
                 />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-amber-400 font-bold text-xl">Personalized services</h3>
                <h2 className="text-5xl font-extrabold text-blue-gray-900">Services with You in Mind</h2>
                <p className="text-xl text-blue-gray-600">
                    Pipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus vulputate, aliquet justo ut, scelerisque leo.
                </p>
                <ul className="flex flex-col gap-4 mt-4">
                    {['Et pulvinar nec interdum integer', 'A, donec ornare sed turpis pulvinar', 'Erat porttitor pharetra sed in mauris'].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-blue-gray-900 font-medium">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            {item}
                        </li>
                    ))}
                </ul>
                <Button variant="outline" size="l" className="mt-6 w-fit rounded-full border-purple-600 text-purple-600">
                    Action Button
                </Button>
            </div>
        </div>

        {/* Part 2: Text Left, Image Right */}
        {/* Node 30:6715 - Text Left, Image Right (Gold Rectangle) */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-20">
             <div className="relative w-full lg:w-1/2 flex justify-center">
                 {/* Gold background shape */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-amber-400 rounded-3xl -z-10 rotate-[6deg]"></div>
                 
                 <img 
                    src="./assets/images/156-13640.png" 
                    alt="Mobile App 2" 
                    className="relative z-10 w-[300px] h-auto drop-shadow-2xl"
                    loading="lazy"
                 />
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h3 className="text-amber-400 font-bold text-xl">System Architecture</h3>
                <h2 className="text-5xl font-extrabold text-blue-gray-900">Powerful System Architecture</h2>
                <p className="text-xl text-blue-gray-600">
                    Pipsum dolor sit amet, consectetur adipiscing elit. Nullam et metus vulputate, aliquet justo ut, scelerisque leo.
                </p>
                <div className="mt-4">
                    <Button variant="ghost" size="l" className="text-purple-600 hover:bg-purple-50 p-0">
                        View Case Study <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
};

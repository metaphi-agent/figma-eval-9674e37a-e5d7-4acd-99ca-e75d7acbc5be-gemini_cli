import React from 'react';

export const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-20 py-20 bg-white">
        <div className="text-center max-w-3xl mb-16">
            <h3 className="text-amber-400 font-bold text-xl mb-4">No more waste</h3>
            <h2 className="text-5xl font-extrabold text-blue-gray-900 mb-6">Pick the Sun</h2>
            <p className="text-xl text-blue-gray-600">
                Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
        </div>
        
        <div className="relative w-full max-w-5xl">
            {/* Circles background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <img 
                src="./assets/images/59-7976.png" 
                alt="Desktop Screen" 
                className="w-full h-auto drop-shadow-2xl"
                loading="lazy"
            />
        </div>
    </section>
  );
};

import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white px-20 py-20 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-6 max-w-sm">
                 <div className="flex items-center gap-2 text-2xl font-bold text-blue-gray-900">
                    <span className="text-purple-600">Soller</span>
                 </div>
                 <p className="text-blue-gray-600">
                    @ 2023 Soller, Inc. All rights reserved.
                 </p>
            </div>
            
            <div className="flex flex-wrap gap-20">
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-blue-gray-900">Product</h4>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Pricing</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Overview</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Browse</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Accessibility</a>
                </div>
                 <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-blue-gray-900">Solutions</h4>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Brainstorming</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Ideation</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Wireframing</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Research</a>
                </div>
                 <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-blue-gray-900">Resources</h4>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Help Center</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Blog</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Tutorials</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">FAQs</a>
                </div>
                 <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-blue-gray-900">Support</h4>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Contact Us</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Developers</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Documentation</a>
                    <a href="#" className="text-blue-gray-600 hover:text-purple-600">Integrations</a>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-blue-gray-200">
            <div className=\"flex gap-6 text-blue-gray-600\">
                <a href="#" className="hover:text-purple-600">Terms</a>
                <a href="#" className="hover:text-purple-600">Privacy</a>
                <a href="#" className="hover:text-purple-600">Support</a>
            </div>
             <div className="flex gap-6 text-blue-gray-600">
                <a href="#" className="hover:text-purple-600"><Youtube className="w-6 h-6" /></a>
                <a href="#" className="hover:text-purple-600"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-purple-600"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-purple-600"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-purple-600"><Linkedin className="w-6 h-6" /></a>
            </div>
        </div>
    </footer>
  );
};

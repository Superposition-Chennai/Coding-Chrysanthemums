import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-8 mt-auto border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
                <p>© 2025 Coding Chrysanthemums. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-accent-500 fill-accent-500 animate-pulse" />
                    <span>for Women in STEM</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

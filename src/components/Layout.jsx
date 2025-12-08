import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative bg-slate-900 text-white selection:bg-accent-500/30 selection:text-accent-200">
            {/* Background Gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="blob bg-secondary-600 w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
                <div className="blob bg-accent-600 w-96 h-96 bottom-0 right-0 translate-x-1/2 translate-y-1/2 animation-delay-2000" />
                <div className="blob bg-primary-600 w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
            </div>

            <Navbar />

            <main className="flex-grow pt-32 px-4 md:px-6 max-w-7xl mx-auto w-full relative z-10">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;

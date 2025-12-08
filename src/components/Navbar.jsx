import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { path: '/', label: 'Home' },
        { path: '/resources', label: 'Library' },
        { path: '/jobs', label: 'Jobs' },
        { path: '/mentorship', label: 'Mentorship' },
        { path: '/inspiration', label: 'Inspiration' },
        { path: '/about', label: 'About' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path.includes('?')) {
            return location.pathname + location.search === path;
        }
        return location.pathname === path && location.search === '';
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="bg-slate-900 md:bg-white/10 md:backdrop-blur-md border-b border-slate-800 md:border md:border-white/20 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between w-full shadow-lg md:shadow-xl">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Code2 className="w-6 h-6 md:w-8 md:h-8 text-secondary-400 group-hover:text-accent-400 transition-colors duration-300" />
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent-400 absolute -top-1 -right-1 animate-pulse" />
                    </div>
                    <span className="font-display font-bold text-base md:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 hidden sm:block">
                        Coding Chrysanthemums
                    </span>
                    <span className="font-display font-bold text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 sm:hidden">
                        CC
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "font-medium text-sm transition-all duration-300 relative py-1",
                                isActive(link.path)
                                    ? "text-accent-300"
                                    : "text-slate-300 hover:text-white"
                            )}
                        >
                            {link.label}
                            {isActive(link.path) && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-400 rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                    <a
                        href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums/tree/feature/full-redesign"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-accent-600 hover:bg-accent-500 transition-all duration-300 text-sm font-semibold text-white shadow-lg"
                    >
                        Join Community
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1 max-w-7xl mx-auto">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        "text-base font-medium px-4 py-3 rounded-lg transition-all",
                                        isActive(link.path)
                                            ? "bg-accent-600 text-white"
                                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="https://github.com/Superposition-Chennai/Coding-Chrysanthemums/tree/feature/full-redesign"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-center px-4 py-3 rounded-lg bg-accent-600 hover:bg-accent-500 transition-all text-sm font-semibold text-white"
                            >
                                Contribute to CC
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

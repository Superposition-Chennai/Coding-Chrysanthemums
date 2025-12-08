import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-300 text-sm font-medium"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Empowering Women in Tech</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-display font-bold leading-tight"
                >
                    Bloom Where You Are <br />
                    <span className="text-gradient">Coded</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                >
                    A curated ecosystem of resources, mentorship, and opportunities designed to help women in STEM thrive in their engineering journey.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                >
                    <Link
                        to="/resources"
                        className="px-8 py-4 rounded-full bg-secondary-600 hover:bg-secondary-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-secondary-600/25 flex items-center gap-2 group"
                    >
                        Explore Library
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="/mentorship"
                        className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold transition-all duration-300 backdrop-blur-sm"
                    >
                        Find a Mentor
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

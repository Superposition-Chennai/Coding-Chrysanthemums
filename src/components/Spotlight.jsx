import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Quote, User } from 'lucide-react';
import { profiles } from '../data/inspiration';

const Spotlight = () => {
    const [index, setIndex] = useState(0);
    const [imageError, setImageError] = useState(false);

    const handleRandom = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * profiles.length);
        } while (newIndex === index && profiles.length > 1);
        setIndex(newIndex);
        setImageError(false); // Reset error state on change
    };

    const profile = profiles[index];

    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-slate-900/50 border border-slate-700 p-8 md:p-12">

            {/* Background Blob */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Image */}
                <motion.div
                    key={profile.id} // Changed to ID to force re-render on change even if image URL is same (unlikely but safer)
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative shrink-0"
                >
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800 flex items-center justify-center">
                        {profile.image && !imageError ? (
                            <img
                                src={profile.image}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <User className="w-24 h-24 text-slate-600" />
                        )}
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-secondary-500 text-white p-3 rounded-full shadow-lg">
                        <Sparkles className="w-6 h-6" />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">{profile.name}</h2>
                            <p className="text-accent-300 font-medium text-lg uppercase tracking-wider mb-4">{profile.role}</p>

                            <div className="relative bg-white/5 rounded-2xl p-6 mb-6">
                                <Quote className="absolute top-4 left-4 w-6 h-6 text-slate-600 opacity-50" />
                                <p className="text-xl md:text-2xl font-display italic text-slate-200 relative z-10 px-4">
                                    "{profile.quote}"
                                </p>
                            </div>

                            <p className="text-slate-400 leading-relaxed text-lg">
                                {profile.bio}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={handleRandom}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all hover:scale-105 active:scale-95 font-semibold"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Inspire Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;

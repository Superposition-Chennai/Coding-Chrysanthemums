import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="py-20 space-y-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium"
                >
                    <Heart className="w-4 h-4 fill-accent-500/20" />
                    <span>Our Mission</span>
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-bold font-display">
                    Cultivating a <br />
                    <span className="text-gradient">Garden of Innovation</span>
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed">
                    Coding Chrysanthemums is more than just a resource library. It's a digital sanctuary for women in STEM to find their footing, grow their skills, and bloom into leaders.
                </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Globe, title: "Access for All", desc: "Democratizing access to high-quality technical education and mentorship resources." },
                    { icon: Users, title: "Community First", desc: "Building a safe, supportive environment where questions are encouraged and wins are celebrated." },
                    { icon: Sparkles, title: "Excellence", desc: "Curating only the best, most relevant resources to help you standout in the industry." }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-8 rounded-2xl space-y-4 text-center"
                    >
                        <div className="w-12 h-12 mx-auto bg-slate-800 rounded-xl flex items-center justify-center text-accent-400">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Story / Join */}
            <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold font-display">Join the Movement</h2>
                    <p className="text-slate-300">
                        Whether you're writing your first line of code or leading a team of engineers, there's a place for you here. Connect with mentors, find your next role, or just learn something new.
                    </p>
                    <a href="https://github.com/login" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors">
                        Join Community
                    </a>
                </div>
                <div className="flex-1 w-full aspect-video bg-gradient-to-br from-secondary-900 to-accent-900 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                    <div className="relative z-10 text-center">
                        <span className="text-6xl font-display font-bold text-white/20">2025</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import Spotlight from '../components/Spotlight';
import ProjectGallery from '../components/ProjectGallery';

const Inspiration = () => {
    return (
        <div className="py-10 space-y-16 max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Get <span className="text-gradient">Inspired</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Celebrate the pioneers, leaders, and creators shaping the future of tech.
                </p>
            </div>

            {/* Spotlight Section */}
            <section>
                <Spotlight />
            </section>

            {/* Quote of the day or similar Divider could go here */}

            {/* Projects Section */}
            <section>
                <ProjectGallery />
            </section>
        </div>
    );
};

export default Inspiration;

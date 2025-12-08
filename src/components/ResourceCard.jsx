import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ResourceCard = ({ resource, index }) => {
    return (
        <motion.a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl flex flex-col gap-4 group relative overflow-hidden"
        >
            {/* Hover Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex justify-between items-start">
                <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-secondary-900/50 transition-colors">
                    {/* If we had icons in data, we'd use them here. For now, a generic placeholder or based on category is fine. */}
                    <Star className="w-5 h-5 text-accent-400" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
            </div>

            <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-300 transition-colors">
                    {resource.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {resource.description}
                </p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {resource.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};

export default ResourceCard;

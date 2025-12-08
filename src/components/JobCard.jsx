import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Calendar, ExternalLink, Briefcase } from 'lucide-react';

const JobCard = ({ job, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all hover:border-slate-600"
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-accent-300 font-medium">
                        <Building2 className="w-4 h-4" />
                        {job.company}
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="text-slate-400 font-normal flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-accent-200 transition-colors">
                        {job.role}
                    </h3>

                    <div className="flex flex-wrap gap-2 pt-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300 border border-slate-600/50">
                            <Briefcase className="w-3 h-3" />
                            {job.type}
                        </span>
                        {job.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-xs text-indigo-300 border border-indigo-500/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0">
                    <span className="hidden md:flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" />
                        {job.datePosted}
                    </span>
                    <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 md:flex-none inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold text-sm hover:bg-slate-200 transition-colors"
                    >
                        Apply Now
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;

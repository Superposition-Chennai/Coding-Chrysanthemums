import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = jobs.filter(job =>
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="py-10 space-y-8 max-w-5xl mx-auto px-4">
            {/* Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Find Your <span className="text-gradient">Dream Role</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Curated opportunities at top tech companies, startups, and organizations inclusive of women in STEM.
                </p>
            </div>

            {/* Search Bar */}
            <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm sticky top-24 z-20 shadow-xl">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by role, company, or keyword..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 outline-none text-white placeholder-slate-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {/* Filters could go here in v2 */}
                </div>
            </div>

            {/* Job List */}
            <div className="space-y-4">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, index) => (
                        <JobCard key={job.id} job={job} index={index} />
                    ))
                ) : (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-lg">No jobs found matching your criteria.</p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-4 text-accent-400 hover:text-accent-300 font-medium"
                        >
                            Clear Search
                        </button>
                    </div>
                )}
            </div>

            <div className="text-center pt-8 border-t border-slate-800">
                <p className="text-slate-500 text-sm">
                    Disclaimer: These listings are for demonstration purposes.
                    Please visit company career pages for the most up-to-date information.
                </p>
            </div>
        </div>
    );
};

export default Jobs;

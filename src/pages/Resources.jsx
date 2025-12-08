import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Users, Briefcase, HeartHandshake, BrainCircuit, Binary, Server, Brain, Gamepad2, PenTool } from 'lucide-react';
import { useSearchParams } from 'react-router-dom'; // Added useSearchParams
import clsx from 'clsx';
import { resources, categories } from '../data/resources';
import ResourceCard from '../components/ResourceCard';

const iconMap = {
    Code2,
    Users,
    Briefcase,
    HeartHandshake,
    BrainCircuit,
    Binary,
    Server,
    Brain,
    Gamepad2,
    PenTool
}

const Resources = () => {
    const [searchParams, setSearchParams] = useSearchParams(); // Hook
    const initialCategory = searchParams.get('category') || 'all';
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat) {
            setActiveCategory(cat);
        } else {
            setActiveCategory('all');
        }
    }, [searchParams]);

    const handleCategoryChange = (id) => {
        setActiveCategory(id);
        if (id === 'all') {
            searchParams.delete('category');
            setSearchParams(searchParams);
        } else {
            setSearchParams({ category: id });
        }
    }

    const filteredResources = useMemo(() => {
        return resources.filter(resource => {
            const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
            const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen py-10 space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Resource <span className="text-gradient">Library</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Curated tools, guides, and communities to help you grow.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search resources, tags..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 outline-none transition-all placeholder:text-slate-600 text-white"
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => handleCategoryChange('all')}
                        className={clsx(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-all border",
                            activeCategory === 'all'
                                ? "bg-accent-500/10 border-accent-500/50 text-accent-300"
                                : "bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800"
                        )}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id)}
                            className={clsx(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all border flex items-center gap-2",
                                activeCategory === cat.id
                                    ? "bg-accent-500/10 border-accent-500/50 text-accent-300"
                                    : "bg-slate-800/30 border-slate-700/50 text-slate-400 hover:bg-slate-800"
                            )}
                        >
                            {/* Icon rendering if we want it, using simple strings for now in data */}
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                    <ResourceCard key={resource.id} resource={resource} index={index} />
                ))}
            </div>

            {filteredResources.length === 0 && (
                <div className="text-center py-20 text-slate-500">
                    <p>No resources found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default Resources;

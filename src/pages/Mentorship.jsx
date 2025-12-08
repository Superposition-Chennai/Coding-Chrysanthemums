import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, Send, CheckCircle, Search, MapPin, Briefcase } from 'lucide-react';
import clsx from 'clsx';
import ResourceCard from '../components/ResourceCard'; // Using standard card style

const Mentorship = () => {
    const [activeTab, setActiveTab] = useState('find'); // 'find' or 'become'
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(false);

    // Use Netlify Functions endpoint
    const API_URL = '/.netlify/functions/mentors';

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        company: '',
        bio: '',
        expertise: '',
        link: '' // LinkedIn or booking link
    });
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    // Fetch Mentors
    useEffect(() => {
        if (activeTab === 'find') {
            fetchMentors();
        }
    }, [activeTab]);

    const fetchMentors = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/mentors');
            if (res.ok) {
                const data = await res.json();
                setMentors(data);
            }
        } catch (err) {
            console.error("Failed to fetch", err);
        } finally {
            setLoading(false);
        }
    };

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            const payload = {
                ...formData,
                expertise: formData.expertise.split(',').map(s => s.trim()) // Convert CSV string to array
            };

            const res = await fetch('/api/mentors', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', role: '', company: '', bio: '', expertise: '', link: '' });
                // Refresh list if desired, or let user switch tabs
            } else {
                setSubmitStatus('error');
            }
        } catch (err) {
            setSubmitStatus('error');
        }
    };

    return (
        <div className="py-10 space-y-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Community <span className="text-gradient">Mentorship</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Connect with experienced engineers or give back to the community.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setActiveTab('find')}
                    className={clsx(
                        "px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300",
                        activeTab === 'find'
                            ? "bg-secondary-600 text-white shadow-lg shadow-secondary-600/25"
                            : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50"
                    )}
                >
                    <Search className="w-4 h-4" />
                    Find a Mentor
                </button>
                <button
                    onClick={() => setActiveTab('become')}
                    className={clsx(
                        "px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300",
                        activeTab === 'become'
                            ? "bg-accent-600 text-white shadow-lg shadow-accent-600/25"
                            : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50"
                    )}
                >
                    <UserPlus className="w-4 h-4" />
                    Become a Mentor
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'find' ? (
                    <motion.div
                        key="find"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                    >
                        {/* Built-in Platforms Card (Static) */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {/* Keep this brief as we have full list in Resources */}
                        </div>

                        {/* Community Mentors List */}
                        <h2 className="text-2xl font-bold border-b border-slate-800 pb-4">Community Mentors</h2>

                        {loading && <div className="text-center text-slate-500 py-10">Loading mentors...</div>}

                        {!loading && mentors.length === 0 && (
                            <div className="text-center py-20 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700">
                                <Users className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                                <p className="text-slate-400 mb-4">No mentors yet. Be the first one!</p>
                                <button onClick={() => setActiveTab('become')} className="text-accent-400 hover:underline">
                                    Sign up as a mentor
                                </button>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mentors.map((mentor) => (
                                <div key={mentor.id} className="glass-card p-6 rounded-2xl space-y-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold">{mentor.name}</h3>
                                            <p className="text-accent-400 text-sm font-medium">{mentor.role}</p>
                                            <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                                                <Briefcase className="w-3 h-3" /> {mentor.company}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                                        {mentor.bio}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.expertise.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href={mentor.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block w-full text-center py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-semibold"
                                    >
                                        Connect
                                    </a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="become"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="max-w-xl mx-auto glass p-8 rounded-3xl"
                    >
                        {submitStatus === 'success' ? (
                            <div className="text-center py-10 space-y-4">
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold">Thank you!</h3>
                                <p className="text-slate-400">Your profile has been added to the mentor list.</p>
                                <button
                                    onClick={() => { setSubmitStatus(null); setActiveTab('find'); }}
                                    className="px-6 py-2 bg-slate-800 rounded-lg text-white hover:bg-slate-700 transition-colors"
                                >
                                    View Listings
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold">Create Mentor Profile</h3>
                                    <p className="text-slate-400 text-sm">Share your knowledge and inspire the next generation.</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                        <input required name="name" value={formData.name} onChange={handleInput} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors" placeholder="e.g. Sarah Connor" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-1">Current Role</label>
                                            <input required name="role" value={formData.role} onChange={handleInput} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors" placeholder="e.g. Senior Dev" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-300 mb-1">Company</label>
                                            <input required name="company" value={formData.company} onChange={handleInput} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors" placeholder="e.g. Acme Corp" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1">Expertise (Comma separated)</label>
                                        <input required name="expertise" value={formData.expertise} onChange={handleInput} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors" placeholder="e.g. React, System Design, Career" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1">Short Bio</label>
                                        <textarea required name="bio" value={formData.bio} onChange={handleInput} rows={3} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors" placeholder="Briefly describe your journey and how you can help..." />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1">Contact/Social Link</label>
                                        <input required type="url" name="link" value={formData.link} onChange={handleInput} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-accent-500 outline-none transition-colors" placeholder="e.g. LinkedIn URL or Cal.com link" />
                                    </div>
                                </div>

                                <button
                                    disabled={submitStatus === 'submitting'}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-secondary-600 to-accent-600 font-bold text-white shadow-lg shadow-accent-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submitStatus === 'submitting' ? 'Creating Profile...' : 'Join as Mentor'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Mentorship;

import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { projects } from '../data/inspiration';

const ProjectGallery = () => {
    return (
        <div className="space-y-8">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Projects by Women</h3>
                <p className="text-slate-400">Discover incredible open-source tools and apps built by the community.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={project.id} className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-3 rounded-lg text-pink-400">
                                <Code className="w-6 h-6" />
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-500 hover:text-white transition-colors"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>

                        <h4 className="text-xl font-bold mb-1 group-hover:text-accent-300 transition-colors">{project.title}</h4>
                        <p className="text-sm text-slate-500 mb-3">by {project.author}</p>

                        <p className="text-slate-300 mb-6 line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;

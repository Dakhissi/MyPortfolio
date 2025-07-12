import React from "react";

const SkillCategory = ({ title, skills, icon }) => {
    return (
        <div className='bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300'>
            <h3 className='text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2'>
                <span className='text-blue-400'>{icon}</span>
                {title}
            </h3>
            <div className='flex flex-wrap gap-2'>
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200'
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

const Skills = ({ data, sectionTitle }) => {
    if (!data) return null;
    
    const skillCategories = [
        { title: 'Core Languages', skills: data.languages, icon: '💻' },
        { title: 'Frontend', skills: data.frontend, icon: '🎨' },
        { title: 'Backend & APIs', skills: data.backend, icon: '⚙️' },
        { title: 'AI & Automation', skills: data.ai, icon: '🤖' },
        { title: 'Databases', skills: data.databases, icon: '💾' },
        { title: 'DevOps & Infrastructure', skills: data.devops, icon: '🚀' },
        { title: 'Security', skills: data.security, icon: '🔒' },
        { title: 'Testing', skills: data.testing, icon: '🧪' },
        { title: 'Architecture', skills: data.architecture, icon: '🏗️' },
        { title: 'Concepts & Principles', skills: data.concepts, icon: '🎯' },
        { title: 'Workflow & Management', skills: data.workflow, icon: '📋' }
    ];

    return (
        <section data-section id='skills' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-2xl font-bold text-slate-200 mb-8 flex items-center gap-2'>
                    <span className='text-blue-400'>🛠</span>
                    {sectionTitle || "Technical Skills"}
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {skillCategories.map((category, index) => (
                        <SkillCategory 
                            key={index} 
                            title={category.title} 
                            skills={category.skills} 
                            icon={category.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

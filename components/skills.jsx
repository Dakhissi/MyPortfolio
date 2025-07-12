import React from "react";

const SkillCategory = ({ title, skills, icon }) => {
    return (
        <div className='bg-slate-800/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300'>
            <h3 className='text-base sm:text-lg font-semibold text-slate-200 mb-3 sm:mb-4 flex items-center gap-2'>
                <span className='text-blue-400 text-sm sm:text-base'>{icon}</span>
                {title}
            </h3>
            <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                {skills.map((skill, index) => (
                    <span 
                        key={index} 
                        className='px-2 sm:px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-500/20 hover:text-blue-300 transition-colors duration-200'
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
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-xl sm:text-2xl md:text-2xl font-bold text-slate-200 mb-6 sm:mb-8 flex items-center gap-2'>
                    <span className='text-blue-400 text-lg sm:text-xl'>🛠</span>
                    {sectionTitle || "Technical Skills"}
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
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

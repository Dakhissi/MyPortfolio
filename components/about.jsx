import React from "react";

const About = (props) => {
    return (
        <section data-section id='about' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-2xl font-bold text-slate-200 mb-6 flex items-center gap-2'>
                    <span className='text-blue-400'>👋</span>
                    {props.sectionTitle || "About Me"}
                </h2>
                <div className='prose prose-lg prose-invert max-w-none'>
                    {props.data.about.map(function(paragraph, index){
                        return (
                            <p key={index} className='text-slate-300 leading-relaxed mb-4 last:mb-0'>
                                {paragraph}
                            </p>
                        )
                    })}
                </div>
                <div className='mt-8 flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium'>
                        🌍 Arabic Native
                    </span>
                    <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium'>
                        🇺🇸 English Fluent
                    </span>
                    <span className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium'>
                        🇫🇷 French Fluent
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About
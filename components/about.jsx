import React from "react";

const About = (props) => {
    return (
        <section data-section id='about' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-xl sm:text-2xl md:text-2xl font-bold text-slate-200 mb-4 sm:mb-6 flex items-center gap-2'>
                    <span className='text-blue-400 text-lg sm:text-xl'>👋</span>
                    {props.sectionTitle || "About Me"}
                </h2>
                <div className='prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none'>
                    {props.data.about.map(function(paragraph, index){
                        return (
                            <p key={index} className='text-slate-300 leading-relaxed text-sm sm:text-base md:text-base mb-3 sm:mb-4 last:mb-0 text-justify'>
                                {paragraph}
                            </p>
                        )
                    })}
                </div>
                <div className='mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-2'>
                    <span className='px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium'>
                        🌍 Arabic Native
                    </span>
                    <span className='px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium'>
                        🇺🇸 English Fluent
                    </span>
                    <span className='px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium'>
                        🇫🇷 French Fluent
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About
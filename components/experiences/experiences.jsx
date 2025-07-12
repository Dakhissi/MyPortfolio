import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
    return (
        <section data-section id='experiences' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-xl sm:text-2xl md:text-2xl font-bold text-slate-200 mb-6 sm:mb-8 flex items-center gap-2'>
                    <span className='text-blue-400 text-lg sm:text-xl'>💼</span>
                    {props.sectionTitle || "Professional Experience"}
                </h2>
                <div className='space-y-4 sm:space-y-6'>
                    {props.data.map(function(object, index){
                        return <ExperienceItem  
                            key={`${object.title}+${object.startDate}`}
                            title={object.title}
                            company={object.company}
                            href={object.href}
                            startDate={object.startDate}
                            endDate={object.endDate}
                            description={object.description}
                            logo={object.logo}
                            skills={object.skills}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experiences
import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
    return (
        <section data-section id='experiences' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-2xl font-bold text-slate-200 mb-8 flex items-center gap-2'>
                    <span className='text-blue-400'>💼</span>
                    {props.sectionTitle || "Professional Experience"}
                </h2>
                <div className='space-y-6'>
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
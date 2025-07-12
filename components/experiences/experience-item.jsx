import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group relative bg-slate-700/20 rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 sm:w-16 sm:h-16 w-12 h-12">
                    <Image 
                        src={props.logo} 
                        alt="Company Logo" 
                        width={64} 
                        height={64} 
                        className='object-contain rounded-lg bg-slate-800 p-2' 
                    />
                </div>
                <div className='flex-1 space-y-3'>
                    <div className='space-y-1'>
                        <h3 className='font-semibold text-slate-200 text-lg group-hover:text-blue-300 transition-colors duration-200'>
                            {props.title}
                        </h3>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                            <span className='text-blue-400 font-medium'>{props.company}</span>
                            <span className='hidden sm:inline text-slate-400'>•</span>
                            <span className='text-slate-300 text-sm'>{props.startDate} - {props.endDate}</span>
                        </div>
                    </div>
                    <p className='text-slate-300 leading-relaxed'>{props.description}</p>
                    <div className='flex flex-wrap gap-2'>
                        {props.skills ? props.skills.map(function(skill, index){
                            return (
                                <span 
                                    key={skill} 
                                    className='px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium hover:bg-blue-500/30 transition-colors duration-200'
                                >
                                    {skill}
                                </span>
                            )
                        }) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem
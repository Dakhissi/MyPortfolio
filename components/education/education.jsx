import React from "react";
import EducationItem from "./education-item";

const Education = (props) => {
    return (
        <section data-section id='education' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-2xl font-bold text-slate-200 mb-8 flex items-center gap-2'>
                    <span className='text-blue-400'>🎓</span>
                    {props.sectionTitle || "Education"}
                </h2>
                <div className='space-y-6'>
                    {props.data.map(function(object, index){
                        return <EducationItem
                            key={`${object.subject}+${object.graduationDate}`}  
                            subject={object.subject}
                            degree={object.degree}
                            university={object.university}
                            href={object.href}
                            graduationDate={object.graduationDate} 
                            description={object.description}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Education
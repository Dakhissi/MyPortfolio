import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <section data-section id='projects' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-xl sm:text-2xl md:text-2xl font-bold text-slate-200 mb-6 sm:mb-8 flex items-center gap-2'>
                    <span className='text-blue-400 text-lg sm:text-xl'>🚀</span>
                    {props.sectionTitle || "Featured Projects"}
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                    {props.data.map(function(object, index){
                        return <ProjectItem
                            key={object.name}
                            name={object.name}
                            framework={object.framework}
                            description={object.description}
                            href={object.href}
                            status={object.status}
                            tags={object.tags}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
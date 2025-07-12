import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <section data-section id='projects' className='group'>
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-xl'>
                <h2 className='text-2xl font-bold text-slate-200 mb-8 flex items-center gap-2'>
                    <span className='text-blue-400'>🚀</span>
                    {props.sectionTitle || "Featured Projects"}
                </h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
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
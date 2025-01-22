import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group pt-16 lg:mx-0 px-4'>
            <div className='text-gray-50 text-lg'>
                {props.data.about.map(function(paragraph, index){
                    return <div className='mb-6'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About
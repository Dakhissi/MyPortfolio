import React from "react";

function EducationItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200">
            <div className='mr-2 text-gray-50 text-xs basis-1/4'>{props.startDate} {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.subject} ({props.degree})</a>
                <div className='text-gray-50 mb-4'>{props.university}</div>
                <div className='text-gray-50'>{props.description}</div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate); 
    }  
}

export default EducationItem
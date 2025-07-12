import React from "react";

function EducationItem(props) {
    return (
        <div className="group bg-surface-300/20 rounded-xl p-6 border border-surface-300/30 hover:border-primary-300/50 transition-all duration-300">
            <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-primary-200 transition-colors duration-200">
                            {props.subject} in {props.degree}
                        </h3>
                        <p className="text-primary-300 font-medium">{props.university}</p>
                    </div>
                    <div className="text-slate-300 text-sm font-medium">
                        Graduated: {props.graduationDate}
                    </div>
                </div>
                {props.description && (
                    <p className="text-slate-300 leading-relaxed text-sm">{props.description}</p>
                )}
            </div>
        </div>
    )
}

export default EducationItem
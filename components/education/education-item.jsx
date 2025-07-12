import React from "react";

function EducationItem(props) {
    return (
        <div className="group bg-surface-300/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-surface-300/30 hover:border-primary-300/50 transition-all duration-300">
            <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-200 group-hover:text-primary-200 transition-colors duration-200 leading-tight">
                            {props.subject} in {props.degree}
                        </h3>
                        <p className="text-primary-300 font-medium text-sm sm:text-base">{props.university}</p>
                    </div>
                    <div className="text-slate-300 text-xs sm:text-sm font-medium">
                        Graduated: {props.graduationDate}
                    </div>
                </div>
                {props.description && (
                    <p className="text-slate-300 leading-relaxed text-sm text-justify">{props.description}</p>
                )}
            </div>
        </div>
    )
}

export default EducationItem
function ProjectItem(props) {
    const statusColors = {
        'Production': 'bg-emerald-500/20 text-emerald-300',
        'In Development': 'bg-yellow-500/20 text-yellow-300',
        'POC': 'bg-purple-500/20 text-purple-300',
        'Master\'s Capstone': 'bg-blue-500/20 text-blue-300'
    };

    return (
        <div className="group bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-slate-200 group-hover:text-blue-300 transition-colors duration-200">
                        {props.name}
                    </h3>
                    {props.status && (
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[props.status] || 'bg-slate-600/20 text-slate-400'}`}>
                            {props.status}
                        </span>
                    )}
                </div>
                
                <div className="text-sm text-blue-400 font-medium">
                    {props.framework}
                </div>
                
                <p className="text-slate-300 leading-relaxed text-justify">
                    {props.description}
                </p>
                
                {props.tags && (
                    <div className="flex flex-wrap gap-2">
                        {props.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-2 py-1 bg-slate-600/20 text-slate-300 rounded-md text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                
                {props.href && (
                    <div className="pt-2">
                        <a 
                            href={props.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                        >
                            View Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectItem
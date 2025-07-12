import React from "react";

function NavItem(props) {
    if (props.isMobile) {
        return (
            <a href={props.href} className='flex-shrink-0 px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap'>
                <div className={props.active ? 'text-blue-400 bg-blue-400/10 px-3 py-2 rounded-lg border border-blue-400/20' : 'text-slate-400 hover:text-blue-400 hover:bg-blue-400/5 px-3 py-2 rounded-lg'}>
                    {props.name}
                </div>
            </a>
        );
    }

    return (
        <a href={props.href} className='flex items-center py-3 text-sm font-medium group transition-all duration-200'>
            <div className={props.active ? 'w-16 h-0.5 bg-blue-400 mr-4 transition-all group-hover:w-20 group-hover:bg-blue-300' : 'w-8 h-0.5 bg-slate-600 mr-4 transition-all group-hover:w-16 group-hover:bg-blue-400'}/>
            <div className={props.active ? 'transition-all text-blue-400 group-hover:text-blue-300' : 'transition-all text-slate-400 group-hover:text-blue-400'}>
                {props.name}
            </div>
        </a>
    )
}

export default NavItem
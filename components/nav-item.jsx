import React from "react";

function NavItem(props) {
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
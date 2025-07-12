import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import LanguageSwitcher from "./language-switcher";

const Header = (props) => {
    return (
        <div className='h-full flex flex-col justify-between py-8 lg:py-24 px-4 lg:px-8'>
            <div className='space-y-4'>
                <div className='flex justify-between items-start'>
                    <div className='space-y-2'>
                        <h1 className='text-4xl lg:text-5xl font-bold text-slate-200 tracking-tight'>
                            {props.data.name}
                        </h1>
                        <h2 className='text-lg lg:text-xl text-blue-400 font-medium tracking-wide'>
                            {props.data.headline}
                        </h2>
                        <div className='flex flex-wrap gap-2 text-sm text-slate-400'>
                            <span>📍 {props.data.location}</span>
                            <span>•</span>
                            <span>🌐 {props.data.status}</span>
                        </div>
                    </div>
                    <LanguageSwitcher currentLang={props.lang} />
                </div>
                <p className='text-slate-300 max-w-md leading-relaxed text-sm lg:text-base'>
                    {props.data.summary}
                </p>
            </div>
            <Navigation translations={props.navigation}></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header
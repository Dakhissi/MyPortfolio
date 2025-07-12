import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import LanguageSwitcher from "./language-switcher";

const Header = (props) => {
    return (
        <div className='h-full flex flex-col justify-between py-4 sm:py-6 md:py-8 xl:py-24 px-4 sm:px-6 md:px-8 xl:px-8'>
            <div className='space-y-3 sm:space-y-4 md:space-y-6'>
                <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4'>
                    <div className='space-y-1 sm:space-y-2'>
                        <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold text-slate-200 tracking-tight'>
                            {props.data.name}
                        </h1>
                        <h2 className='text-base xs:text-lg sm:text-lg md:text-xl xl:text-xl text-blue-400 font-medium tracking-wide'>
                            {props.data.headline}
                        </h2>
                        <div className='flex flex-wrap gap-1 xs:gap-2 text-xs xs:text-sm text-slate-400'>
                            <span>📍 {props.data.location}</span>
                            <span className='hidden xs:inline'>•</span>
                            <span>🌐 {props.data.status}</span>
                        </div>
                    </div>
                    <div className='flex-shrink-0 sm:self-start'>
                        <LanguageSwitcher currentLang={props.lang} />
                    </div>
                </div>
                <p className='text-slate-300 max-w-md leading-relaxed text-sm xs:text-base md:text-base xl:text-base text-justify'>
                    {props.data.summary}
                </p>
            </div>
            
            {/* Mobile Navigation - Show on mobile and tablet */}
            <div className='xl:hidden mt-6 sm:mt-8'>
                <Navigation translations={props.navigation} isMobile={true}></Navigation>
            </div>
            
            {/* Desktop Navigation - Show only on desktop */}
            <div className='hidden xl:block'>
                <Navigation translations={props.navigation} isMobile={false}></Navigation>
            </div>
            
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header
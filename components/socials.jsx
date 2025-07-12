import React from "react";
import Image from 'next/image';

const Socials = (props) => {
    return (
        <div className='space-y-6'>
            <div className='flex flex-col space-y-4'>
                <a href={`mailto:${props.data.email}`} className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-200 group'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Get in touch
                </a>
                <a href="#" className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-200 group'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                    Download Resume
                </a>
            </div>
            
            <div className='flex space-x-4'>
                <a href={props.data.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    <Image src="/logos/github-mark-white.png" alt="GitHub Logo" width={20} height={20} className='object-contain mr-2' />
                    GitHub
                </a>
                <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    <Image src="/logos/linkedin-mark-white.png" alt="LinkedIn Logo" width={20} height={20} className='object-contain mr-2' />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Socials
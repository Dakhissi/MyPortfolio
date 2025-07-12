import React from "react";

const Credits = (props) => {
    return (
        <footer data-section id='credits' className='mt-16 pt-8 border-t border-surface-300/30'>
            <div className='text-slate-400 text-sm space-y-4'>
                <div className='leading-relaxed'>
                    Built with ❤️ using{' '}
                    <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 transition-colors duration-200">Next.js</a>
                    {' '}and{' '}
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 transition-colors duration-200">Tailwind CSS</a>.
                    {' '}Design inspired by{' '}
                    <a href="https://www.sarahdayan.dev" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 transition-colors duration-200">Sarah Dayan</a>
                    {' '}and{' '}
                    <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-200 transition-colors duration-200">Brittany Chiang</a>.
                </div>
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2'>
                    <span className='text-slate-500'>© {new Date().getFullYear()} {props.data.name}. All rights reserved.</span>
                    <div className='flex space-x-4 text-xs'>
                        <a href="#about" className="text-slate-400 hover:text-primary-200 transition-colors duration-200">Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Credits
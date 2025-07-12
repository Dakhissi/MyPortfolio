import React from 'react';
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Volunteering from "@/components/volunteering/volunteering";
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills';
import Credits from '@/components/credits';
import { loadTranslations } from '@/lib/translations';

export default async function Home({ searchParams }) {
  const lang = searchParams?.lang || 'en';
  const data = await loadTranslations(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="flex min-h-screen flex-col xl:flex-row">
        {/* Header Section - Mobile: Full width, Tablet: Full width, Desktop: Fixed sidebar */}
        <div className="w-full xl:w-1/3 xl:fixed xl:top-0 xl:left-0 xl:h-screen xl:overflow-y-auto xl:scrollbar-thin xl:scrollbar-thumb-slate-600 xl:scrollbar-track-slate-800">
          <Header data={data.general} lang={lang} navigation={data.navigation}></Header>
        </div>
        
        {/* Main Content Section */}
        <div className="flex-1 xl:ml-[33.333333%] overflow-y-auto h-screen">
          <div className='py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 max-w-4xl mx-auto'>
            <About data={data.general} sectionTitle={data.sections?.about}></About>
            <Experiences data={data.experiences} sectionTitle={data.sections?.experience}></Experiences>
            <Skills data={data.skills} sectionTitle={data.sections?.skills}></Skills>
            <Projects data={data.projects} sectionTitle={data.sections?.projects}></Projects>
            <Education data={data.education} sectionTitle={data.sections?.education}></Education>
            <Credits data={data.general}></Credits>
          </div>
        </div>
      </main>
    </div>
  )
}

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
      <main className="flex min-h-screen flex-col lg:flex-row">
        <div className="lg:w-1/3 lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:overflow-y-auto lg:scrollbar-thin lg:scrollbar-thumb-slate-600 lg:scrollbar-track-slate-800">
          <Header data={data.general} lang={lang} navigation={data.navigation}></Header>
        </div>
        <div className="flex-1 lg:ml-[33.333333%] overflow-y-auto h-screen">
          <div className='py-12 px-4 lg:px-8 space-y-16 lg:space-y-24 max-w-4xl mx-auto'>
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

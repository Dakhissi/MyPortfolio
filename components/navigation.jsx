'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = ({ translations, isMobile = false }) => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:0.5});

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    if (isMobile) {
        return (
            <nav className='flex xl:hidden overflow-x-auto scrollbar-hide py-2 space-x-4 sm:space-x-6 border-t border-slate-700/50 pt-4'>
                <NavItem active={activeSection === 'about' ? true : false} href='#about' name={translations?.about || "About"} isMobile={true}></NavItem>
                <NavItem active={activeSection === 'experiences' ? true : false} href='#experiences' name={translations?.experience || "Experience"} isMobile={true}></NavItem>
                <NavItem active={activeSection === 'skills' ? true : false} href='#skills' name={translations?.skills || "Skills"} isMobile={true}></NavItem>
                <NavItem active={activeSection === 'projects' ? true : false} href='#projects' name={translations?.projects || "Projects"} isMobile={true}></NavItem>
                <NavItem active={activeSection === 'education' ? true : false} href='#education' name={translations?.education || "Education"} isMobile={true}></NavItem>
            </nav>
        );
    }

    return (
        <nav className='hidden xl:flex flex-col py-10 space-y-2'>
            <NavItem active={activeSection === 'about' ? true : false} href='#about' name={translations?.about || "About"}></NavItem>
            <NavItem active={activeSection === 'experiences' ? true : false} href='#experiences' name={translations?.experience || "Experience"}></NavItem>
            <NavItem active={activeSection === 'skills' ? true : false} href='#skills' name={translations?.skills || "Skills"}></NavItem>
            <NavItem active={activeSection === 'projects' ? true : false} href='#projects' name={translations?.projects || "Projects"}></NavItem>
            <NavItem active={activeSection === 'education' ? true : false} href='#education' name={translations?.education || "Education"}></NavItem>
        </nav>
    )
}

export default Navigation
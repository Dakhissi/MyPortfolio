'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = ({ translations }) => {
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

    return (
        <nav className='hidden lg:flex flex-col py-10 space-y-2'>
            <NavItem active={activeSection === 'about' ? true : false} href='#about' name={translations?.about || "About"}></NavItem>
            <NavItem active={activeSection === 'experiences' ? true : false} href='#experiences' name={translations?.experience || "Experience"}></NavItem>
            <NavItem active={activeSection === 'skills' ? true : false} href='#skills' name={translations?.skills || "Skills"}></NavItem>
            <NavItem active={activeSection === 'projects' ? true : false} href='#projects' name={translations?.projects || "Projects"}></NavItem>
            <NavItem active={activeSection === 'education' ? true : false} href='#education' name={translations?.education || "Education"}></NavItem>
        </nav>
    )
}

export default Navigation
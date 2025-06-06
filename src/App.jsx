import Navbar from './components/Navbar';
import Section from './components/Section';
import SectionHeader from './components/SectionHeader';
import { useRef } from 'react';

export default function App() {
  const home = useRef();
  const projects = useRef();
  const resume = useRef();
  const contact = useRef();

  const navItems = [
    { title: 'Home', ref: home },
    { title: 'Projects', ref: projects },
    { title: 'Resume', ref: resume },
    { title: 'Contact', ref: contact }
  ];

  function handleClickSection(ref) {
    if (!ref) return;
    ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <>
      <Navbar navItems={navItems} scrollToSection={handleClickSection} />
      <main>
        <Section ref={home}>
          <SectionHeader 
            title="Welcome to Michael Harmer's Personal Website"
            subtitle="This is an (under construction) app that will showcase my projects as they are developed."
          >
          </SectionHeader>
        </Section>
        <Section ref={projects}>
          <SectionHeader title="Projects">
            This is a list of projects I have worked on or am currently working on.
          </SectionHeader>
        </Section>
        <Section ref={resume}>
          <SectionHeader 
            title="Resume"
            subtitle="My resume is available for download. Please click the link below to view it."
          >
            <a 
              href="/path/to/resume.pdf" 
              className="text-blue-500 hover:underline mt-2"
              download
            >
              Download Resume
            </a>
          </SectionHeader>
        </Section>
        <Section ref={contact}>
          <SectionHeader 
            title="Contact"
            subtitle="If you would like to get in touch, please reach out via email at{' '}"
          >
          </SectionHeader>
        </Section>
      </main>
    </>
  );
}

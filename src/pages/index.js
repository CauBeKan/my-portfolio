import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ResumeSection from '@/components/ResumeSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const scrollRef = useRef(null)

  return (
    <>
      <Navbar scrollContainerRef={scrollRef} />
      <div
        ref={scrollRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth no-scrollbar"
      >
        <section id="home" className="snap-start h-screen">
          <HomeSection />
        </section>
        <section id="about" className="snap-start h-screen">
          <AboutSection />
        </section>
        <section id="projects" className="snap-start h-screen">
          <ProjectsSection />
        </section>
        <section id="resume" className="snap-start h-screen">
          <ResumeSection />
        </section>
        <section id="contact" className="snap-start h-screen">
          <ContactSection />
        </section>
      </div>
    </>
  )
}

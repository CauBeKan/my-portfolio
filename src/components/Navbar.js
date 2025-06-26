import { useEffect, useState } from 'react'

const sections = ['home', 'about', 'projects', 'resume', 'contact']

export default function Navbar({ scrollContainerRef }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const scrollEl = scrollContainerRef?.current
    if (!scrollEl) return

    const handleScroll = () => {
      const scrollY = scrollEl.scrollTop
      const windowHeight = scrollEl.clientHeight

      for (let id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight

          if (
            scrollY >= offsetTop - windowHeight / 2 &&
            scrollY < offsetTop + offsetHeight - windowHeight / 2
          ) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    scrollEl.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => scrollEl.removeEventListener('scroll', handleScroll)
  }, [scrollContainerRef])

  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-black/70 text-white z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-400">Khang's Portfolio</div>
        <ul className="flex space-x-6 text-sm font-medium">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`transition ${
                  activeSection === sec ? 'text-blue-400' : 'text-white hover:text-blue-300'
                } font-semibold`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

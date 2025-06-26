import FadeInSection from './FadeInSection'

export default function ProjectsSection() {
  return (
    <div className="flex items-center justify-center h-full bg-slate-800 text-white px-4">
      <FadeInSection className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
        <ul className="space-y-4 text-left">
          <li>
            <strong>📚 SEO Bookstore</strong> – <em>Project Manager</em><br />
            Optimized khabookstore.com for search engines and managed project team.
          </li>

          <li>
            <strong>🏨 Hotel Website</strong> – <em>Fullstack Developer</em><br />
            Integrated OWAPI (weather) and GenAI chatbot.<br />
            <a className="text-blue-400 underline" href="https://github.com/CauBeKan/Japygo-hotel-main" target="_blank">
              View on GitHub
            </a>
          </li>

          <li>
            <strong>🍽️ Restaurant Wedding</strong> – <em>Backend Developer</em><br />
            Backend APIs for restaurant wedding management.<br />
            <a className="text-blue-400 underline" href="https://github.com/Gilight-Light/SE104" target="_blank">
              View on GitHub
            </a>
          </li>

          <li>
            <strong>🏢 Facility Booking System</strong> – <em>Fullstack Developer</em><br />
            Room & equipment booking, multi-tenant, integrated with Google Calendar.
          </li>

          <li>
            <strong>🗓️ Schedule Board</strong> – <em>Fullstack Developer</em><br />
            Print schedules, sync with Google Calendar. Built with React & Node.js.
          </li>

          <li>
            <strong>🌐 Tour Booking Website</strong> – <em>Fullstack Developer</em><br />
            A complete system for managing tours, optimizing routes, booking, and admin control.<br />
            <a
              className="text-blue-400 underline"
              href="https://github.com/CauBeKan/Group5_IE402"
              target="_blank"
            >
              View on GitHub
            </a>
          </li>

          <li>
            <strong>🎵 Music Streaming Web</strong> – <em>Fullstack Developer</em><br />
            A modern UI music player similar to Spotify, with playlist, play/pause, and song details.<br />
            <a
              className="text-blue-400 underline"
              href="https://github.com/CauBeKan/Music_Web_IE213"
              target="_blank"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </FadeInSection>
    </div>
  )
}

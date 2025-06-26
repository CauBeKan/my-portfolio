import FadeInSection from './FadeInSection'

export default function AboutSection() {
  return (
    <div className="flex items-center justify-center h-full bg-slate-900 text-white px-4">
      <FadeInSection className="max-w-3xl text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="mb-4">
          I’m a final-year Information Technology student at the University of Information Technology – VNU HCM,
          following the Vietnamese-Japanese high-quality program. I'm passionate about programming and constantly seeking
          to improve my skills through real-world projects and collaboration.
        </p>
        <p>
          I enjoy solving problems, building useful applications, and working in teams to deliver real value.
          I'm currently learning Japanese (N3 level) along with English and always open to new challenges in Fullstack Development.
        </p>
      </FadeInSection>
    </div>
  )
}

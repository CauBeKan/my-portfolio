import FadeInSection from './FadeInSection'

export default function HomeSection() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <FadeInSection className="max-w-2xl px-4">
        <img
            src="/khang.jpg"
            alt="Khang's Avatar"
            className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-lg border-4 border-slate-700"
            draggable="false"
            />
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hi, I'm Khang 👋</h1>
          <p className="mt-4">
            A Fullstack Developer from Vietnam
            <img
              draggable="false"
              role="img"
              alt="🇻🇳"
              className="w-8 h-8 inline ml-2"
              src="https://s.w.org/images/core/emoji/14.0.0/svg/1f1fb-1f1f3.svg"
            />
          </p>
        </div>
      </FadeInSection>
    </div>
  )
}

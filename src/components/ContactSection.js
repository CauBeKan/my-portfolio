import FadeInSection from './FadeInSection'

export default function ContactSection() {
  return (
    <div className="flex items-center justify-center h-full bg-slate-800 text-white px-4">
      <FadeInSection className="text-center max-w-xl">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">📍 Nhơn Trạch, Đồng Nai</p>
        <p className="mb-2">📞 0388 445 556</p>
        <p className="mb-2">📧 khang22032003@gmail.com</p>
        <p>
          🔗 <a href="https://www.linkedin.com/in/kankan023" className="text-blue-400 underline" target="_blank">LinkedIn Profile</a>
        </p>
        <p>
          🔗 <a href="https://www.facebook.com/KanKan023" className="text-blue-400 underline" target="_blank">Facebook Profile</a>
        </p>
      </FadeInSection>
    </div>
  )
}

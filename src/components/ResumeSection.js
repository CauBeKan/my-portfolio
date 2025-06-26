export default function ResumeSection() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-900 text-white px-4">
      <h2 className="text-3xl font-semibold mb-4 mt-12">Resume</h2>

      <div className="w-full h-[80%] max-w-4xl">
        <iframe
          src="/CV_NguyenHuynhKhang_khang22032003@gmail.com.pdf"
          className="w-full h-full rounded shadow-lg border border-slate-700"
          title="Khang's Resume"
        />
      </div>

      <a
        href="/CV_NguyenHuynhKhang_khang22032003@gmail.com.pdf"
        className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
        download
      >
        Download CV
      </a>
    </div>
  )
}

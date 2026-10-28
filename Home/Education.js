// Home/Education.js
function Education({ educationRef, eduVisible }) {
  return (
    <section
      id="education"
      ref={educationRef}
      className="relative min-h-screen w-full bg-[#0b0c0b] text-white flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 shadow-2xl overflow-hidden"
    >
      <div className="w-full flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24">
        <div className="wipe-mask mb-8 sm:mb-12 md:mb-14">
          <h2 className="wipe-title text-6xl sm:text-7xl md:text-8xl font-anton tracking-tight text-[#C9CEC7] uppercase">
            EDUCATION
          </h2>
        </div>

        <div className="apple-float mb-8 sm:mb-12 md:mb-14 w-full" style={{ transitionDelay: '120ms' }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0">
            <div className="lg:pr-8">
              <h3 className="text-lg sm:text-xl md:text-[22px] font-bold font-sans tracking-tight text-[#C9CEC7] whitespace-normal sm:whitespace-nowrap leading-snug">
                Bachelor of Science in Software Engineering (Hons)
              </h3>
              <p className="text-white/60 font-teachers mt-1.5 text-xs sm:text-sm font-medium">
                2025 — Now
              </p>
            </div>

            <div className="lg:border-l lg:border-white/20 lg:pl-8">
              <h3 className="text-lg sm:text-xl md:text-[22px] font-bold font-sans tracking-tight text-[#C9CEC7] whitespace-normal sm:whitespace-nowrap leading-snug">
                Diploma in Computer Science
              </h3>
              <p className="text-white/60 font-teachers mt-1.5 text-xs sm:text-sm font-medium">
                2023 — 2025
              </p>
            </div>
          </div>
        </div>

        <div className="apple-float flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 sm:gap-12 w-full mb-8 sm:mb-12" style={{ transitionDelay: '240ms' }}>
          <p className="font-teachers text-white/80 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Focusing on <strong>scalable frontend architecture</strong>, robust full-stack systems, and <strong>human-centered UI/UX design</strong>. Passionate about engineering <strong>high-performance software solutions</strong> and translating complex real-world requirements into clean, seamless digital experiences.
          </p>

          <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 shrink-0 max-w-full bg-white/5 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl border border-white/10 lg:ml-auto">
            <img
              src="images/Home/INTI_Logo.png"
              alt="INTI International College Penang"
              className="h-6 sm:h-8 md:h-10 max-w-[120px] sm:max-w-none w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="h-5 sm:h-6 w-px bg-white/20" />
            <img
              src="images/Home/CU_Logo.png"
              alt="Coventry University"
              className="h-6 sm:h-8 md:h-10 max-w-[120px] sm:max-w-none w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>

      <div className="w-full border-t border-b border-white/15 py-4 sm:py-5 px-8 sm:px-16 md:px-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 select-none font-sans text-xs sm:text-sm tracking-wider uppercase bg-[#0b0c0b]">
        <span className="text-[#C9CEC7]/90 font-medium whitespace-nowrap shrink-0">
          Computer Science / 2023
        </span>

        <div className="flex-1 w-full md:w-auto mx-0 md:mx-6 flex items-center relative overflow-hidden py-1">
          <div className="w-full h-[1px] bg-white/20 relative flex items-center">
            <div className={`absolute inset-0 bg-[#C9CEC7] ${eduVisible ? 'animate-arrow-draw' : 'scale-x-0 opacity-0'}`} />
          </div>
          <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9CEC7] shrink-0 -ml-1 ${eduVisible ? 'animate-arrow-head-once' : 'opacity-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>

        <span className="text-[#C9CEC7] font-semibold whitespace-nowrap shrink-0">
          Software Engineering — Now (3 Years)
        </span>
      </div>
    </section>
  );
}

window.Education = Education;
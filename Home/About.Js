// Home/About.js
function About({ aboutRef, aboutScrollOffset }) {
  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-[105vh] bg-portfolio-sage text-portfolio-dark flex flex-col justify-center px-8 sm:px-16 md:px-24 py-16 sm:py-20 md:py-24 shadow-2xl overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto my-auto flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="wipe-mask mb-4 sm:mb-6 md:mb-8">
            <h2 className="wipe-title text-6xl sm:text-7xl md:text-8xl font-anton tracking-tight uppercase">
              ABOUT ME
            </h2>
          </div>
          
          <p className="apple-float font-teachers text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold text-portfolio-dark/95 max-w-xl" style={{ transitionDelay: '150ms' }}>
            A student current enrolled in Bachelor of Science with Honours in Software Engineering at INTI International College Penang. Besides, student I am also an active individuals in participating volunteering works, it also helps me a lot in my soft skills development such as gained Leadership from Scouting. I am now looking for internship opportunities, feel free to contact me for an interviews!
          </p>
        </div>

        <div className="apple-float w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center gap-2.5 sm:gap-3.5 md:gap-5" style={{ transitionDelay: '250ms' }}>
          <div
            className="w-full max-w-[420px] h-[85px] sm:h-[120px] md:h-[145px] lg:h-[160px] rounded-none overflow-hidden border-[1.5px] border-portfolio-dark/30 shadow-md bg-portfolio-bg/80 transition-transform duration-500 ease-out shrink-0"
            style={{ transform: `translateY(${aboutScrollOffset * 0.3}px)` }}
          >
            <img
              src="images/Home/ABT_SEC_PIC.jpeg"
              alt="About Ooi Yun Pei"
              className="w-full h-full object-cover object-[54%_20%] scale-[1.12] hover:scale-[1.18] transition-transform duration-700 ease-out"
              onError={(e) => { e.target.src = "images/Home/Yunpei_Profile.JPEG"; }}
            />
          </div>

          <div
            className="w-full max-w-[420px] h-[85px] sm:h-[120px] md:h-[145px] lg:h-[160px] rounded-none overflow-hidden border-[1.5px] border-portfolio-dark/30 shadow-md bg-portfolio-bg/80 transition-transform duration-500 ease-out shrink-0"
            style={{ transform: `translateY(${aboutScrollOffset * 0.6}px)` }}
          >
            <img
              src="images/Home/ABT_SEC_TUTOR.jpeg"
              alt="ABT SEC TUTOR"
              className="w-full h-full object-cover object-[center_60%] hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => { e.target.src = "images/Home/Yunpei_Profile.JPEG"; }}
            />
          </div>

          <div
            className="w-full max-w-[420px] h-[85px] sm:h-[120px] md:h-[145px] lg:h-[160px] rounded-none overflow-hidden border-[1.5px] border-portfolio-dark/30 shadow-md bg-portfolio-bg/80 transition-transform duration-500 ease-out shrink-0"
            style={{ transform: `translateY(${aboutScrollOffset}px)` }}
          >
            <img
              src="images/Home/ABT_SEC_D4P.jpeg"
              alt="ABT SEC D4P"
              className="w-full h-full object-cover object-[center_35%] hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => { e.target.src = "images/Home/Yunpei_Hero.png"; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
// Home/Help.js
function Help() {
  return (
    <section className="relative min-h-screen md:h-screen w-full bg-portfolio-sage text-portfolio-dark flex flex-col justify-center px-8 sm:px-16 md:px-24 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28 shadow-2xl overflow-y-auto lg:overflow-visible">
      <div className="w-full my-auto flex flex-col justify-center">
        <div className="wipe-mask mb-8 sm:mb-12 md:mb-16">
          <h2 className="wipe-title text-6xl sm:text-7xl md:text-8xl font-anton tracking-tight uppercase text-portfolio-dark">
            HOW CAN I HELP YOU?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-14 w-full">
          <div className="apple-float flex flex-col" style={{ transitionDelay: '100ms' }}>
            <div className="border-t border-portfolio-dark/25 pt-3 sm:pt-4 mb-3 sm:mb-6 md:mb-8">
              <span className="font-sans text-sm sm:text-base md:text-xl font-bold tracking-wider text-portfolio-dark/70 block">
                01
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight text-portfolio-dark mb-1.5 sm:mb-3 md:mb-4">
              Design
            </h3>
            <p className="font-teachers text-sm sm:text-base md:text-lg leading-relaxed text-portfolio-dark/85">
              With a solid foundation in designing intuitive digital experiences, I deliver strong, accessible, and user-friendly web interfaces built on strict design systems.
            </p>
          </div>

          <div className="apple-float flex flex-col" style={{ transitionDelay: '200ms' }}>
            <div className="border-t border-portfolio-dark/25 pt-3 sm:pt-4 mb-3 sm:mb-6 md:mb-8">
              <span className="font-sans text-sm sm:text-base md:text-xl font-bold tracking-wider text-portfolio-dark/70 block">
                02
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight text-portfolio-dark mb-1.5 sm:mb-3 md:mb-4">
              Development
            </h3>
            <p className="font-teachers text-sm sm:text-base md:text-lg leading-relaxed text-portfolio-dark/85">
              I build scalable web applications from scratch that integrate seamlessly with design. My focus is on responsive architecture, performance, clean code, and smooth animations.
            </p>
          </div>

          <div className="apple-float flex flex-col" style={{ transitionDelay: '300ms' }}>
            <div className="border-t border-portfolio-dark/25 pt-3 sm:pt-4 mb-3 sm:mb-6 md:mb-8">
              <span className="font-sans text-sm sm:text-base md:text-xl font-bold tracking-wider text-portfolio-dark/70 block">
                03
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight text-portfolio-dark mb-1.5 sm:mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg sm:text-xl md:text-2xl">✦</span>
              <span>The full package</span>
            </h3>
            <p className="font-teachers text-sm sm:text-base md:text-lg leading-relaxed text-portfolio-dark/85">
              A complete software product from concept to implementation—that’s what makes me stand out. My combined UI/UX design sense and software engineering skills enable me to create outstanding projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Help = Help;
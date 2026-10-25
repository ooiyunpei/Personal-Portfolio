// Home/Projects.js
function Projects() {
  const projectsRef = React.useRef(null);
  const [isProjectsDragging, setIsProjectsDragging] = React.useState(false);
  const [projectsStartX, setProjectsStartX] = React.useState(0);
  const [projectsScrollLeft, setProjectsScrollLeft] = React.useState(0);

  const projectsList = window.PROJECTS_DATA || [];

  const handleProjectsMouseDown = (e) => {
    setIsProjectsDragging(true);
    setProjectsStartX(e.pageX - projectsRef.current.offsetLeft);
    setProjectsScrollLeft(projectsRef.current.scrollLeft);
  };

  const handleProjectsMouseLeave = () => setIsProjectsDragging(false);
  const handleProjectsMouseUp = () => setIsProjectsDragging(false);

  const handleProjectsMouseMove = (e) => {
    if (!isProjectsDragging) return;
    e.preventDefault();
    const x = e.pageX - projectsRef.current.offsetLeft;
    const walk = (x - projectsStartX) * 1.5;
    projectsRef.current.scrollLeft = projectsScrollLeft - walk;
  };

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative min-h-screen w-full bg-[#0b0c0b] text-white flex flex-col justify-between py-24 sm:py-32 overflow-hidden shadow-2xl">
      {/* 顶部标题行 */}
      <div className="px-8 sm:px-16 md:px-24 flex justify-between items-center mb-10 sm:mb-14">
        <div className="wipe-mask">
          <h2 className="wipe-title text-6xl sm:text-7xl md:text-8xl font-anton tracking-tight text-[#C9CEC7] uppercase">
            PROJECTS
          </h2>
        </div>
        <div className="apple-float flex gap-4 mr-4 sm:mr-8 md:mr-12" style={{ transitionDelay: '150ms' }}>
          <button
            onClick={() => scrollProjects("left")}
            className="w-12 h-12 sm:w-13 sm:h-13 p-3 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-portfolio-dark transition-all duration-200"
            aria-label="Previous Project"
          >
            <i data-lucide="chevron-left" className="w-5 h-5"></i>
          </button>
          <button
            onClick={() => scrollProjects("right")}
            className="w-12 h-12 sm:w-13 sm:h-13 p-3 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-portfolio-dark transition-all duration-200"
            aria-label="Next Project"
          >
            <i data-lucide="chevron-right" className="w-5 h-5"></i>
          </button>
        </div>
      </div>

      {/* 卡片滚动区域 */}
      <div
        ref={projectsRef}
        onMouseDown={handleProjectsMouseDown}
        onMouseLeave={handleProjectsMouseLeave}
        onMouseUp={handleProjectsMouseUp}
        onMouseMove={handleProjectsMouseMove}
        className={`apple-float w-full flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar select-none cursor-grab py-6 ${
          isProjectsDragging ? "cursor-grabbing" : ""
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        {projectsList.map((project, index) => (
          <div
            key={project.id}
            className={`w-[68vw] sm:w-[42vw] md:w-[30vw] lg:w-[24vw] aspect-[9/16] min-h-[400px] max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 relative p-5 sm:p-7 flex flex-col justify-between shadow-2xl border border-white/10 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] group ${
              index === 0 ? "ml-8 sm:ml-16 md:ml-24" : ""
            } ${index === projectsList.length - 1 ? "mr-8 sm:mr-16 md:mr-24" : ""}`}
          >
            {/* 背景图 + 暗角 */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />

            {/* 顶部文字 */}
            <div className="relative z-10 space-y-1 font-sans">
              <span className="block text-xs sm:text-xs font-semibold tracking-wider text-white/75 uppercase">
                {project.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                {project.title}
              </h3>
            </div>

            {/* 底部信息 + 圆形按钮 */}
            <div className="relative z-10 flex justify-between items-end font-sans">
              <p className="text-xs sm:text-xs text-white/70 font-medium">
                {project.category}
              </p>

              {project.hasLink ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-portfolio-dark flex items-center justify-center hover:scale-110 transition-transform shadow-lg shrink-0"
                  aria-label={`Open ${project.title}`}
                >
                  <i data-lucide="arrow-up-right" className="w-4 h-4 sm:w-5 sm:h-5"></i>
                </a>
              ) : (
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 text-white/40 flex items-center justify-center cursor-not-allowed shrink-0"
                  title="Coming Soon"
                >
                  <i data-lucide="arrow-up-right" className="w-4 h-4 sm:w-5 sm:h-5"></i>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full"></div>
    </section>
  );
}

window.Projects = Projects;
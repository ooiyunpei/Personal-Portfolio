// Projects/ProjectsApp.js
const { useState } = React;

// 1. 跑马灯流动状态下的 Icon 卡片
function FlowToolCard({ item }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-[#deded9]/85 border-[1.8px] border-[#0b0c0b]/15 hover:border-[#0b0c0b] hover:bg-[#deded9] transition-all duration-300 shadow-sm shrink-0 w-28 h-28 mx-3 group">
      <div className="w-10 h-10 flex items-center justify-center group-hover:scale-115 transition-transform duration-300">
        {item.imgSrc ? (
          <img
            src={item.imgSrc}
            alt={item.name}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              if (!e.target.dataset.triedPublic) {
                e.target.dataset.triedPublic = "true";
                e.target.src = "public/" + item.imgSrc;
              }
            }}
          />
        ) : (
          <i className={`${item.icon} text-3xl sm:text-4xl`}></i>
        )}
      </div>
      <span className="text-[11px] font-bold text-[#0b0c0b]/80 group-hover:text-[#0b0c0b] tracking-tight mt-2 text-center transition-colors">
        {item.name}
      </span>
    </div>
  );
}

// 2. Blueprint 极简线框网格系统
function BlueprintToolItem({ item }) {
  return (
    <div className="relative group p-6 sm:p-8 flex items-center gap-5 border-b border-r border-[#0b0c0b]/15 hover:bg-[#0b0c0b]/[0.02] transition-colors">
      {/* 4角十字靶心准星标绘（右下角） */}
      <div className="absolute -bottom-2 -right-2 w-4 h-4 pointer-events-none text-[#0b0c0b]/30 z-10 flex items-center justify-center font-mono text-xs select-none">
        +
      </div>

      {/* 极简圆角方形图标底座 */}
      <div className="w-14 h-14 rounded-2xl bg-[#deded9] border-[1.8px] border-[#0b0c0b]/20 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#0b0c0b] group-hover:scale-105 transition-all duration-300">
        {item.imgSrc ? (
          <img
            src={item.imgSrc}
            alt={item.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              if (!e.target.dataset.triedPublic) {
                e.target.dataset.triedPublic = "true";
                e.target.src = "public/" + item.imgSrc;
              }
            }}
          />
        ) : (
          <i className={`${item.icon} text-3xl`}></i>
        )}
      </div>

      {/* 软件标题 */}
      <div>
        <h4 className="text-base sm:text-lg font-bold text-[#0b0c0b] tracking-tight group-hover:translate-x-1 transition-transform duration-200">
          {item.name}
        </h4>
        <span className="text-[11px] font-mono text-[#7C837A] tracking-wider uppercase">
          Dev / Tool
        </span>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("marquee");
  
  // 筛选分类状态与折叠展开状态
  const [activeTab, setActiveTab] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const topNavItems = [
    { name: "Volunteering", url: "volunteering.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Home", url: "index.html" },
    { name: "Experiences", url: "experiences.html" },
    { name: "Contact", url: "contact.html" }
  ];

  const tools = window.allTools || [];
  const allProjects = window.projectsList || [];
  const categories = window.projectCategories || [
    { id: "all", label: "All" }
  ];

  // 1. 按 Tag 筛选
  const filteredProjects = activeTab === "all"
    ? allProjects
    : allProjects.filter((p) => p.type === activeTab);

  // 2. 超过 4 个时的折叠截断逻辑
  const shouldShowMoreButton = filteredProjects.length > 4;
  const displayedProjects = shouldShowMoreButton && !isExpanded
    ? filteredProjects.slice(0, 4)
    : filteredProjects;

  // 跑马灯 3 行切分
  const perRowCount = Math.ceil(tools.length / 3);
  const row1 = tools.slice(0, perRowCount);
  const row2 = tools.slice(perRowCount, perRowCount * 2);
  const row3 = tools.slice(perRowCount * 2);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between bg-[#e3e3df] text-[#0b0c0b] font-sans select-none overflow-x-hidden">
      
      {/* 移动端汉堡按钮 */}
      <div className="fixed top-5 right-5 z-[9999] md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
            menuOpen
              ? "bg-transparent border-transparent shadow-none"
              : "bg-[#e3e3df]/90 backdrop-blur-sm border-[1.8px] border-[#0b0c0b] rounded-full shadow-sm active:bg-portfolio-dark group"
          }`}
          aria-label="Toggle Menu"
        >
          <div className="w-5 h-3.5 relative flex flex-col justify-between items-center">
            <span
              style={{ height: "2px" }}
              className={`w-full rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                menuOpen ? "absolute left-0 top-1/2 rotate-45 -translate-y-1/2 bg-white" : "relative bg-[#0b0c0b]"
              }`}
            />
            <span
              style={{ height: "2px" }}
              className={`w-full rounded-full transition-all duration-200 ease-in-out ${
                menuOpen ? "opacity-0 scale-x-0" : "relative bg-[#0b0c0b]"
              }`}
            />
            <span
              style={{ height: "2px" }}
              className={`w-full rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                menuOpen ? "absolute left-0 top-1/2 -rotate-45 -translate-y-1/2 bg-white" : "relative bg-[#0b0c0b]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* 移动端全屏抽屉菜单 */}
      <div
        className={`fixed inset-0 z-[9998] bg-[#121412]/95 backdrop-blur-md transition-all duration-500 flex flex-col justify-between p-8 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full"></div>
        <div className="flex flex-col items-end gap-6 my-auto pr-6 text-right">
          {topNavItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.url}
              style={{
                transitionDelay: menuOpen ? `${idx * 60}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                opacity: menuOpen ? 1 : 0
              }}
              className={`font-jomhuria text-6xl tracking-wider transition-all duration-300 uppercase leading-none ${
                item.name === "Projects" ? "text-portfolio-sage font-bold" : "text-white/95 hover:text-portfolio-sage"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="border-t border-white/10 pt-4 text-center font-anton text-xs text-white/40 tracking-wider">
          2026 © Ooi Yun Pei
        </div>
      </div>

      {/* 桌面端顶部导航栏 */}
      <header className="relative w-full pt-4 md:pt-6 pb-2 z-30 shrink-0 hidden md:block">
        <nav className="flex justify-center items-center gap-8 lg:gap-14 pt-2 px-6">
          {topNavItems.map((item) => {
            const isActive = item.name === "Projects";
            return (
              <a
                key={item.name}
                href={item.url}
                className={`font-jomhuria text-2xl sm:text-3xl md:text-[34px] leading-none tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "text-[#0b0c0b] scale-105 font-bold"
                    : "text-[#7C837A] hover:text-[#0b0c0b] font-normal"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </header>

      {/* 主页面内容 */}
      <main className="w-full flex-1 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 md:py-14">
        
        {/* 页面主标题 */}
        <div className="wipe-mask mb-4">
          <h1 className="wipe-title font-anton text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-none text-[#0b0c0b]">
            PROJECTS
          </h1>
        </div>

        <p className="fade-float-in font-teachers text-sm sm:text-base md:text-lg text-[#0b0c0b]/80 font-medium mb-12 max-w-2xl">
          A curated collection of web applications, client solutions, and tools I have built and utilized across various engineering domains.
        </p>

        {/* PART 1：Featured Works 区域 */}
        <section className="fade-float-in mb-24">
          
          {/* 标题栏与 Sorting Tags 栏 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#0b0c0b]"></span>
              {/* 大号醒目标题 */}
              <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider text-[#0b0c0b]">
                Featured Works
              </h2>
            </div>

            {/* Sorting Tabs 筛选胶囊组 */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setIsExpanded(false); // 切换类别时重置展开状态
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-tight transition-all duration-200 ${
                    activeTab === cat.id
                      ? "bg-[#0b0c0b] text-[#e3e3df] shadow-sm scale-105"
                      : "bg-[#deded9] border border-[#0b0c0b]/20 text-[#0b0c0b]/75 hover:border-[#0b0c0b] hover:text-[#0b0c0b]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 立柱卡片网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {displayedProjects.map((project, idx) => (
              <div
                key={idx}
                className="pillar-card relative border-[1.8px] border-[#0b0c0b]/25 rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-h-[500px] group shadow-sm bg-neutral-900 transition-all duration-300"
              >
                {/* 1. 卡片全尺寸背景图片 */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.bgImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={(e) => {
                      if (!e.target.dataset.triedPublic) {
                        e.target.dataset.triedPublic = "true";
                        e.target.src = "public/" + project.bgImage;
                      }
                    }}
                  />
                  {/* 暗色渐变蒙版 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/80 transition-opacity duration-300"></div>
                </div>

                {/* 2. 右上角水印数字 */}
                <div className="absolute top-2 right-4 font-anton text-7xl text-white/10 select-none pointer-events-none group-hover:text-white/20 transition-colors z-10">
                  {project.pillarNum}
                </div>

                {/* 3. 卡片上半部文字内容 */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-1 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {project.category}
                    </span>
                    <span className={`text-[9.5px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md ${
                      project.status === "Live"
                        ? "bg-emerald-500/25 text-emerald-300 border border-emerald-400/30"
                        : "bg-white/10 text-white/60 border border-white/20"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-teachers text-xs sm:text-sm text-white/85 leading-relaxed font-normal mb-6 flex-1">
                    {project.description}
                  </p>
                </div>

                {/* 4. 卡片下半部：标签与重构后的镂空高冷按钮 */}
                <div className="relative z-10 pt-4 border-t border-white/15">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9.5px] px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      /* 剔除青色！常态半透白底黑字，Hover 彻底转为纯黑透镂空 + 白字 + 白线框高亮 */
                      className="w-full py-2.5 px-4 rounded-xl border border-white/40 bg-white/90 text-[#0b0c0b] hover:bg-black/90 hover:text-white hover:border-white transition-all duration-300 text-xs font-bold inline-flex items-center justify-between shadow-md group/btn backdrop-blur-sm"
                    >
                      <span className="truncate pr-2">{project.displayLink}</span>
                      <svg className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  ) : (
                    <div className="w-full py-2.5 px-3.5 rounded-xl border border-dashed border-white/30 bg-white/5 backdrop-blur-sm text-white/60 text-xs font-semibold inline-flex items-center justify-center gap-1.5 italic">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
                      <span>{project.displayLink}</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* View More / Show Less 折叠展开按钮 */}
          {shouldShowMoreButton && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-3 rounded-full border-[1.8px] border-[#0b0c0b] bg-transparent text-[#0b0c0b] hover:bg-[#0b0c0b] hover:text-[#e3e3df] text-xs font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 group shadow-sm active:scale-95"
              >
                <span>{isExpanded ? "Show Less" : `View More (${filteredProjects.length - 4} More)`}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          )}

        </section>

        {/* PART 2：Tools & Technologies 区域 */}
        <section className="fade-float-in mb-12">
          
          {/* 标题栏与 Switch 开关 */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#0b0c0b]"></span>
              {/* 大号字体 */}
              <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider text-[#0b0c0b]">
                Tools & Technologies
              </h2>
            </div>

            <div className="inline-flex items-center bg-[#deded9] border-[1.8px] border-[#0b0c0b]/30 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setViewMode("marquee")}
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  viewMode === "marquee"
                    ? "bg-[#0b0c0b] text-[#e3e3df] shadow-sm"
                    : "text-[#0b0c0b]/70 hover:text-[#0b0c0b]"
                }`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                </svg>
                <span>Flow</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-[#0b0c0b] text-[#e3e3df] shadow-sm"
                    : "text-[#0b0c0b]/70 hover:text-[#0b0c0b]"
                }`}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"/>
                </svg>
                <span>Grid</span>
              </button>
            </div>
          </div>

          {/* 模式 A：Flow 三行跑马灯 */}
          {viewMode === "marquee" ? (
            <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mask-gradient-full py-3 space-y-4">
              <div className="animate-marquee-left">
                {row1.concat(row1).concat(row1).map((item, idx) => (
                  <FlowToolCard key={`r1-${idx}`} item={item} />
                ))}
              </div>

              <div className="animate-marquee-right">
                {row2.concat(row2).concat(row2).map((item, idx) => (
                  <FlowToolCard key={`r2-${idx}`} item={item} />
                ))}
              </div>

              <div className="animate-marquee-left-fast">
                {row3.concat(row3).concat(row3).map((item, idx) => (
                  <FlowToolCard key={`r3-${idx}`} item={item} />
                ))}
              </div>
            </div>
          ) : (
            /* 模式 B：线框准星网格系统 (Blueprint Grid System) */
            <div className="w-full rounded-3xl border-t border-l border-[#0b0c0b]/20 bg-[#deded9]/40 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((item, idx) => (
                  <BlueprintToolItem key={`grid-${idx}`} item={item} />
                ))}
              </div>
            </div>
          )}
        </section>

      </main>

      {/* 底部版权 */}
      <footer className="w-full px-6 sm:px-12 md:px-16 py-4 border-t border-[#0b0c0b]/10 flex justify-between items-center text-xs font-sans font-medium text-[#0b0c0b]/50 shrink-0 mt-16">
        <span>2026 © Ooi Yun Pei</span>
        <span>Say Hello!</span>
      </footer>

    </div>
  );
}

window.ProjectsPage = ProjectsPage;
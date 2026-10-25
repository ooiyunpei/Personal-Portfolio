// Home/TopBar.js
function TopBar({ showBurger, menuOpen, setMenuOpen }) {
  const topNavItems = [
    { name: "Volunteering", url: "volunteering.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Home", url: "index.html" },
    { name: "Experiences", url: "experiences.html" },
    { name: "Contact", url: "contact.html" }
  ];

  const burgerNavItems = [
    { name: "Home", url: "index.html" },
    { name: "Experiences", url: "experiences.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Volunteering", url: "volunteering.html" },
    { name: "Contact", url: "contact.html" }
  ];

  const burgerDesktopClass = !menuOpen && !showBurger
    ? "md:opacity-0 md:-translate-y-6 md:scale-90 md:pointer-events-none"
    : "md:opacity-100 md:translate-y-0 md:scale-100 md:pointer-events-auto";

  return (
    <React.Fragment>
      {/* 1. FLOATING BURGER BUTTON */}
      <div
        className={`fixed top-[7%] right-5 md:top-6 md:right-12 z-[9999] transition-all duration-500 transform opacity-100 translate-y-0 scale-100 pointer-events-auto ${burgerDesktopClass}`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`w-[88px] h-[88px] md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 ${
            menuOpen
              ? "bg-transparent border-transparent shadow-none"
              : "bg-portfolio-bg/95 backdrop-blur border border-portfolio-dark/20 rounded-full shadow-lg hover:bg-portfolio-dark group"
          }`}
          aria-label="Toggle Menu"
        >
          <div className="w-8 h-6 md:w-8 md:h-6 relative flex flex-col justify-between items-center">
            <span
              style={{ height: "3px" }}
              className={`w-full rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                menuOpen
                  ? "absolute left-0 top-1/2 rotate-45 -translate-y-1/2 bg-white"
                  : "relative bg-portfolio-dark group-hover:bg-white"
              }`}
            />
            <span
              style={{ height: "3px" }}
              className={`w-full rounded-full transition-all duration-200 ease-in-out ${
                menuOpen
                  ? "opacity-0 scale-x-0 -translate-y-1/2 bg-white"
                  : "relative opacity-100 scale-x-100 bg-portfolio-dark group-hover:bg-white"
              }`}
            />
            <span
              style={{ height: "3px" }}
              className={`w-full rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                menuOpen
                  ? "absolute left-0 top-1/2 -rotate-45 -translate-y-1/2 bg-white"
                  : "relative bg-portfolio-dark group-hover:bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* 2. FULL DARK OVERLAY */}
      <div
        className={`fixed inset-0 z-[9998] bg-[#121412]/95 backdrop-blur-md transition-all duration-500 flex flex-col justify-between p-8 sm:p-12 md:p-20 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full"></div>
        <div className="flex flex-col items-end gap-4 sm:gap-6 my-auto pr-6 sm:pr-10 md:pr-16 text-right">
          {burgerNavItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.url}
              style={{
                transitionDelay: menuOpen ? `${idx * 60}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(60px)",
                opacity: menuOpen ? 1 : 0
              }}
              className="font-jomhuria text-4xl sm:text-5xl md:text-6xl tracking-wider text-white/95 hover:text-portfolio-sage hover:translate-x-[-12px] transition-all duration-300 select-none uppercase leading-none"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="border-t border-white/10 pt-4 text-center font-anton text-xs text-white/40 tracking-wider">
          2026 © Ooi Yun Pei
        </div>
      </div>
    </React.Fragment>
  );
}

window.TopBar = TopBar;
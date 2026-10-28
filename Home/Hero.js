// Home/Hero.js
const ROLES = ["SOFTWARE ENGINEERING", "DESIGNER", "ROBLOX DEVELOPER", "UI/UX DESIGNER"];

function useTypewriter(words, typeSpeed = 75, deleteSpeed = 35, delayBetween = 1800) {
  const [text, setText] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }, typeSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBetween]);

  return text;
}

function Hero() {
  const typedRole = useTypewriter(ROLES);

  const topNavItems = [
    { name: "Volunteering", url: "volunteering.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Home", url: "index.html" },
    { name: "Experiences", url: "experiences.html" },
    { name: "Contact", url: "contact.html" }
  ];

  return (
    <section id="hero" className="relative h-screen min-h-[680px] max-md:h-[80vh] max-md:min-h-[620px] w-full flex flex-col justify-between pt-4 md:pt-6 pb-4 overflow-hidden select-none">
      <nav className="hidden md:flex justify-center items-center gap-7 sm:gap-12 md:gap-16 z-30 pt-2 px-6">
        {topNavItems.map((item) => {
          const isActive = item.name === "Home";
          return (
            <a
              key={item.name}
              href={item.url}
              className={`font-jomhuria text-2xl sm:text-3xl md:text-[34px] leading-none tracking-wider uppercase transition-all duration-200 ${
                isActive
                  ? "text-portfolio-dark scale-105 font-bold"
                  : "text-[#7C837A] hover:text-portfolio-dark font-normal"
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </nav>

      <div className="absolute inset-x-0 top-[7%] md:relative md:top-auto w-full z-10 md:pt-16 md:my-auto flex flex-col items-center">
        <div className="relative flex flex-col items-center md:inline-flex w-full md:w-max max-w-[96vw] px-8 md:px-0">
          <div className="wipe-mask self-start w-full md:self-auto md:w-auto text-left md:text-center">
            <h1 className="wipe-title visible font-anton text-[13vw] md:text-[17.5vw] leading-none tracking-tight text-portfolio-dark select-none uppercase whitespace-nowrap">
              OOI YUN PEI
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full mt-6 md:mt-12 px-0 gap-3 md:gap-0">
            <div className="flex items-center justify-start gap-2 order-2 md:order-2 max-md:relative max-md:z-30">
              <a
                href="https://www.linkedin.com/in/ooi-yun-pei-53b4362b8/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-transparent rounded-lg border-[1.5px] border-[#161816]/70 md:border-[#4A3525] flex items-center justify-center text-[#161816] md:text-[#4A3525] hover:bg-[#362417] hover:border-[#362417] hover:text-white transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="https://github.com/ooiyunpei"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-transparent rounded-lg border-[1.5px] border-[#161816]/70 md:border-[#4A3525] flex items-center justify-center text-[#161816] md:text-[#4A3525] hover:bg-[#362417] hover:border-[#362417] hover:text-white transition-all duration-200 shadow-sm"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
            </div>

            <div className="w-auto text-left md:w-auto md:text-left order-1 md:order-1">
              <span className="md:hidden inline-flex items-center whitespace-nowrap font-jomhuria text-3xl font-normal text-portfolio-dark tracking-wide leading-none min-h-[1.6rem]">
                {typedRole}<span className="inline-block w-[2px] h-5 bg-portfolio-dark ml-1 animate-cursor align-middle"></span>
              </span>
              <span className="hidden md:inline-flex items-center font-jomhuria text-5xl font-normal text-portfolio-dark tracking-wide leading-none min-h-[2.5rem]">
                {typedRole}
                <span className="inline-block w-[2px] h-8 bg-portfolio-dark ml-1 animate-cursor"></span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end z-20 pointer-events-none">
        <div className="w-[360px] sm:w-[380px] md:w-[480px] lg:w-[530px] h-[56vh] sm:h-[56vh] md:h-[76vh] relative flex items-end justify-center">
          <img
            src="images/Home/Yunpei_Hero.png"
            alt="Ooi Yun Pei"
            className="w-full h-full object-contain object-bottom drop-shadow-2xl z-10 pointer-events-auto"
            onError={(e) => { e.target.src = "images/Home/Yunpei_Profile.JPEG"; }}
          />
        </div>

        <div className="absolute bottom-[6vh] sm:bottom-10 md:bottom-16 flex items-center justify-center gap-8 sm:gap-4 z-30 pointer-events-auto shadow-2xl">
          {/* 直接指向你的 PDF 简历文件 */}
          <a
            href="OOI YUN PEI_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-[150px] h-[56px] px-0 py-0 md:w-auto md:h-auto md:px-8 md:py-1 bg-portfolio-dark text-white border-[1.5px] border-white md:border-[#C9CEC7] text-[28px] md:text-3xl font-jomhuria font-normal tracking-normal md:tracking-wider normal-case md:uppercase hover:bg-[#C9CEC7] hover:text-portfolio-dark hover:border-portfolio-dark transition-all duration-200 rounded-none flex items-center justify-center leading-none"
          >
            View Resume
          </a>
          <a
            href="contact.html"
            className="w-[150px] h-[56px] px-0 py-0 md:w-auto md:h-auto md:px-8 md:py-1 bg-[#C9CEC7] text-portfolio-dark border-[1.5px] border-portfolio-dark text-[28px] md:text-3xl font-jomhuria font-normal tracking-normal md:tracking-wider normal-case md:uppercase hover:bg-portfolio-dark hover:text-white hover:border-[#C9CEC7] transition-all duration-200 rounded-none flex items-center justify-center leading-none"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
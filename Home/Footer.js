// Home/Footer.js
function Footer({ handleScrollToTop }) {
  return (
    <footer id="footer" className="relative w-full bg-[#e3e3df] text-portfolio-dark pt-12 pb-16 sm:pb-20 overflow-hidden">
      <div className="px-6 sm:px-16 md:px-24 apple-float" style={{ transitionDelay: '250ms' }}>
        {/* 大号 Social Icons 按钮组 */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-10 sm:mb-16 md:mb-20">
          <span className="px-5 sm:px-8 py-2 sm:py-3 rounded-full border-[1.8px] border-portfolio-dark text-sm sm:text-lg font-sans font-semibold text-portfolio-dark cursor-default select-none">
            Socials
          </span>

          <a
            href="https://www.linkedin.com/in/ooi-yun-pei-53b4362b8/"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-[1.8px] border-portfolio-dark flex items-center justify-center text-portfolio-dark hover:bg-portfolio-dark hover:text-white transition-all duration-200 shadow-sm"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          <a
            href="https://github.com/ooiyunpei"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[1.8px] border-portfolio-dark flex items-center justify-center text-portfolio-dark hover:bg-portfolio-dark hover:text-white transition-all duration-200 shadow-sm"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>
        </div>

        {/* 名字 + 圆形头像 */}
        <div className="flex items-center flex-nowrap justify-start gap-3 sm:gap-6 md:gap-8 mb-12 sm:mb-20 md:mb-24 w-full">
          <h1 className="font-anton text-[13.5vw] sm:text-[14.5vw] md:text-[12vw] leading-none tracking-tight text-portfolio-dark select-none uppercase whitespace-nowrap shrink-0">
            OOI YUN PEI
          </h1>

          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-portfolio-dark/10">
            <img
              src="public/assets/vector_HCY_RED.jpeg"
              alt="Character Vector"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "public/assets/vector_character.png";
              }}
            />
          </div>
        </div>

        {/* 底部版权栏 */}
        <div className="flex justify-between items-center text-xs sm:text-sm font-sans font-semibold pt-6 border-t border-[#161816]/20">
          <p>2026 © Ooi Yun Pei</p>
          <button
            type="button"
            onClick={handleScrollToTop}
            className="underline hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0 text-inherit font-inherit select-none"
          >
            Code by Yunpei
          </button>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
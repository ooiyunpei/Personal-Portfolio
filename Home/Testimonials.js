// Home/Testimonials.js
function Testimonials() {
  const testimonialsRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const testimonialsList = window.TESTIMONIALS_DATA || [];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - testimonialsRef.current.offsetLeft);
    setScrollLeft(testimonialsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - testimonialsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    testimonialsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="testimonials" className="relative w-full bg-[#e3e3df] text-portfolio-dark pt-24 pb-16 sm:pb-20 overflow-hidden shadow-2xl">
      <div className="px-8 sm:px-16 md:px-24">
        <div className="wipe-mask mb-16 sm:mb-20">
          <h2 className="wipe-title text-6xl sm:text-7xl md:text-8xl font-anton tracking-tight">
            TESTIMONIALS
          </h2>
        </div>
      </div>

      {/* 左右拖拽容器 */}
      <div className="apple-float w-full" style={{ transitionDelay: '150ms' }}>
        <div
          ref={testimonialsRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="w-full flex overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing"
        >
          {testimonialsList.map((item, index) => (
            <div
              key={item.id || index}
              className={`w-[85vw] sm:w-[60vw] md:w-[48vw] lg:w-[42vw] shrink-0 border-r border-[#161816]/30 flex flex-col justify-between py-2 pointer-events-none ${
                index === 0 ? "pl-8 sm:pl-16 md:pl-24 pr-8 sm:pr-14" : "px-8 sm:px-14"
              }`}
            >
              <div className="space-y-6 font-teachers text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-portfolio-dark/95">
                {item.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              <div className="mt-14">
                <h4 className="font-sans font-bold text-sm sm:text-base md:text-lg text-portfolio-dark">
                  {item.author}, <span className="font-normal text-portfolio-dark/85">{item.role}</span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
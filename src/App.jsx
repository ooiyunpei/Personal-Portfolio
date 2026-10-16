import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// Multi-language Greetings for Welcome Screen
const HELLO_WORDS = [
  "Hello", "你好", "Selamat Pagi", "Bonjour", "Hola", 
  "Konnichiwa", "Guten Tag", "Ciao", "Olá", "Namaste"
];

// Typing Animation Hook
function useTypewriter(words, speed = 80, delayBetween = 1800) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, delayBetween]);

  return text;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [helloIndex, setHelloIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [ripple, setRipple] = useState(null);

  const projectsRef = useRef(null);
  const typedRole = useTypewriter(["Software Engineering", "UI/UX Designer", "Creative Developer"]);

  // Intro Preloader Cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setHelloIndex((prev) => {
        if (prev < HELLO_WORDS.length - 1) return prev + 1;
        return prev;
      });
    }, 180);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Ripple Bubble Page Transition
  const handleNavClick = (e, targetId, menuName) => {
    setActiveMenu(menuName);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX || rect.left + rect.width / 2;
    const y = e.clientY || rect.top + rect.height / 2;

    setRipple({ x, y });

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);

    setTimeout(() => setRipple(null), 900);
  };

  // Scroll Projects Carousel
  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Volunteering", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Home", id: "hero" },
    { name: "Experience", id: "education" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <div className="relative w-full bg-portfolio-bg text-portfolio-dark selection:bg-portfolio-dark selection:text-white">
      
      {/* 1. INITIAL INTRO PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-portfolio-dark text-white"
            initial={{ opacity: 1 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <motion.h1
              key={helloIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.15 }}
              className="text-5xl md:text-7xl font-anton tracking-wider"
            >
              {HELLO_WORDS[helloIndex]}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. RIPPLE BUBBLE TRANSITION OVERLAY */}
      <AnimatePresence>
        {ripple && (
          <motion.div
            initial={{ scale: 0, opacity: 0.85 }}
            animate={{ scale: 60, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: "translate(-50%, -50%)"
            }}
            className="fixed z-40 w-12 h-12 rounded-full bg-portfolio-dark pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-between px-6 md:px-16 pt-8 pb-12 overflow-hidden">
        
        {/* Navigation Bar */}
        <nav className="flex justify-center items-center gap-2 md:gap-6 z-30">
          {navItems.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.id, item.name)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-portfolio-dark text-white shadow-md scale-105"
                    : "text-portfolio-dark/70 hover:bg-portfolio-dark hover:text-white hover:scale-100"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Hero Title & Identity Area */}
        <div className="relative mt-8 z-10 text-center">
          {/* Wipe-up Name Animation */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
              className="text-6xl sm:text-8xl md:text-[13vw] font-anton leading-none tracking-tight text-portfolio-dark select-none"
            >
              OOI YUN PEI
            </motion.h1>
          </div>

          {/* Subheaders & Social Icons Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 max-w-5xl mx-auto px-4">
            
            {/* Left: Typing Effect */}
            <div className="text-left font-sans text-sm md:text-base font-semibold leading-snug">
              <span className="block text-portfolio-dark">{typedRole}</span>
              <span className="text-portfolio-dark/60 text-xs">Designer & Developer</span>
            </div>

            {/* Right: Themed Social Icons (LinkedIn & GitHub) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex md:justify-end items-center gap-3"
            >
              <a
                href="https://www.linkedin.com/in/ooi-yun-pei-53b4362b8/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-portfolio-dark text-white flex items-center justify-center hover:bg-portfolio-dark/80 hover:scale-105 transition-all shadow-sm"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/ooiyunpei"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-portfolio-dark text-white flex items-center justify-center hover:bg-portfolio-dark/80 hover:scale-105 transition-all shadow-sm"
              >
                <Github size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Center Picture & CTA Buttons */}
        <div className="relative flex flex-col items-center justify-center my-auto z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-64 md:w-80 h-72 md:h-96 relative flex items-end justify-center"
          >
            {/* Replace with your portrait image (transparent PNG recommended) */}
            <img
              src="/assets/profile.png"
              alt="Ooi Yun Pei"
              className="w-full h-full object-contain drop-shadow-xl z-10"
              onError={(e) => {
                // Fallback placeholder if image not uploaded yet
                e.target.style.display = 'none';
              }}
            />
          </motion.div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 z-30">
            {/* View Resume: Dark background + light border */}
            <a
              href="#resume"
              className="px-6 py-2.5 rounded-lg bg-portfolio-dark text-white border border-white/40 text-sm font-semibold hover:bg-portfolio-dark/90 hover:border-white transition-all duration-200 shadow-md"
            >
              View Resume
            </a>
            {/* Contact Me: Light background + dark border */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg bg-transparent text-portfolio-dark border-2 border-portfolio-dark text-sm font-semibold hover:bg-portfolio-dark hover:text-white hover:border-white transition-all duration-200 shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* 4. STACKING SECTION 1: ABOUT ME (Sage Green) */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 min-h-screen bg-portfolio-sage text-portfolio-dark flex flex-col justify-center px-8 md:px-24 py-20 z-10 shadow-2xl rounded-t-[2.5rem]"
      >
        <div className="max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-anton tracking-tight mb-8">
            ABOUT ME
          </h2>
          <p className="font-teachers text-lg md:text-2xl leading-relaxed font-medium max-w-3xl">
            A student currently enrolled in Bachelor of Science with Honours in Software Engineering at INTI International College Penang. 
            Besides, as an active individual participating in volunteering works, it helps me develop strong soft skills and leadership from Scouting. 
            I am actively looking for internship opportunities—feel free to reach out for an interview!
          </p>
        </div>
      </motion.section>

      {/* 5. STACKING SECTION 2: EDUCATION (Dark) */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 min-h-screen bg-portfolio-dark text-white flex flex-col justify-center px-8 md:px-24 py-20 z-20 shadow-2xl rounded-t-[2.5rem]"
      >
        <div className="max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-anton tracking-tight mb-12 text-[#C9CEC7]">
            EDUCATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/20 pb-10 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-sans">Bachelor of Science in Software Engineering (Hons)</h3>
              <p className="text-white/60 font-teachers mt-1">2025 — Now</p>
            </div>
            <div className="md:border-l md:border-white/20 md:pl-8">
              <h3 className="text-xl md:text-2xl font-bold font-sans">Diploma in Computer Science</h3>
              <p className="text-white/60 font-teachers mt-1">2023 — 2025</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-teachers text-white/80 max-w-xl text-sm md:text-base leading-relaxed">
              Focusing on robust architecture, full-stack development, and UI/UX design. Driven by creating intuitive, accessible, and high-performance digital experiences.
            </p>
            <div className="text-sm font-semibold tracking-wider text-red-500 flex items-center gap-2">
              ★ INTI International College
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. STACKING SECTION 3: HOW CAN I HELP YOU? (Sage Green) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 min-h-screen bg-portfolio-sage text-portfolio-dark flex flex-col justify-center px-8 md:px-24 py-20 z-30 shadow-2xl rounded-t-[2.5rem]"
      >
        <div className="max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-anton tracking-tight mb-8">
            HOW CAN I HELP YOU?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 font-sans">
            <div className="p-6 bg-portfolio-bg/60 backdrop-blur rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-sm text-portfolio-dark/80 font-teachers">Creating responsive, pixel-perfect web applications with clean animations and modern frameworks.</p>
            </div>
            <div className="p-6 bg-portfolio-bg/60 backdrop-blur rounded-2xl">
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-sm text-portfolio-dark/80 font-teachers">Prototyping in Figma with structured Auto Layout and clear visual hierarchies.</p>
            </div>
            <div className="p-6 bg-portfolio-bg/60 backdrop-blur rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Full-stack Solutions</h3>
              <p className="text-sm text-portfolio-dark/80 font-teachers">Building scalable backends and APIs to support complete end-to-end user workflows.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. FINAL STACKING SECTION: PROJECTS (Dark) */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="sticky top-0 min-h-screen bg-portfolio-dark text-white flex flex-col justify-center px-8 md:px-16 py-20 z-40 shadow-2xl rounded-t-[2.5rem]"
      >
        {/* Header with Carousel Navigation Buttons */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-5xl md:text-7xl font-anton tracking-tight text-[#C9CEC7]">
            Projects
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scrollProjects("left")}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-portfolio-dark transition-all"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scrollProjects("right")}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-portfolio-dark transition-all"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Projects Container */}
        <div
          ref={projectsRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] h-96 bg-portfolio-card rounded-2xl p-4 flex flex-col justify-between snap-start relative overflow-hidden group shadow-lg"
            >
              <div className="w-full h-56 bg-neutral-800 rounded-xl overflow-hidden relative">
                <img
                  src={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80`}
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-end mt-4">
                <div>
                  <h3 className="font-anton text-2xl tracking-wide">Project {item}</h3>
                  <p className="text-xs text-white/60 font-teachers">Interactive Web Application</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-white text-portfolio-dark flex items-center justify-center hover:scale-110 transition-transform">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 8. TESTIMONIALS (Normal Flow - No Stacking, Mouse Drag Enabled) */}
      <section className="relative min-h-screen bg-portfolio-bg text-portfolio-dark px-8 md:px-16 py-24 z-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-anton tracking-tight mb-12"
        >
          TESTIMONIALS
        </motion.h2>

        {/* Draggable Testimonial Cards */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -600 }}
          className="flex gap-8 cursor-grab active:cursor-grabbing pb-8"
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="min-w-[320px] sm:min-w-[420px] md:min-w-[480px] p-8 bg-portfolio-sage/20 border border-portfolio-dark/10 rounded-2xl select-none"
            >
              <p className="font-teachers text-base md:text-lg leading-relaxed mb-6 italic">
                "Yun Pei performs exceptionally well during his internship. As an intern, I didn't expect perfection. My priority was for him to learn and grow, not just serve as an extra pair of hands. However, Yun Pei exceeded expectations by completing every task correctly and handling every detail assigned to him with great care."
              </p>
              <div>
                <h4 className="font-sans font-bold text-base">Howard Chin</h4>
                <p className="text-xs text-portfolio-dark/70 font-teachers">Technical Executive at Genesis Tech Solutions</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 9. FOOTER */}
      <footer id="contact" className="w-full bg-portfolio-dark text-white py-8 px-6 text-center z-50 relative">
        <p className="font-anton text-sm tracking-wider text-white/80">
          2026 © Ooi Yun Pei
        </p>
      </footer>

    </div>
  );
}

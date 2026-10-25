// Home/Preloader.js
const HELLO_WORDS = ["Hello", "你好", "Selamat Pagi", "Bonjour", "Hola", "Konnichiwa", "Guten Tag", "Ciao", "Olá"];

function Preloader({ loading }) {
  const [helloIndex, setHelloIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHelloIndex((prev) => (prev < HELLO_WORDS.length - 1 ? prev + 1 : prev));
    }, 160);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-portfolio-dark text-white">
      <h1 className="text-6xl md:text-8xl font-anton tracking-wider transition-all duration-200">
        {HELLO_WORDS[helloIndex]}
      </h1>
    </div>
  );
}

window.Preloader = Preloader;
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "w-[95%] border-slate-200/70 bg-white/80 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-[#111111]/80"
            : "w-full border-transparent bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight"
        >
          Juhi<span className="text-blue-500">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium text-slate-600 transition hover:text-blue-500 dark:text-slate-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-4 w-[95%] rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-[#111111] md:hidden">
          <ul className="space-y-5">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
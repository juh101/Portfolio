import ThemeToggle from "./ThemeToggle";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Achievements",
  "Education",
  "Contact",
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B0B0F]/80">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Juhi<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                className="transition hover:text-blue-500"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Navbar;
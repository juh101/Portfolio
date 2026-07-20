import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

          <div className="flex items-center gap-6 text-2xl">

            <a
              href="https://github.com/juh101"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-110 hover:text-blue-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/juhia2006/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-110 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:juhiahuja2006@gmail.com"
              className="transition hover:scale-110 hover:text-blue-500"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 dark:border-slate-800">

          <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Juhi Ahuja. All rights reserved.
            </p>

            <p>
              Built with React • Tailwind CSS • Framer Motion
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
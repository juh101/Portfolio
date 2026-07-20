import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-blue-500"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl font-black leading-none md:text-8xl"
        >
          JUHI
          <br />
          AHUJA
        </motion.h1>

        <div className="mt-8 text-2xl font-semibold text-blue-500 md:text-4xl">
          <TypeAnimation
            sequence={[
              "AI Developer",
              1500,
              "Full Stack Developer",
              1500,
              "Competitive Programmer",
              1500,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Building intelligent software using AI, modern web technologies,
          and scalable backend systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            download="Juhi_Ahuja_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
          >
            Resume
            <Download size={18} />
          </a>
        </div>

        <div className="mt-12 flex gap-6 text-2xl">
          <a href="https://github.com/juh101">
            <FaGithub className="transition hover:text-blue-500" />
          </a>

          <a href="https://www.linkedin.com/in/juhia2006/">
            <FaLinkedin className="transition hover:text-blue-500" />
          </a>

          <a href="https://leetcode.com/u/juhi2006/">
            <FaCode className="transition hover:text-blue-500" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
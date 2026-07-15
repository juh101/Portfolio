import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6"
    >
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-lg font-medium text-blue-500"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Juhi Ahuja
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-2xl font-semibold text-slate-600 dark:text-slate-400 md:text-3xl"
        >
          AI Developer • Full Stack Developer • Competitive Programmer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
        >
          I build AI-powered applications, scalable web solutions, and enjoy
          solving challenging algorithmic problems. Currently pursuing B.Tech in
          Computer Science at IIIT Surat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
          >
            Download Resume
            <Download size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
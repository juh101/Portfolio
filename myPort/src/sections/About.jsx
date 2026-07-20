import {
  GraduationCap,
  FolderGit2,
  Code2,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <GraduationCap size={26} />,
    title: "CGPA",
    value: "9.04 / 10",
  },
  {
    icon: <Code2 size={26} />,
    title: "LeetCode",
    value: "200+ Problems",
  },
  {
    icon: <FolderGit2 size={26} />,
    title: "Projects",
    value: "3+ Major Projects",
  },
  {
    icon: <Brain size={26} />,
    title: "Focus",
    value: "Full Stack + AI",
  },
];

function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight">
            Building software that solves
            <span className="text-blue-500"> real problems.</span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-600 dark:text-slate-400">
            I'm Juhi Ahuja, a third-year Computer Science undergraduate at
            IIIT Surat with a strong interest in Artificial Intelligence,
            Full Stack Development, and Software Engineering.
            <br />
            <br />
            I enjoy designing scalable applications, building AI-powered
            solutions, and solving challenging algorithmic problems. My focus
            is on writing clean, efficient, and maintainable code while
            continuously exploring modern technologies and best development
            practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl dark:border-slate-800 dark:bg-[#111111]"
            >
              <div className="mb-6 text-blue-500">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
import { GraduationCap, Trophy, Code2, Brain } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <GraduationCap size={28} />,
    title: "CGPA",
    value: "9.04 / 10",
  },
  {
    icon: <Code2 size={28} />,
    title: "LeetCode",
    value: "200+ Problems",
  },
  {
    icon: <Trophy size={28} />,
    title: "Hackathons",
    value: "2x Runner-up",
  },
  {
    icon: <Brain size={28} />,
    title: "Focus",
    value: "AI & Full Stack",
  },
];

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-4xl font-bold"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400"
      >
        I'm Juhi Ahuja, a third-year Computer Science student at IIIT Surat.
        I enjoy building AI-powered applications, full-stack web platforms, and
        solving algorithmic problems. I'm passionate about writing clean,
        scalable software and continuously exploring modern technologies.
      </motion.p>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-[#111111]"
          >
            <div className="mb-5 text-blue-500">{item.icon}</div>

            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-400">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
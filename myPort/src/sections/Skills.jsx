import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "Vite", "Redux Toolkit"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "AI / ML",
    items: [
      "FAISS",
      "Gemini API",
      "Sentence Transformers",
      "Streamlit",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Appwrite"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "PyTest"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-4xl font-bold"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-14 max-w-3xl text-lg text-slate-600 dark:text-slate-400"
      >
        Technologies and tools I use to build scalable web applications,
        AI-powered solutions, and efficient software.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-[#111111]"
          >
            <h3 className="mb-6 text-xl font-semibold">
              {skill.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:scale-105 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
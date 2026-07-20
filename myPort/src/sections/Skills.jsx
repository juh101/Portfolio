import { motion } from "framer-motion";

const skills = [
  "C++",
  "Python",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "FAISS",
  "Streamlit",
  "Gemini API",
  "Git",
  "GitHub",
  "Redux",
  "REST APIs",
];

function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-semibold uppercase tracking-[0.3em] text-blue-500"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-5xl font-black"
        >
          Technologies I work with.
        </motion.h2>

        <div className="mt-16 flex flex-wrap gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * .03 }}
              viewport={{ once: true }}
              className="rounded-full border border-slate-300 bg-white px-7 py-3 font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-slate-700 dark:bg-[#111111]"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
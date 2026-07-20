import { Trophy, Medal, Code2, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <Trophy size={32} />,
    title: "GDG Hackathon",
    description:
      "Secured 2nd place in Reimagination, a software development hackathon organized by GDG at IIIT Surat.",
  },
  {
    icon: <Medal size={32} />,
    title: "Speed Coding",
    description:
      "Secured 2nd place in the Speed Coding competition organized by LCS at IIIT Surat.",
  },
  {
    icon: <Code2 size={32} />,
    title: "LeetCode",
    description:
      "Solved 200+ DSA problems covering Trees, Graphs, DP, Greedy, Arrays and more.",
  },
  {
    icon: <Star size={32} />,
    title: "Academic Performance",
    description:
      "Maintaining a CGPA of 9.04 while actively participating in hackathons and development.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-4xl font-bold"
      >
        Achievements
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl text-lg text-slate-600 dark:text-slate-400"
      >
        Some milestones that reflect my growth in software development,
        competitive programming, and academics.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-[#111111]"
          >
            <div className="mb-5 text-blue-500">
              {item.icon}
            </div>

            <h3 className="mb-3 text-xl font-bold">
              {item.title}
            </h3>

            <p className="leading-7 text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
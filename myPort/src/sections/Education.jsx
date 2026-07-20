import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="py-32">
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
          Education
        </p>

        <h2 className="mt-4 text-5xl font-black">
          My Education
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-slate-200 bg-white p-10 shadow-lg dark:border-slate-800 dark:bg-[#111111]"
        >
          <div className="flex items-center gap-4">
            <GraduationCap className="text-blue-500" size={34} />
            <div>
              <h3 className="text-2xl font-bold">
                B.Tech in Computer Science & Engineering
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Indian Institute of Information Technology, Surat
              </p>

              <p className="mt-1 text-blue-500 font-semibold">
                2024 – Present • CGPA: 9.04/10
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;
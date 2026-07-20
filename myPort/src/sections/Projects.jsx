import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RAG Assistant",
    subtitle: "AI-Powered Codebase Analysis Platform",
    description:
      "Built an AI-powered codebase analysis platform that allows users to upload any public GitHub repository and ask natural language questions about its code. The application automatically clones repositories, filters source files, parses and chunks code, generates embeddings using Sentence Transformers, stores them in a FAISS vector database, and retrieves the most relevant code snippets to answer user queries. The system also preserves file paths and line numbers for source-traceable responses while providing an intuitive Streamlit interface for repository processing and interactive chat.",
    tech: [
      "Python",
      "Streamlit",
      "FAISS",
      "Sentence Transformers",
      "GitPython",
      "PyTest",
    ],
    features: [
      "Repository cloning from GitHub",
      "Semantic code search using RAG",
      "Source-cited responses",
      "Vector indexing with FAISS",
      "Interactive Streamlit dashboard",
    ],
    github: "https://github.com/juh101/GitRag",
    live: "#",
    image:
      "https://placehold.co/700x450/2563eb/ffffff?text=RAG+Assistant",
  },

  {
    title: "Mood Buddy",
    subtitle: "AI Emotional Wellness Platform",
    description:
      "Developed a full-stack AI-powered emotional wellness platform that generates personalized conversations based on the user's emotional state. Built a responsive React frontend with webcam integration and real-time multi-turn chat while implementing a secure Express backend to manage conversation context and AI requests. Integrated Google's Gemini API using structured prompt engineering to deliver safe, context-aware, and emotionally aware conversations.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Gemini API",
      "Tailwind CSS",
    ],
    features: [
      "Emotion-aware AI conversations",
      "Gemini API integration",
      "Webcam support",
      "Secure Express backend",
      "Responsive React interface",
    ],
    github: "https://github.com/juh101/mood-buddy",
    live: "#",
    image:
      "https://placehold.co/700x450/7c3aed/ffffff?text=Mood+Buddy",
  },

  {
    title: "Codeforces+",
    subtitle: "Competitive Programming Analytics Platform",
    description:
      "Designed and developed a competitive programming analytics platform using the Codeforces REST API. The application visualizes rating history, solved problem statistics, contest performance, and user insights through interactive graphs and reusable React components. Optimized API data fetching and built a responsive UI using React, Tailwind CSS, and Vite for a seamless user experience across devices.",
    tech: [
      "React",
      "Tailwind CSS",
      "REST API",
      "Vite",
      "JavaScript",
    ],
    features: [
      "Rating history graphs",
      "Solved problem analytics",
      "Contest performance insights",
      "Optimized API fetching",
      "Responsive dashboard",
    ],
    github: "https://github.com/AnshulPatil2005/codeforces",
    live: "#",
    image:
      "https://placehold.co/700x450/0ea5e9/ffffff?text=Codeforces%2B",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
          Projects
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Featured Work
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          A collection of projects demonstrating my experience in Artificial
          Intelligence, Full Stack Development, and Competitive Programming.
        </p>

        <div className="mt-24 space-y-36">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-3xl border border-slate-200 shadow-2xl dark:border-slate-800"
              />

              <div>
                <p className="font-medium text-blue-500">
                  {project.subtitle}
                </p>

                <h3 className="mt-2 text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold">
                    Key Features
                  </h4>

                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
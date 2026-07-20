import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
          Contact
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Let's Build Something Amazing.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          I'm always open to internships, collaborations, and exciting software engineering opportunities.
        </p>

        <a
          href="mailto:juhiahuja2006@gmail.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white transition hover:bg-blue-700"
        >
          <Mail size={20} />
          juhiahuja2006@gmail.com
        </a>

        <div className="mt-10 flex justify-center gap-8 text-3xl">

          <a href="https://github.com/juh101">
            <FaGithub className="transition hover:text-blue-500" />
          </a>

          <a href="https://www.linkedin.com/in/juhia2006/">
            <FaLinkedin className="transition hover:text-blue-500" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
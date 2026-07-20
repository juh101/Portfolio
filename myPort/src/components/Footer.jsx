function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 text-center text-slate-500">
        © {new Date().getFullYear()} Juhi Ahuja. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
"use client";

import { motion } from "motion/react";
import { ArrowRight, LinkedinLogo } from "@phosphor-icons/react";

export default function Portfolio() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 space-y-32 md:space-y-48">
      {/* Hero Section */}
      <section className="pt-12 md:pt-24 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-sans tracking-tight leading-[1.1] text-zinc-900"
        >
          Kalaiselvi Natarajan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-xl text-zinc-600 max-w-2xl leading-relaxed"
        >
          Manager at PayPal. Certified Scrum Master. Revamping process
          enhancements in the FinTech domain.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors active:scale-95"
          >
            Get in touch <ArrowRight weight="bold" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            About
          </h2>
        </div>
        <div className="md:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-zinc-800 leading-relaxed max-w-[65ch]"
          >
            A Seasoned Project Manager with almost a decade and a half of
            experience in the Finance domain. Managing products in FinTech giant
            PayPal by revamping process enhancements. Recipient of several Spot &
            Bravo awards.
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            Experience
          </h2>
        </div>
        <div className="md:col-span-2 space-y-12">
          {[
            {
              company: "PayPal",
              role: "Project Manager, Program Management Office",
              date: "May 2019 - Present",
            },
            {
              company: "Altimetrik",
              role: "Project Manager",
              date: "Jun 2018 - May 2019",
            },
            {
              company: "Infosys",
              role: "Scrum Master",
              date: "Mar 2011 - May 2018",
            },
            {
              company: "IBM",
              role: "Associate System Engineer",
              date: "Jul 2008 - Feb 2011",
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 border-t border-zinc-200 pt-6"
            >
              <div>
                <h3 className="text-lg font-medium text-zinc-900">
                  {job.company}
                </h3>
                <p className="text-zinc-600 mt-1">{job.role}</p>
              </div>
              <span className="text-sm text-zinc-500 font-mono">
                {job.date}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-400">
            Skills
          </h2>
        </div>
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            {[
              "Python",
              "Project Management",
              "Scrum",
              "Mainframe",
              "PL/1",
              "Knime",
              "Vibe Coding",
              "n8n",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="border-t border-zinc-200 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div>
            <h2 className="text-3xl font-medium text-zinc-900">
              Let&apos;s connect
            </h2>
            <p className="text-zinc-500 mt-2 max-w-sm">
              Open to new opportunities and networking.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kalaiselvi-natarajan-664ba128/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors text-zinc-900 active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <LinkedinLogo size={24} weight="fill" />
            </a>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}

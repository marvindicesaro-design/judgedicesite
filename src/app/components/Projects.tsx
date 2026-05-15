import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="home-life" className="py-24 px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Section 02 · Home Life</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The exhale{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              after the resume.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Family-oriented, Midwest-based. Firm believer in the power of a good lunch. Been on the
              internet since the pre-GUI era — which either gives me perspective or explains a lot, depending
              on who you ask.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I got into this work because I liked building things that didn't exist yet. That part hasn't changed.
              The tools have gotten better, the problems have gotten more interesting, and the coffee has stayed
              roughly the same.
            </p>

            <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-5 mt-4">
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">Coordinates</p>
              <p className="text-gray-300 font-medium">Midwest, mostly.</p>
              <p className="text-gray-500 text-sm mt-1">Some Latin in the bio. Responsive on email.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl p-6">
              <p className="text-blue-300 text-lg font-medium italic leading-relaxed" style={{ fontFamily: "'Instrument Serif', serif" }}>
                "Automate the grind — not the expertise."
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-800/40 border border-purple-500/20 rounded-xl p-6">
              <p className="text-purple-300 text-lg font-medium italic leading-relaxed" style={{ fontFamily: "'Instrument Serif', serif" }}>
                "More demand than awareness."
              </p>
            </div>
            <div className="bg-gray-800/40 border border-gray-700 rounded-xl p-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                Core motivation: building things that didn't exist yet. 25 years in, still true.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

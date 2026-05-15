import { motion } from 'motion/react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-6 font-medium"
          >
            judgedice.com — est. way back
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Delivering Joy since{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              the turn of the Century.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-1">
              Judge S. DiCesaro
            </p>
            <p className="text-gray-400 text-lg">
              Principal Solutions Architect · Adobe Experience Cloud specialist
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 mb-3 italic"
          >
            "Professional translator between 'what you want' and 'what's technically possible.'"
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-sm mb-10 tracking-widest"
          >
            Putatis ergo sum. &nbsp;·&nbsp; You think, therefore I am.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700 rounded-full px-5 py-2 mb-10"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-gray-300 text-sm">
              Currently: shipping marketing ops infrastructure for JLL · prepping an Adobe Summit demo
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 font-medium"
            >
              Let's find 30 minutes
            </a>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="border border-gray-600 px-8 py-3 rounded-lg text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors bg-gray-800/50"
            >
              See the work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center gap-4 mt-8"
          >
            <a
              href="https://linkedin.com/in/judgedice"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors bg-gray-800/50"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:judge@judgedice.com"
              aria-label="Send email to judge@judgedice.com"
              className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors bg-gray-800/50"
            >
              <Mail size={20} aria-hidden="true" />
            </a>
            <a
              href="https://judgedice.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit judgedice.com"
              className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-colors bg-gray-800/50"
            >
              <ExternalLink size={20} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

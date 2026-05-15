import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const timeline = [
  { years: '2000–04', role: 'Flash Developer', company: 'McKinsey & Company' },
  { years: '2004–08', role: 'Founder', company: 'The Flash Ministry, Chicago' },
  { years: '2008–11', role: 'Partner & Developer', company: 'Pixelwelders' },
  { years: '2011–15', role: 'Development Director', company: 'Vertical Inc., Chicago' },
  { years: '2015–19', role: 'Digital Strategist & Lead Solutions Architect', company: 'Hanson Dodge' },
  { years: '2019–21', role: 'Solutions Architect', company: 'Velir' },
  { years: '2021–now', role: 'Principal Solutions Architect', company: 'Maark → WillowTree' },
  { years: '2019–now', role: 'Instructor — Search Engine Marketing', company: 'Chicago Portfolio School' },
];

const clients = ['JLL', 'Wyndham Hotels', 'SECU', 'Fox Sports', 'HBO', 'Advance Auto Parts'];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="work" className="py-24 px-6 bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Section 01 · Work Life</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            I've been building things on the internet{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              since before it was cool.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Started as Flash development at McKinsey. Evolved into a 25-year digital architecture career
            across agencies, startups, and enterprise clients — building things that actually ship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-6">
              <p className="text-xs text-blue-400 tracking-widest uppercase mb-3">Currently</p>
              <p className="text-white font-semibold text-lg mb-1">Principal Solutions Architect</p>
              <p className="text-gray-400">WillowTree (via Maark, acquired 2023)</p>
            </div>

            <blockquote className="border-l-2 border-blue-500 pl-6">
              <p className="text-gray-300 text-lg italic leading-relaxed">
                "My specialty is the space where strategy and implementation collide — where a roadmap stops
                being a PowerPoint and starts being a thing that actually works in production."
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-1"
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="flex gap-4 py-2.5 border-b border-gray-800 last:border-0"
              >
                <span className="text-gray-500 text-xs font-mono whitespace-nowrap pt-0.5 min-w-[72px]">{item.years}</span>
                <div>
                  <p className="text-gray-200 text-sm font-medium">{item.role}</p>
                  <p className="text-gray-500 text-xs">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Client Brands</p>
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-1.5 rounded-full text-sm"
              >
                {client}
              </span>
            ))}
            <span className="bg-gray-800 border border-gray-700 text-gray-500 px-4 py-1.5 rounded-full text-sm italic">
              + several under NDA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

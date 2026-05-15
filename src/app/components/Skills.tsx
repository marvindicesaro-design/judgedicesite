import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const services = [
  {
    title: 'Marketing Technology Architecture',
    description: 'End-to-end digital marketing systems design covering strategy, platform selection, integration design, and implementation.',
    tags: ['Strategy → ship', 'Platform selection', 'Integration design'],
  },
  {
    title: 'Adobe Experience Cloud',
    description: 'Deep expertise in AEM, Adobe Journey Optimizer, Workfront, Target, and AEP across multiple industries.',
    tags: ['AEM', 'AJO', 'Workfront', 'Target', 'AEP'],
  },
  {
    title: 'Marketing Operations & Automation',
    description: 'Workflows, integrations, and automations that enable teams to actually use the platforms they pay for.',
    tags: ['Workfront', 'Smartsheet + API', 'Webhooks', 'Approval flows'],
  },
  {
    title: 'Workshop Design & Facilitation',
    description: 'Discovery, architecture, and stakeholder alignment sessions that move projects from "we should" to "we did."',
    tags: ['Discovery', 'Architecture', 'Alignment'],
  },
  {
    title: 'Digital Strategy & Solutions Architecture',
    description: 'Pre-build strategic planning, ecosystem design, and roadmapping — the work that makes implementation not a disaster.',
    tags: ['Roadmapping', 'Sequencing', 'Pattern-matching'],
  },
  {
    title: 'Instructor & Consulting',
    description: 'Teaching Search Engine Marketing at Chicago Portfolio School. Also available for curriculum and team-building consulting.',
    tags: ['Teaching', 'Curriculum', 'Mentorship'],
  },
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Section 03 · The Exciting Stuff</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What I actually do,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              in plain English.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            An alternative to listing obscure certifications and hoping you can figure out what they mean.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/10 flex flex-col"
            >
              <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

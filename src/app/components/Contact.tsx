import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Section 04 · Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {"Let's find"}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              30 minutes.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm responsive on email, better on a quick call, and frankly not great at LinkedIn DMs.
              If you're working on something in the Adobe Experience Cloud space and need a senior architect —
              or just someone to talk through a hairy integration — I'm interested.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Email</p>
                  <a href="mailto:judge@judgedice.com" className="text-gray-200 hover:text-blue-400 transition-colors font-medium">
                    judge@judgedice.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <MapPin className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-gray-200 font-medium">Midwest, mostly.</p>
                </div>
              </div>
            </div>

            <a
              href="mailto:judge@judgedice.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 font-medium"
            >
              judge@judgedice.com
              <ExternalLink size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">Find me elsewhere</p>

            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/judgedice', handle: '/in/judgedice' },
              { label: 'X / Twitter', href: 'https://twitter.com/judgedice', handle: '@judgedice' },
              { label: 'TikTok', href: 'https://tiktok.com/@judgedice', handle: '@judgedice' },
              { label: 'Flickr', href: 'https://flickr.com/photos/judgedice', handle: 'flickr/judgedice' },
              { label: 'Adobe Experience League', href: 'https://experienceleague.adobe.com', handle: 'experienceleague.adobe.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-gray-800 transition-all group"
              >
                <div>
                  <p className="text-gray-200 text-sm font-medium group-hover:text-blue-400 transition-colors">{link.label}</p>
                  <p className="text-gray-500 text-xs">{link.handle}</p>
                </div>
                <ExternalLink size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

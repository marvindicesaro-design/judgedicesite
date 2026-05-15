import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">JD</div>
            <div>
              <p className="text-white font-semibold">judgedice.com</p>
              <p className="text-gray-500 text-xs">Judge S. DiCesaro</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/judgedice"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-800 rounded-lg text-gray-500 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:judge@judgedice.com"
              className="p-2 border border-gray-800 rounded-lg text-gray-500 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-sm">
            &copy; 2000—2026 judgedice.com
          </p>
          <p className="text-gray-600 text-sm italic">
            Built by the proprietor. No cookies, no tracking, no nonsense.
          </p>
        </div>
      </div>
    </footer>
  );
}

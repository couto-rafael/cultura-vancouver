import { Facebook, Instagram, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Cultura Vancouver</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your centralized platform for discovering Vancouver's vibrant cultural events. Connecting communities through shared experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-300 hover:text-green-400 transition">
                  Partners
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-green-400 transition">
                  Community Centres
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#submit" className="text-gray-300 hover:text-green-400 transition">
                  Submit Event
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-green-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-green-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-green-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Cultura Vancouver. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for Vancouver's diverse community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

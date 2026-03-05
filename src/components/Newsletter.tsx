import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-4">
              <Mail className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[#1e293b] mb-4">Never Miss a Cultural Event</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly curated cultural events happening in Vancouver delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-lg transition flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6">
            Join 5,000+ subscribers. Unsubscribe anytime.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">150+</div>
              <div className="text-sm text-gray-600">Events Monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">30+</div>
              <div className="text-sm text-gray-600">Cultures</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Free to Use</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

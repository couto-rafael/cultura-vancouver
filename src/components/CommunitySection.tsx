import { Upload, Users, Calendar } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Share Your Cultural Event</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Are you organizing a cultural event? Share it with Vancouver's diverse community and help others discover amazing cultural experiences.
              </p>
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-lg transition flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Submit Event</span>
              </button>
            </div>

            <div className="p-8 md:p-12 bg-white/5">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-lg p-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Free Listing</h3>
                    <p className="text-gray-300 text-sm">Post your cultural events for free and reach thousands of people</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-lg p-3">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Community Driven</h3>
                    <p className="text-gray-300 text-sm">Connect with Vancouver's vibrant multicultural community</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-lg p-3">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Easy Submission</h3>
                    <p className="text-gray-300 text-sm">Simple form to submit your event in minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

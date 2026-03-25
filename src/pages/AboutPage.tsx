import { Globe, Heart, Users, Calendar, Mail, Linkedin, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const team = [
  {
    name: 'Sofia Andrade',
    role: 'Co-Founder & CEO',
    bio: 'Born in São Paulo, raised in Vancouver. Former community organizer with 10+ years connecting multicultural communities.',
    emoji: '🇧🇷',
    linkedin: '#',
  },
  {
    name: 'David Chen',
    role: 'Co-Founder & CTO',
    bio: 'Second-generation Chinese-Canadian software engineer. Passionate about using tech to preserve and promote cultural heritage.',
    emoji: '🇨🇦',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Community',
    bio: 'Punjabi-Canadian community liaison. Built relationships with over 50 cultural associations across Metro Vancouver.',
    emoji: '🇮🇳',
    linkedin: '#',
  },
  {
    name: 'Marcus Thompson',
    role: 'Head of Partnerships',
    bio: 'Jamaican-Canadian marketing strategist. Former Vancouver Foundation program director.',
    emoji: '🇯🇲',
    linkedin: '#',
  },
];

const values = [
  {
    icon: '🤝',
    title: 'Community First',
    desc: 'We exist to serve Vancouver\'s cultural communities — not the other way around. Every feature we build starts with community feedback.',
  },
  {
    icon: '🌍',
    title: 'Inclusive by Design',
    desc: 'All cultures deserve equal visibility. We actively work against algorithmic biases that amplify dominant cultures over smaller ones.',
  },
  {
    icon: '💚',
    title: 'Free & Accessible',
    desc: 'Event listings are always free. We\'ll never charge communities to be visible. Revenue comes from optional premium tools for organizers.',
  },
  {
    icon: '🔒',
    title: 'Privacy Matters',
    desc: 'We never sell user data. We collect only what\'s needed to improve event discovery — nothing more.',
  },
];

const milestones = [
  { year: '2024', event: 'Idea born at a SFU MBA class on social entrepreneurship' },
  { year: 'Early 2025', event: 'First 20 cultural associations onboarded as founding partners' },
  { year: 'Mid 2025', event: 'Beta launched with 50 events and 500 users in Vancouver' },
  { year: 'Late 2025', event: 'Expanded to Richmond and Burnaby; 5,000 registered users' },
  { year: '2026', event: 'Platform-wide launch across Metro Vancouver — you are here 🎉' },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We believe Vancouver's cultural events deserve to be found.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Cultura Vancouver started with a simple frustration: too many incredible cultural events happened in this city, and too few people knew about them. We're changing that.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl font-bold text-[#1e293b] mt-2 mb-4">One platform. Every culture. All of Vancouver.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Metro Vancouver is one of the most diverse regions on Earth. Over 200 ethnic origins, 150 languages, and thousands of cultural events happening every month — yet most remain invisible to people outside their immediate community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cultura Vancouver is the connective tissue. We aggregate cultural events from community associations, cultural centres, and individual organizers, making them discoverable to anyone curious about the world around them.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { value: '150+', label: 'Events/month' },
                { value: '30+', label: 'Cultures' },
                { value: '5,000+', label: 'Community members' },
              ].map(stat => (
                <div key={stat.label} className="bg-green-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="text-7xl mb-4">🌏</div>
              <blockquote className="text-lg font-medium text-[#1e293b] italic leading-relaxed">
                "Cultural exchange is not about assimilation — it's about enrichment. When we understand each other's celebrations, we understand each other."
              </blockquote>
              <p className="text-gray-500 text-sm mt-4">— Sofia Andrade, Co-Founder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b]">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm flex items-start space-x-4">
                <div className="text-3xl">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1e293b] mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e293b]">Our Journey</h2>
        </div>
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-28 text-right">
                <span className="text-sm font-bold text-green-600">{m.year}</span>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-green-100 mt-0.5" />
                {i < milestones.length - 1 && <div className="w-0.5 h-12 bg-green-200 mt-1" />}
              </div>
              <div className="flex-1 pb-6">
                <div className={`flex items-start space-x-2 ${i === milestones.length - 1 ? 'bg-green-50 border border-green-200 rounded-xl px-4 py-3' : ''}`}>
                  {i === milestones.length - 1 && <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />}
                  <p className="text-gray-700">{m.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="bg-[#1e293b] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Meet the Team</h2>
            <p className="text-gray-300 mt-2">A diverse crew of Vancouverites who care deeply about community.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition">
                <div className="text-5xl mb-3">{member.emoji}</div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-green-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">{member.bio}</p>
                <a href={member.linkedin} className="inline-flex items-center space-x-1 text-white/60 hover:text-white text-xs transition">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact / CTA */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Partner With Us</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Cultural associations, community centres, and event organizers — we want to amplify your work. Reach out to become a Cultura Vancouver partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@culturavancouver.ca"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1e293b] hover:bg-[#334155] text-white rounded-xl font-semibold transition"
            >
              <Mail className="w-5 h-5" />
              <span>hello@culturavancouver.ca</span>
            </a>
            <button
              onClick={() => navigate('/create-event')}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition"
            >
              <Calendar className="w-5 h-5" />
              <span>Submit an Event</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

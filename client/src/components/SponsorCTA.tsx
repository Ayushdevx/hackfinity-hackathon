import { motion } from "framer-motion";
import { Star, Users, Globe, TrendingUp, Award, Handshake } from "lucide-react";

const SponsorCTA = () => {
  const benefits = [
    {
      icon: Users,
      title: "Elite Talent Pool Access",
      description: "Direct recruitment access to 10,000+ top-tier developers, AI researchers, and startup founders from MIT, Stanford, Google, and Microsoft",
      value: "10K+ Elite Talent",
      metric: "98% employed within 6 months"
    },
    {
      icon: Globe,
      title: "Massive Global Reach",
      description: "Your brand showcased to 500K+ developers across 75+ countries through live streams, social media, and tech publications",
      value: "500K+ Reach",
      metric: "75+ countries"
    },
    {
      icon: TrendingUp,
      title: "Industry Leadership",
      description: "Position your company as a forward-thinking industry leader in AI innovation and developer ecosystem",
      value: "Thought Leadership",
      metric: "Featured in TechCrunch, Forbes"
    },
    {
      icon: Award,
      title: "Innovation ROI",
      description: "Previous sponsors reported 300% ROI through talent acquisition, partnerships, and breakthrough innovations",
      value: "300% ROI",
      metric: "Proven track record"
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Exclusive Title Partner",
      price: "$100,000+",
      gradient: "from-yellow-400 to-orange-400",
      features: [
        "🏆 Event naming rights: 'Hackfinity powered by [Your Company]'",
        "🎤 Keynote speaking opportunity to 10K+ attendees",
        "📺 Logo featured in all livestreams (500K+ views)",
        "🎯 Dedicated recruitment lounge with top 100 participants",
        "📰 Co-branded press releases in major tech publications",
        "🤝 Priority access to winning teams for investment/hiring",
        "📊 Exclusive analytics dashboard with participant insights",
        "🎪 Custom branded challenge track with $25K prize pool"
      ],
      highlighted: true,
      roi: "Expected 500% ROI based on talent acquisition alone"
    },
    {
      name: "Innovation Partner",
      price: "$50,000",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "🚀 Premium logo placement across all platforms",
        "👨‍💻 Host 2-hour technical workshop for participants",
        "🎁 Branded swag in every participant welcome kit",
        "📱 Featured sponsor spotlight in mobile app",
        "🤖 API/Platform integration showcase opportunity",
        "📈 Detailed engagement metrics and lead generation",
        "🏅 Present awards at closing ceremony"
      ],
      highlighted: false,
      roi: "Average 300% ROI through partnerships and hiring"
    },
    {
      name: "Growth Accelerator",
      price: "$25,000",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "💼 Logo on all digital marketing materials",
        "🎪 Booth space in virtual sponsor hall",
        "📧 Include message in participant communications",
        "🔗 Featured link on event website",
        "👥 Access to participant resume database",
        "📊 Basic analytics and engagement reports"
      ],
      highlighted: false,
      roi: "Typical 200% ROI through talent pipeline"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Partner With Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join the world's biggest Agentic AI Hackathon and be part of innovation history
          </p>
          
          {/* Urgency indicator */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="font-body text-red-300 font-semibold">Only 3 Title Partner Slots Remaining!</span>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Sponsor Hackfinity?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">
                      {benefit.value}
                    </div>
                    <h4 className="font-title text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="font-body text-gray-300 text-sm mb-3">
                      {benefit.description}
                    </p>
                    <div className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 rounded-full px-3 py-1">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Sponsorship Packages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, rotateY: tier.highlighted ? 0 : 3 }}
                className={`
                  group relative ${tier.highlighted ? 'md:scale-105' : ''}
                `}
              >
                <div className={`
                  relative p-8 rounded-3xl bg-gradient-to-br ${tier.gradient}
                  shadow-2xl border border-white/10 backdrop-blur-sm
                  ${tier.highlighted ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}
                  transform-gpu
                `}>
                  {/* Glow effect */}
                  <div className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-br ${tier.gradient}
                    opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300
                  `} />
                  
                  <div className="relative z-10">
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {tier.name}
                      </h4>
                      <div className="text-3xl font-bold text-white">
                        {tier.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 text-white/90">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2" />
                          <span className="font-body text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {tier.roi && (
                      <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-green-400 text-xs font-semibold mb-1">💰 ROI GUARANTEE</div>
                        <div className="text-green-300 text-sm font-medium">{tier.roi}</div>
                      </div>
                    )}
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-full font-semibold transition-colors duration-200 backdrop-blur-sm"
                    >
                      Choose {tier.name}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl mx-auto mb-6"
            >
              <Handshake className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="font-title text-4xl font-bold text-white mb-4">
              🚀 Secure Your Competitive Advantage Now
            </h3>
            <p className="font-body text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Don't let competitors capture the brightest AI talent. Join industry giants like Google, Microsoft, and OpenAI who partner with top hackathons to build their innovation pipeline.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">48 Hours</div>
                <div className="text-sm text-gray-300">To secure title partnership before competitors</div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-cyan-400">$2.5M+</div>
                <div className="text-sm text-gray-300">Combined value for title partners (exposure + talent)</div>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">15+</div>
                <div className="text-sm text-gray-300">Unicorn startups founded by hackathon alumni</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Become a Sponsor
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Download Sponsorship Kit
              </motion.button>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              Contact us at <span className="text-purple-400">sponsors@hackfinity.com</span> for custom packages
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorCTA;

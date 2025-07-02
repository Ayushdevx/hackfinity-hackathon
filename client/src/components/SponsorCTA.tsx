import { motion } from "framer-motion";
import { Star, Users, Globe, TrendingUp, Award, Handshake } from "lucide-react";

const SponsorCTA = () => {
  const benefits = [
    {
      icon: Users,
      title: "Access to Top Talent",
      description: "Connect with 1000+ skilled developers and innovators",
      value: "1000+"
    },
    {
      icon: Globe,
      title: "Global Exposure",
      description: "Reach international developers and tech communities",
      value: "Global"
    },
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      description: "Showcase your brand to the next generation of developers",
      value: "Premium"
    },
    {
      icon: Award,
      title: "Innovation Partnership",
      description: "Be associated with cutting-edge AI and tech innovation",
      value: "Exclusive"
    }
  ];

  const sponsorshipTiers = [
    {
      name: "Title Sponsor",
      price: "Contact Us",
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Logo on all marketing materials",
        "Opening ceremony speaking slot",
        "Dedicated booth space",
        "Judge panel participation",
        "Prize category naming rights",
        "Social media spotlight"
      ],
      highlighted: true
    },
    {
      name: "Platinum",
      price: "$15,000",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Premium logo placement",
        "Mentoring session hosting",
        "Swag bag inclusion",
        "Networking session access",
        "Prize distribution participation"
      ],
      highlighted: false
    },
    {
      name: "Gold",
      price: "$10,000",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Logo on event materials",
        "Social media mentions",
        "Swag distribution rights",
        "Participant database access"
      ],
      highlighted: false
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
            animate={{ pulse: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-red-300 font-semibold">Limited Sponsorship Slots Available</span>
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
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {benefit.description}
                    </p>
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
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-white/90">
                          <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
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
            
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Make History?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in creating the world's most impactful Agentic AI Hackathon. 
              Be part of innovation that shapes the future.
            </p>
            
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

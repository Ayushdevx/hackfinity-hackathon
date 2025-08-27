import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const PrizeShowcase = () => {
  const prizes = [
    {
      name: "Grand Prize",
      amount: "₹50,000",
      position: "1st Place",
      description: "Cash prize + 1:1 mentorship with industry leaders + Feature spotlight",
      icon: Trophy,
      gradient: "from-yellow-400 to-orange-500",
      glow: "shadow-yellow-500/50",
      benefits: [
        "₹50,000 cash",
        "1:1 mentorship with industry leaders",
        "Feature spotlight on HackOmatic's website",
        "Internship & PPO opportunities",
        "Recognition across HackOmatic networks"
      ]
    },
    {
      name: "Second Prize",
      amount: "₹25,000",
      position: "2nd Place", 
      description: "Cash prize + Premium AI toolkits & credits + Internship opportunities",
      icon: Medal,
      gradient: "from-gray-300 to-gray-500",
      glow: "shadow-gray-400/50",
      benefits: [
        "₹25,000 cash",
        "Premium AI toolkits & credits",
        "API credits & cloud compute",
        "Internship & PPO opportunities",
        "Recognition on website & community"
      ]
    },
    {
      name: "Third Prize",
      amount: "₹15,000",
      position: "3rd Place",
      description: "Cash prize + Curated mentorship package + Recognition",
      icon: Award,
      gradient: "from-amber-600 to-yellow-700",
      glow: "shadow-amber-500/50",
      benefits: [
        "₹15,000 cash",
        "Curated mentorship package",
        "AI experts guidance",
        "Internship & PPO opportunities",
        "Recognition on social platforms"
      ]
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
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Prize Pool
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ₹100,000 in total prizes awaiting the most innovative Agentic AI solutions
          </p>
        </motion.div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              className={`relative group p-8 rounded-2xl bg-gradient-to-br ${prize.gradient} ${prize.glow} shadow-2xl overflow-hidden`}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              {/* Prize Icon */}
              <div className="relative z-10 text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <prize.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{prize.name}</h3>
                <p className="text-4xl font-black text-white mb-2">{prize.amount}</p>
                <span className="text-white/80 font-medium">{prize.position}</span>
              </div>

              {/* Prize Benefits */}
              <div className="relative z-10 space-y-3">
                {prize.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * benefitIndex }}
                    className="flex items-center text-white/90 text-sm"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0" />
                    {benefit}
                  </motion.div>
                ))}
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-white/60 rounded-full animate-ping" />
              <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">🌟 All Winners Receive</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-purple-300">
                <div className="text-2xl mb-2">🎖️</div>
                <p className="text-sm">Digital Certificates</p>
              </div>
              <div className="text-cyan-300">
                <div className="text-2xl mb-2">🚀</div>
                <p className="text-sm">Startup Support</p>
              </div>
              <div className="text-pink-300">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-sm">Networking Access</p>
              </div>
              <div className="text-yellow-300">
                <div className="text-2xl mb-2">📺</div>
                <p className="text-sm">Media Coverage</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrizeShowcase;

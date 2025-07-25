import { motion } from "framer-motion";
import { Trophy, Users, Zap, Gift, Network, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: "Massive ₹100K+ Prize Pool",
      description: "Life-changing rewards including cash prizes, startup funding, job offers, and international recognition that can transform your career trajectory",
      gradient: "from-yellow-500 to-orange-500",
      stats: "₹100K+",
      delay: 0.1,
      highlight: true
    },
    {
      icon: Gift,
      title: "Premium Swag & Perks",
      description: "Exclusive limited-edition merchandise, latest tech gadgets, premium software licenses, and VIP access to future events",
      gradient: "from-pink-500 to-rose-500",
      stats: "Exclusive",
      delay: 0.2
    },
    {
      icon: Users,
      title: "World-Class Mentors",
      description: "Get guidance from CTOs of unicorn startups, AI researchers from top universities, and founders of billion-dollar companies",
      gradient: "from-blue-500 to-indigo-500",
      stats: "100+ Industry Leaders",
      delay: 0.3
    },
    {
      icon: Network,
      title: "Global Innovation Network",
      description: "Join an elite community of 10,000+ top developers, entrepreneurs, VCs, and innovators from 50+ countries",
      gradient: "from-green-500 to-emerald-500",
      stats: "10K+ Elite Network",
      delay: 0.4,
      highlight: true
    },
    {
      icon: Zap,
      title: "Next-Gen AI Challenges",
      description: "Tackle cutting-edge problems in AGI, autonomous systems, quantum computing, and breakthrough technologies shaping the future",
      gradient: "from-purple-500 to-violet-500",
      stats: "Breakthrough Tech",
      delay: 0.5
    },
    {
      icon: Rocket,
      title: "Unlimited Innovation Potential",
      description: "No restrictions on creativity - access to $1M+ worth of cloud credits, premium APIs, and experimental technologies",
      gradient: "from-cyan-500 to-blue-500",
      stats: "₹1M+ Resources",
      delay: 0.6,
      highlight: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
          <h2 className="font-title text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Hackfinity?
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate hackathon with unmatched opportunities and resources
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className={`
                relative p-3 sm:p-4 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${feature.gradient}
                shadow-2xl hover:shadow-3xl transition-all duration-300
                border border-white/10 backdrop-blur-sm
                transform-gpu perspective-1000
                aspect-square min-h-[160px] sm:min-h-[220px] md:min-h-[260px] max-h-[220px] sm:max-h-[260px] w-full flex flex-col
              `}>
                {/* Animated background glow */}
                <motion.div
                  className={`
                    absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient}
                    opacity-20 blur-xl transition-opacity duration-300
                  `}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="font-body text-white/60 text-xs sm:text-sm">Value</div>
                      <div className="font-title text-white font-bold text-xs sm:text-base">{feature.stats}</div>
                    </div>
                  </div>

                  <h3 className="font-title text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>

                  <p className="font-body text-white/90 text-xs sm:text-sm leading-snug">
                    {feature.title === "Massive ₹100K+ Prize Pool"
                      ? "Life-changing rewards: cash, funding, jobs, and global recognition."
                      : feature.title === "Premium Swag & Perks"
                      ? "Exclusive swag, tech gadgets, licenses, and VIP event access."
                      : feature.title === "World-Class Mentors"
                      ? "Guidance from CTOs, AI researchers, and unicorn founders."
                      : feature.title === "Global Innovation Network"
                      ? "Join 10,000+ top devs, VCs, and innovators from 50+ countries."
                      : feature.title === "Next-Gen AI Challenges"
                      ? "Tackle AGI, quantum, and breakthrough tech challenges."
                      : feature.title === "Unlimited Innovation Potential"
                      ? "No limits: $1M+ in credits, APIs, and experimental tech."
                      : feature.description}
                  </p>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${25 + i * 15}%`,
                      }}
                      animate={{
                        y: [-15, 15, -15],
                        x: [-5, 5, -5],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2.5 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="font-title text-3xl font-bold text-white mb-4">
              Ready to Experience the Ultimate Hackathon?
            </h3>
            <p className="font-body text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers in the most exciting Agentic AI Hackathon ever organized
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                window.open("https://hackfinityx.devpost.com", "_blank");
              }}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Register Now - It's Free!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;

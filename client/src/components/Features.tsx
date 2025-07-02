import { motion } from "framer-motion";
import { Trophy, Users, Zap, Gift, Network, Rocket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: "Huge Prize Pool",
      description: "Compete for substantial rewards and recognition that can launch your career",
      gradient: "from-yellow-500 to-orange-500",
      stats: "$50K+",
      delay: 0.1
    },
    {
      icon: Gift,
      title: "Amazing Swags",
      description: "Exclusive merchandise, gadgets, and goodies from our premium sponsors",
      gradient: "from-pink-500 to-rose-500",
      stats: "Premium",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Top Mentors",
      description: "Learn from industry experts and seasoned professionals",
      gradient: "from-blue-500 to-indigo-500",
      stats: "50+ Experts",
      delay: 0.3
    },
    {
      icon: Network,
      title: "Global Networking",
      description: "Connect with developers, entrepreneurs, and innovators worldwide",
      gradient: "from-green-500 to-emerald-500",
      stats: "1000+ Participants",
      delay: 0.4
    },
    {
      icon: Zap,
      title: "Cutting-edge Challenges",
      description: "Work on real-world problems with the latest technologies",
      gradient: "from-purple-500 to-violet-500",
      stats: "AI-Powered",
      delay: 0.5
    },
    {
      icon: Rocket,
      title: "Infinite Creative Freedom",
      description: "No limits on innovation - bring your wildest ideas to life",
      gradient: "from-cyan-500 to-blue-500",
      stats: "Unlimited",
      delay: 0.6
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Hackfinity?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the ultimate hackathon with unmatched opportunities and resources
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient}
                shadow-2xl hover:shadow-3xl transition-all duration-300
                border border-white/10 backdrop-blur-sm
                transform-gpu perspective-1000
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
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/60 text-sm">Value</div>
                      <div className="text-white font-bold text-lg">{feature.stats}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
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
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Ultimate Hackathon?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers in the most exciting Agentic AI Hackathon ever organized
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
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

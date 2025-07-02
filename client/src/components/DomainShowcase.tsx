import { motion } from "framer-motion";
import { Brain, Cpu, Link, Lightbulb, GraduationCap, DollarSign, Heart } from "lucide-react";

const DomainShowcase = () => {
  const domains = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Build intelligent systems that can learn, reason, and solve complex problems",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Create algorithms that improve automatically through experience",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Link,
      title: "Blockchain",
      description: "Develop decentralized applications and smart contracts",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      description: "Pioneer breakthrough solutions with collaborative development",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.4
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Transform education through technology and innovation",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5
    },
    {
      icon: DollarSign,
      title: "FinTech",
      description: "Revolutionize financial services with cutting-edge technology",
      gradient: "from-emerald-500 to-teal-500",
      delay: 0.6
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Improve lives through innovative healthcare solutions",
      gradient: "from-red-500 to-rose-500",
      delay: 0.7
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
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-title text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation Domains
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the cutting-edge fields where tomorrow's breakthrough solutions are born
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
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
                relative p-6 rounded-2xl bg-gradient-to-br ${domain.gradient} 
                shadow-2xl hover:shadow-3xl transition-all duration-300
                border border-white/10 backdrop-blur-sm
                transform-gpu perspective-1000
              `}>
                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${domain.gradient} 
                  opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300
                `} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <domain.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-title text-xl font-bold text-white mb-3">
                    {domain.title}
                  </h3>
                  
                  <p className="font-body text-white/90 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Start Building the Future
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DomainShowcase;

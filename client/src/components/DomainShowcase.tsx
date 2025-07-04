import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";

// Reusable 3D-Like Emoji Icon Component
interface EmojiIconProps {
  symbol: string;
  size?: string;
  color?: string;
  glow?: boolean;
  className?: string;
}

const EmojiIcon = ({ 
  symbol, 
  size = "text-5xl", 
  color = "text-purple-400", 
  glow = false,
  className = ""
}: EmojiIconProps) => {
  return (
    <div
      className={`${size} ${color} ${glow ? "drop-shadow-lg" : ""} ${className} transform transition-transform duration-300`}
      style={glow ? { 
        textShadow: "0 0 20px rgba(147, 51, 234, 0.8), 0 4px 6px rgba(0, 0, 0, 0.2)",
        filter: "drop-shadow(0 0 10px rgba(147, 51, 234, 0.6))"
      } : {
        textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
      }}
    >
      {symbol}
    </div>
  );
};

// 3D Icon Components
const AI3DIcon = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <Sphere args={[0.8, 32, 32]}>
      <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.2} />
    </Sphere>
    <Sphere args={[0.4, 16, 16]} position={[0, 0, 0.5]}>
      <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.3} />
    </Sphere>
  </Float>
);

const ML3DIcon = () => (
  <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
    <Box args={[1.2, 1.2, 0.3]}>
      <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.2} />
    </Box>
    <Box args={[0.8, 0.8, 0.6]} position={[0.3, 0.3, 0.2]}>
      <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.3} />
    </Box>
  </Float>
);

const Blockchain3DIcon = () => (
  <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
    <Torus args={[0.8, 0.3, 8, 16]}>
      <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.2} />
    </Torus>
    <Sphere args={[0.2, 8, 8]} position={[0.8, 0, 0]}>
      <meshStandardMaterial color="#059669" emissive="#059669" emissiveIntensity={0.4} />
    </Sphere>
  </Float>
);

const Innovation3DIcon = () => (
  <Float speed={2.2} rotationIntensity={2} floatIntensity={2}>
    <Sphere args={[0.6, 32, 32]}>
      <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
    </Sphere>
    {[...Array(6)].map((_, i) => (
      <Box
        key={i}
        args={[0.1, 0.4, 0.1]}
        position={[
          Math.cos((i * Math.PI * 2) / 6) * 0.8,
          Math.sin((i * Math.PI * 2) / 6) * 0.8,
          0
        ]}
        rotation={[0, 0, (i * Math.PI * 2) / 6]}
      >
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.2} />
      </Box>
    ))}
  </Float>
);

const DomainShowcase = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-18T09:00:00Z').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const domains = [
    {
      emoji: "🧠",
      title: "Artificial Intelligence",
      description: "Build intelligent systems that learn and adapt",
      gradient: "from-purple-500 to-pink-500",
      component3D: AI3DIcon
    },
    {
      emoji: "⚙️",
      title: "Machine Learning",
      description: "Create algorithms that improve through experience",
      gradient: "from-blue-500 to-cyan-500",
      component3D: ML3DIcon
    },
    {
      emoji: "🔗",
      title: "Blockchain",
      description: "Develop decentralized solutions for tomorrow",
      gradient: "from-green-500 to-emerald-500",
      component3D: Blockchain3DIcon
    },
    {
      emoji: "💡",
      title: "Open Innovation",
      description: "Collaborate on groundbreaking open-source projects",
      gradient: "from-yellow-500 to-orange-500",
      component3D: Innovation3DIcon
    },
    {
      emoji: "🎓",
      title: "EdTech",
      description: "Transform education with technology",
      gradient: "from-indigo-500 to-purple-500",
      component3D: AI3DIcon
    },
    {
      emoji: "📈",
      title: "FinTech",
      description: "Revolutionize financial services",
      gradient: "from-emerald-500 to-teal-500",
      component3D: ML3DIcon
    },
    {
      emoji: "🩺",
      title: "Healthcare",
      description: "Innovate solutions for better health outcomes",
      gradient: "from-red-500 to-rose-500",
      component3D: Blockchain3DIcon
    },
    {
      emoji: "✨",
      title: "Your Domain",
      description: "Bring your unique ideas to life",
      gradient: "from-violet-500 to-purple-500",
      component3D: Innovation3DIcon
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black py-24 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.1),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with countdown */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="font-title text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 sm:mb-8 px-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation Domains
            </span>
          </motion.h2>
          <motion.p 
            className="font-body text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Explore cutting-edge technologies where breakthrough solutions are born
          </motion.p>
          
          {/* Enhanced Countdown Timer with Interactive Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative bg-gradient-to-r from-purple-900/60 via-pink-900/60 to-cyan-900/60 backdrop-blur-xl rounded-3xl p-4 sm:p-10 border border-purple-500/30 max-w-5xl mx-auto shadow-2xl overflow-hidden mx-4"
          >
            {/* Animated background overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-cyan-400/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    i % 3 === 0 ? 'bg-purple-400' :
                    i % 3 === 1 ? 'bg-pink-400' : 'bg-cyan-400'
                  } opacity-60`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, -40],
                    x: [0, Math.random() * 30 - 15],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Calendar className="w-10 h-10 text-purple-400 mr-4" />
                </motion.div>
                <motion.h3 
                  className="font-title text-3xl md:text-4xl font-bold text-white"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    🔥 EPIC COUNTDOWN TO INNOVATION
                  </span>
                </motion.h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                {[
                  { label: 'Days', value: timeLeft.days, color: 'purple', emoji: '📅' },
                  { label: 'Hours', value: timeLeft.hours, color: 'pink', emoji: '⏰' },
                  { label: 'Minutes', value: timeLeft.minutes, color: 'cyan', emoji: '⚡' },
                  { label: 'Seconds', value: timeLeft.seconds, color: 'orange', emoji: '🚀' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-3xl p-6 mb-4 shadow-2xl group-hover:shadow-${item.color}-500/50 transition-all duration-500 relative overflow-hidden border border-${item.color}-400/30`}
                      animate={{ 
                        boxShadow: [
                          `0 10px 25px -5px rgba(168, 85, 247, 0.3)`,
                          `0 20px 40px -10px rgba(168, 85, 247, 0.5)`,
                          `0 10px 25px -5px rgba(168, 85, 247, 0.3)`
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {/* Rotating shine effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        style={{ 
                          background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)`
                        }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className="text-2xl mb-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {item.emoji}
                        </motion.div>
                        <motion.div 
                          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
                          animate={{ 
                            scale: item.label === 'Seconds' ? [1, 1.15, 1] : [1, 1.05, 1],
                            color: item.label === 'Seconds' ? ['#ffffff', '#fbbf24', '#ffffff'] : '#ffffff'
                          }}
                          transition={{ 
                            duration: item.label === 'Seconds' ? 1 : 2.5, 
                            repeat: Infinity 
                          }}
                        >
                          {item.value.toString().padStart(2, '0')}
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className={`text-${item.color}-300 font-bold text-lg uppercase tracking-wider group-hover:text-white transition-colors duration-300`}
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {item.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10 text-center"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div 
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌟 October 18, 2025 • 9:00 AM UTC 🌟
                </motion.div>
                <div className="text-cyan-400 text-base sm:text-xl font-semibold mb-2">
                  The Moment That Will Define AI's Future
                </div>
                <motion.div 
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ 
                    boxShadow: [
                      '0 10px 20px rgba(251, 191, 36, 0.3)',
                      '0 15px 30px rgba(251, 191, 36, 0.5)',
                      '0 10px 20px rgba(251, 191, 36, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>🎯 Secure Your Legendary Spot</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Domain Grid with 3D Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 px-4"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              <div className={`
                relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${domain.gradient}/10
                backdrop-blur-xl border border-white/10 shadow-2xl
                group-hover:border-white/20 transition-all duration-500 overflow-hidden h-80
              `}>
                {/* Emoji Icon with 3D Background */}
                <div className="relative h-24 mb-6 flex items-center justify-center">
                  {/* 3D Background Effect */}
                  <div className="absolute inset-0 opacity-30">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <domain.component3D />
                    </Canvas>
                  </div>
                  
                  {/* Emoji Icon Foreground */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 15,
                      transition: { duration: 0.3 }
                    }}
                    className="relative z-10"
                  >
                    <EmojiIcon 
                      symbol={domain.emoji}
                      size="text-6xl md:text-7xl"
                      glow={true}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-title text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="font-body text-gray-300 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.p 
            className="font-body text-xl text-purple-300 mb-8"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🔗 Join the movement ↓
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-xl shadow-lg transition-all duration-300"
          >
            🚀 Register Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainShowcase;
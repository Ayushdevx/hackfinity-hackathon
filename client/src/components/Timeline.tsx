import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, FileText, Code, Lightbulb, Trophy, PartyPopper, Clock, CheckCircle, Star } from "lucide-react";
import { useRef, useState } from "react";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const events = [
    {
      icon: Calendar,
      title: "Early Bird Registration",
      date: "September 1, 2025",
      time: "12:00 AM UTC",
      description: "Secure your spot with exclusive early bird perks, mentor previews, and premium swag packages",
      status: "upcoming",
      gradient: "from-blue-500 to-cyan-500",
      countdown: "120 days left",
      perks: ["🎁 Premium Swag Kit", "🚀 Early Mentor Access", "💎 VIP Discord Channel"]
    },
    {
      icon: Users,
      title: "Team Formation & Networking",
      date: "October 1 - 15, 2025",
      time: "Continuous",
      description: "Join exclusive Discord channels, attend virtual meetups, and form dream teams with AI matching algorithm",
      status: "upcoming",
      gradient: "from-green-500 to-emerald-500",
      countdown: "90 days left",
      perks: ["🤝 AI-Powered Team Matching", "🎪 Virtual Networking Events", "💬 Exclusive Discord Access"]
    },
    {
      icon: FileText,
      title: "Challenge Tracks Release",
      date: "October 16, 2025",
      time: "6:00 PM UTC",
      description: "Unlock 8 revolutionary challenge tracks: AGI, Quantum AI, Neural Interfaces, and more cutting-edge frontiers",
      status: "upcoming",
      gradient: "from-purple-500 to-violet-500",
      countdown: "77 days left",
      perks: ["🧠 8 Challenge Tracks", "🎯 $100K Prize Distribution", "🚀 Startup Founder Judges"]
    },
    {
      icon: Code,
      title: "🔥 MAIN EVENT: 24H Hack",
      date: "October 18, 2025",
      time: "9:00 AM UTC",
      description: "The ultimate 24-hour coding marathon with live mentorship, real-time leaderboards, and breakthrough innovations",
      status: "highlight",
      gradient: "from-orange-500 to-red-500",
      countdown: "75 days left",
      perks: ["⚡ Live Coding Streams", "🏆 Real-time Leaderboard", "🎮 Surprise Challenges"]
    },
    {
      icon: Lightbulb,
      title: "Expert Mentorship Hub",
      date: "Throughout Event",
      time: "24/7 Available",
      description: "Access to 100+ industry leaders including OpenAI researchers, unicorn founders, and VC partners",
      status: "ongoing",
      gradient: "from-yellow-500 to-orange-500",
      countdown: "Always Active",
      perks: ["🧠 100+ Expert Mentors", "💡 1-on-1 Sessions", "📈 VC Office Hours"]
    },
    {
      icon: Trophy,
      title: "Grand Finale Judging",
      date: "October 19, 2025",
      time: "10:00 AM - 2:00 PM UTC",
      description: "Present to legendary judges: Sam Altman, Demis Hassabis, and top VCs. Live-streamed to 100K+ viewers",
      status: "upcoming",
      gradient: "from-pink-500 to-rose-500",
      countdown: "74 days left",
      perks: ["🌟 Celebrity Judges", "📺 100K+ Live Viewers", "💰 Instant Funding Offers"]
    },
    {
      icon: PartyPopper,
      title: "Victory Celebration",
      date: "October 19, 2025",
      time: "4:00 PM UTC",
      description: "Epic closing ceremony with winner announcements, startup launch opportunities, and exclusive after-party",
      status: "upcoming",
      gradient: "from-indigo-500 to-purple-500",
      countdown: "74 days left",
      perks: ["🎊 Global Celebration", "🚀 Startup Launches", "🎉 Exclusive After-party"]
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black py-24 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -120],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="font-title text-6xl md:text-7xl font-bold text-white mb-8"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Epic Timeline
            </span>
          </motion.h2>
          <motion.p 
            className="font-body text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Your legendary journey from idea to breakthrough. Every moment crafted for maximum impact and innovation.
          </motion.p>
          
          {/* Interactive progress bar */}
          <motion.div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-400 font-semibold">Journey Progress</span>
              <span className="text-cyan-400 font-semibold">75 Days to Glory</span>
            </div>
            <div className="bg-gray-800/50 rounded-full p-1 backdrop-blur-sm border border-purple-500/20 relative overflow-hidden">
              <motion.div 
                className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative"
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/20 rounded-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Interactive Timeline */}
        <div className="relative">
          {/* Animated central timeline */}
          <motion.div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full"
            style={{ height: "100%" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.3
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Animated Timeline Dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-20 shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  animate={{ 
                    boxShadow: hoveredIndex === index 
                      ? "0 0 30px rgba(168, 85, 247, 0.8)" 
                      : "0 0 15px rgba(168, 85, 247, 0.4)"
                  }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-full bg-white"
                    animate={{ 
                      scale: hoveredIndex === index ? [1, 1.2, 1] : 1 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Enhanced Event Card */}
                <div className={`
                  w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }
                `}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 3 : -3,
                      z: 50
                    }}
                    transition={{ duration: 0.3 }}
                    className={`
                      relative p-8 rounded-3xl bg-gradient-to-br ${event.gradient}/20
                      backdrop-blur-xl border border-white/10 shadow-2xl
                      group overflow-hidden
                      ${event.status === 'highlight' ? 'ring-2 ring-yellow-400/50' : ''}
                    `}
                  >
                    {/* Glow effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={hoveredIndex === index ? { opacity: 0.3 } : { opacity: 0 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div 
                          className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <event.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex flex-col items-end">
                          <div className={`
                            px-4 py-2 rounded-full text-sm font-bold mb-2
                            ${event.status === 'highlight' ? 'bg-yellow-400 text-black' : 
                              event.status === 'ongoing' ? 'bg-green-400 text-black' : 
                              'bg-white/20 text-white'
                            }
                          `}>
                            {event.status === 'highlight' ? '🔥 MAIN EVENT' :
                             event.status === 'ongoing' ? '⚡ LIVE NOW' : '🚀 UPCOMING'}
                          </div>
                          <div className="text-xs text-cyan-400 font-semibold bg-cyan-500/10 px-3 py-1 rounded-full">
                            {event.countdown}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="font-title text-2xl font-bold text-white mb-4"
                        animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                      >
                        {event.title}
                      </motion.h3>
                      
                      {/* Date & Time */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-white font-semibold">
                            {event.date}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-white/80 text-sm">
                            {event.time}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="font-body text-white/90 text-base leading-relaxed mb-6">
                        {event.description}
                      </p>

                      {/* Perks */}
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-purple-400 mb-3">💎 EXCLUSIVE PERKS:</div>
                        <div className="grid grid-cols-1 gap-2">
                          {event.perks.map((perk, perkIndex) => (
                            <motion.div
                              key={perkIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: perkIndex * 0.1 }}
                              className="flex items-center space-x-2 text-white/80 text-sm"
                            >
                              <Star className="w-3 h-3 text-yellow-400" />
                              <span>{perk}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating micro-particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [-10, -30],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            🗓️ Add to Calendar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
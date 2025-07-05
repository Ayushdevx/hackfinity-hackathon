import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "framer-motion";
import { Calendar, Users, FileText, Code, Lightbulb, Trophy, PartyPopper, Clock, CheckCircle, Star, Zap, Crown, Rocket, Heart, Coffee, Brain, Timer, ArrowRight, Sparkles, Target, Award, MessageCircle, Share2, Eye, Play } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [completedEvents, setCompletedEvents] = useState<number[]>([]);
  const [activeEvent, setActiveEvent] = useState<number>(3); // Current main event
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [countdownMode, setCountdownMode] = useState<'main' | 'next'>('main');
  const [interactionCount, setInteractionCount] = useState(0);
  const controls = useAnimation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Real-time countdown
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

  const events = [
    {
      icon: Calendar,
      title: "🚀 Early Bird Registration",
      date: "September 1, 2025",
      time: "12:00 AM UTC",
      description: "Secure your spot with exclusive early bird perks, mentor previews, and premium swag packages worth $200+",
      status: "upcoming",
      gradient: "from-blue-500 to-cyan-500",
      countdown: "120 days left",
      perks: ["🎁 Premium Swag Kit ($200 value)", "🚀 Early Mentor Access", "💎 VIP Discord Channel", "🎯 Priority Team Matching"],
      participants: "2,500+ registered",
      highlight: "💫 50% OFF until Sept 15th!"
    },
    {
      icon: Users,
      title: "🤝 Team Formation & Networking",
      date: "October 1 - 15, 2025",
      time: "Continuous",
      description: "Join exclusive Discord channels, attend virtual meetups, and form dream teams with our revolutionary AI matching algorithm",
      status: "upcoming",
      gradient: "from-green-500 to-emerald-500",
      countdown: "90 days left",
      perks: ["🧠 AI-Powered Team Matching", "🎪 Virtual Networking Events", "💬 Exclusive Discord Access", "🌟 Mentor Speed Dating"],
      participants: "5,000+ networking",
      highlight: "🔥 AI matches teams with 95% success rate!"
    },
    {
      icon: FileText,
      title: "🎯 Challenge Tracks Release",
      date: "October 16, 2025",
      time: "6:00 PM UTC",
      description: "Unlock 8 revolutionary challenge tracks: AGI, Quantum AI, Neural Interfaces, and more cutting-edge frontiers that will shape the future",
      status: "upcoming",
      gradient: "from-purple-500 to-violet-500",
      countdown: "77 days left",
      perks: ["🧠 8 Challenge Tracks", "🎯 $100K Prize Distribution", "🚀 Startup Founder Judges", "💡 Exclusive Problem Sets"],
      participants: "10,000+ participants",
      highlight: "💰 Biggest prize pool in hackathon history!"
    },
    {
      icon: Code,
      title: "🔥 MAIN EVENT: 24H Hack",
      date: "October 18, 2025",
      time: "9:00 AM UTC",
      description: "The ultimate 24-hour coding marathon with live mentorship, real-time leaderboards, breakthrough innovations, and legendary moments",
      status: "highlight",
      gradient: "from-orange-500 to-red-500",
      countdown: "75 days left",
      perks: ["⚡ Live Coding Streams", "🏆 Real-time Leaderboard", "🎮 Surprise Challenges", "🌟 Celebrity Guest Judges"],
      participants: "10,000+ hackers",
      highlight: "🌍 Livestreamed to 500K+ viewers worldwide!"
    },
    {
      icon: Lightbulb,
      title: "🧠 Expert Mentorship Hub",
      date: "Throughout Event",
      time: "24/7 Available",
      description: "Access to 100+ industry legends including OpenAI researchers, unicorn founders, VCs, and the brightest minds in AI",
      status: "ongoing",
      gradient: "from-yellow-500 to-orange-500",
      countdown: "Always Active",
      perks: ["🧠 100+ Expert Mentors", "💡 1-on-1 Sessions", "📈 VC Office Hours", "🚀 Instant Feedback"],
      participants: "Unlimited access",
      highlight: "🌟 Sam Altman confirmed as keynote mentor!"
    },
    {
      icon: Trophy,
      title: "👑 Grand Finale Judging",
      date: "October 19, 2025",
      time: "10:00 AM - 2:00 PM UTC",
      description: "Present to legendary judges: Sam Altman, Demis Hassabis, top VCs, and industry pioneers. Live-streamed to 100K+ viewers with instant funding offers",
      status: "upcoming",
      gradient: "from-pink-500 to-rose-500",
      countdown: "74 days left",
      perks: ["🌟 Celebrity Judges", "📺 100K+ Live Viewers", "💰 Instant Funding Offers", "🚀 Media Coverage"],
      participants: "Top 50 teams",
      highlight: "💎 $50K grand prize + accelerator spots!"
    },
    {
      icon: PartyPopper,
      title: "🎉 Victory Celebration",
      date: "October 19, 2025",
      time: "4:00 PM UTC",
      description: "Epic closing ceremony with winner announcements, startup launch opportunities, exclusive after-party, and the beginning of legendary stories",
      status: "upcoming",
      gradient: "from-indigo-500 to-purple-500",
      countdown: "74 days left",
      perks: ["🎊 Global Celebration", "🚀 Startup Launches", "🎉 Exclusive After-party", "🌟 Networking Gala"],
      participants: "All participants",
      highlight: "🥳 Party streamed across 10 cities worldwide!"
    }
  ];

  // Timeline progress calculation
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black py-24 relative overflow-hidden">
      {/* Enhanced magical background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.08),transparent_50%)]" />
      </div>
      {/* Magical animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 4 === 0 ? 'bg-purple-400' :
              i % 4 === 1 ? 'bg-cyan-400' :
              i % 4 === 2 ? 'bg-pink-400' : 'bg-yellow-400'
            } opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Magical shooting stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-8 bg-gradient-to-t from-transparent via-white to-transparent rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Epic Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center mb-24"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
              <Clock className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-title text-6xl md:text-8xl font-bold text-white mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Epic Journey
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </motion.h2>

          <motion.p 
            className="font-body text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your legendary journey from idea to breakthrough. Every moment crafted for maximum <span className="text-yellow-400 font-bold">impact</span> and <span className="text-cyan-400 font-bold">innovation</span>.
          </motion.p>

          {/* Live Countdown Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gradient-to-r from-red-900/30 via-orange-900/30 to-yellow-900/30 backdrop-blur-xl rounded-3xl p-8 border border-red-500/30 max-w-5xl mx-auto mb-12 relative overflow-hidden"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-red-400/10 via-orange-400/10 to-yellow-400/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold text-white mb-6 flex items-center justify-center space-x-3"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-8 h-8 text-yellow-400" />
                <span>🔥 MAIN EVENT COUNTDOWN</span>
                <Zap className="w-8 h-8 text-yellow-400" />
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Days', value: timeLeft.days, color: 'red' },
                  { label: 'Hours', value: timeLeft.hours, color: 'orange' },
                  { label: 'Minutes', value: timeLeft.minutes, color: 'yellow' },
                  { label: 'Seconds', value: timeLeft.seconds, color: 'green' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-3xl p-6 mb-3 shadow-2xl group-hover:shadow-${item.color}-500/25 transition-all duration-300 relative overflow-hidden`}>
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        style={{ 
                          background: `conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)`
                        }}
                      />
                      <motion.div 
                        className="text-4xl md:text-5xl font-bold text-white relative z-10"
                        animate={{ 
                          scale: item.label === 'Seconds' ? [1, 1.1, 1] : [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: item.label === 'Seconds' ? 1 : 2, 
                          repeat: Infinity 
                        }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </motion.div>
                    </div>
                    <div className={`text-${item.color}-300 font-bold text-lg uppercase tracking-wider group-hover:text-white transition-colors`}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8 text-center"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-cyan-400 font-bold text-xl mb-2">
                  October 18, 2025 • 9:00 AM UTC
                </div>
                <div className="text-purple-300 text-lg">
                  🌍 The moment that will change AI forever
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Interactive progress indicator */}
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-purple-400 font-bold text-lg">Journey Progress</span>
              <span className="text-cyan-400 font-bold text-lg">75 Days to Glory 🏆</span>
            </div>
            <div className="bg-gray-800/50 rounded-full p-2 backdrop-blur-sm border border-purple-500/30 relative overflow-hidden">
              <motion.div 
                className="h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full relative"
                initial={{ width: 0 }}
                whileInView={{ width: "45%" }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white/30 rounded-full"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              <span>📅 Registration</span>
              <span className="text-yellow-400 font-bold">🔥 Current</span>
              <span>🎉 Victory</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Interactive Timeline */}
        <div className="relative">
          {/* Animated central timeline */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full z-0"
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
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-20 shadow-lg"
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
                  w-full md:w-5/12 ml-0 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }
                `}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      rotateY: index % 2 === 0 ? 2 : -2,
                      z: 50
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
                    className={`
                      relative p-2 md:p-8 rounded-3xl bg-gradient-to-br ${event.gradient}/20
                      backdrop-blur-xl border border-white/10 shadow-2xl
                      group overflow-hidden cursor-pointer
                      ${event.status === 'highlight' ? 'ring-2 ring-yellow-400/50' : ''}
                      ${expandedEvent === index ? 'ring-2 ring-purple-400/50' : ''}
                      z-10 md:z-auto
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
                          className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 bg-white/10 rounded-2xl backdrop-blur-sm"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <event.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
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
                        className="font-title text-base md:text-2xl font-bold text-white mb-4"
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

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {expandedEvent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10 mt-6 border-t border-white/10 pt-6"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Additional Info */}
                            <div>
                              <h4 className="text-lg font-bold text-purple-300 mb-3 flex items-center">
                                <Target className="w-5 h-5 mr-2" />
                                Key Details
                              </h4>
                              <div className="space-y-2 text-white/80 text-sm">
                                <div className="flex items-center space-x-2">
                                  <Eye className="w-4 h-4 text-cyan-400" />
                                  <span>{event.participants}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MessageCircle className="w-4 h-4 text-green-400" />
                                  <span>Live chat & networking</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Share2 className="w-4 h-4 text-blue-400" />
                                  <span>Social media integration</span>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div>
                              <h4 className="text-lg font-bold text-purple-300 mb-3 flex items-center">
                                <Rocket className="w-5 h-5 mr-2" />
                                Quick Actions
                              </h4>
                              <div className="space-y-3">
                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2"
                                >
                                  <Play className="w-4 h-4" />
                                  <span>Set Reminder</span>
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="w-full bg-white/10 backdrop-blur text-white py-2 px-4 rounded-xl text-sm font-semibold border border-white/20 flex items-center justify-center space-x-2"
                                >
                                  <Share2 className="w-4 h-4" />
                                  <span>Share Event</span>
                                </motion.button>
                              </div>
                            </div>
                          </div>

                          {/* Highlight Banner */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-yellow-400/30"
                          >
                            <div className="flex items-center space-x-3">
                              <Sparkles className="w-6 h-6 text-yellow-400" />
                              <div>
                                <div className="text-yellow-300 font-bold text-lg">{event.highlight}</div>
                                <div className="text-white/70 text-sm">Don't miss this legendary opportunity!</div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Click to expand indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2"
                      animate={{ 
                        rotate: expandedEvent === index ? 180 : 0,
                        scale: hoveredIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 text-white/60" />
                    </motion.div>

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
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Star, Users, Globe, TrendingUp, Award, Handshake, Zap, Target, Rocket, Trophy, Crown, Diamond, CheckCircle2, ArrowRight, Sparkles, Heart, Brain, Code, Coffee, Eye, MessageCircle, Share2, ThumbsUp, Clock, DollarSign, TrendingDown, Percent } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const SponsorCTA = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [urgencyCounter, setUrgencyCounter] = useState(47);
  const [liveFeedback, setLiveFeedback] = useState(0);
  const [viewCount, setViewCount] = useState(12847);
  const controls = useAnimation();

  // Real-time urgency countdown
  useEffect(() => {
    const urgencyTimer = setInterval(() => {
      setUrgencyCounter(prev => prev > 0 ? prev - 1 : 24);
    }, 60000); // Decrease every minute

    return () => clearInterval(urgencyTimer);
  }, []);

  // Live engagement simulation
  useEffect(() => {
    const engagementTimer = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      setLiveFeedback(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);

    return () => clearInterval(engagementTimer);
  }, []);

  // Advanced micro-interactions
  const handleInteraction = useCallback(() => {
    setInteractionCount(prev => prev + 1);
    controls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 0.3 }
    });
  }, [controls]);

  // Animated stats counter
  const [stats, setStats] = useState({
    developers: 0,
    countries: 0,
    prizes: 0,
    roi: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        developers: 10000,
        countries: 75,
        prizes: 100000,
        roi: 500
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: Brain,
      title: "Elite Talent Pool Access",
      description: "Direct recruitment access to 10,000+ top-tier developers, AI researchers, and startup founders from MIT, Stanford, Google, and Microsoft",
      value: "10K+ Elite Talent",
      metric: "98% employed within 6 months",
      gradient: "from-purple-500 to-violet-600",
      animation: "pulse"
    },
    {
      icon: Globe,
      title: "Massive Global Reach",
      description: "Your brand showcased to 500K+ developers across 75+ countries through live streams, social media, and tech publications",
      value: "500K+ Reach",
      metric: "75+ countries",
      gradient: "from-blue-500 to-cyan-500",
      animation: "rotate"
    },
    {
      icon: Rocket,
      title: "Industry Leadership",
      description: "Position your company as a forward-thinking industry leader in AI innovation and developer ecosystem",
      value: "Thought Leadership",
      metric: "Featured in TechCrunch, Forbes",
      gradient: "from-emerald-500 to-teal-500",
      animation: "bounce"
    },
    {
      icon: Trophy,
      title: "Innovation ROI",
      description: "Previous sponsors reported 500% ROI through talent acquisition, partnerships, and breakthrough innovations",
      value: "500% ROI",
      metric: "Proven track record",
      gradient: "from-orange-500 to-red-500",
      animation: "shake"
    }
  ];

  const sponsorshipTiers = [
    {
      name: "🏆 Legendary Title Partner",
      price: "₹100,000+",
      originalPrice: "₹150,000",
      discount: "33% OFF",
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      tier: "legendary",
      icon: Crown,
      features: [
        "👑 Event naming rights: 'Hackfinity powered by [Your Company]'",
        "🎤 Keynote speaking opportunity to 10K+ attendees",
        "📺 Logo featured in all livestreams (500K+ views)",
        "🎯 Dedicated recruitment lounge with top 100 participants",
        "📰 Co-branded press releases in major tech publications",
        "🤝 Priority access to winning teams for investment/hiring",
        "📊 Exclusive analytics dashboard with participant insights",
        "🎪 Custom branded challenge track with $25K prize pool",
        "🚀 VIP access to startup pitches and demo sessions",
        "💎 Premium swag design and distribution",
        "🌟 Exclusive mentor dinner with industry legends",
        "📱 Custom mobile app feature with your branding"
      ],
      highlighted: true,
      roi: "Expected 500% ROI based on talent acquisition alone",
      badge: "MOST EXCLUSIVE",
      spots: "Only 1 Available",
      urgency: "🔥 Last 24 hours at this price!",
      nextPrice: "₹120,000",
      savings: "₹50,000"
    },
    {
      name: "⚡ Innovation Partner",
      price: "₹50,000",
      originalPrice: "₹65,000",
      discount: "23% OFF",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      tier: "innovation",
      icon: Zap,
      features: [
        "🚀 Premium logo placement across all platforms",
        "👨‍💻 Host 2-hour technical workshop for participants",
        "🎁 Branded swag in every participant welcome kit",
        "📱 Featured sponsor spotlight in mobile app",
        "🤖 API/Platform integration showcase opportunity",
        "📈 Detailed engagement metrics and lead generation",
        "🏅 Present awards at closing ceremony",
        "💬 Dedicated Discord channel for recruitment",
        "🎯 Social media takeover opportunity",
        "📊 Weekly progress reports during event"
      ],
      highlighted: false,
      roi: "Average 400% ROI through partnerships and hiring",
      badge: "MOST POPULAR",
      spots: "Only 2 Left",
      urgency: "⚡ Price increases in 72 hours",
      nextPrice: "₹55,000",
      savings: "₹15,000"
    },
    {
      name: "🌟 Growth Accelerator",
      price: "$25,000",
      originalPrice: "$35,000",
      discount: "29% OFF",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      tier: "growth",
      icon: Target,
      features: [
        "💼 Logo on all digital marketing materials",
        "🎪 Booth space in virtual sponsor hall",
        "📧 Include message in participant communications",
        "🔗 Featured link on event website",
        "👥 Access to participant resume database",
        "📊 Basic analytics and engagement reports",
        "🎯 Social media feature opportunities",
        "🎁 Basic swag inclusion",
        "📝 Job posting board access"
      ],
      highlighted: false,
      roi: "Typical 250% ROI through talent pipeline",
      badge: "BEST VALUE",
      spots: "8 Available",
      urgency: "🎯 Limited time early bird pricing",
      nextPrice: "₹30,000",
      savings: "₹10,000"
    }
  ];

  const perks = [
    { icon: Heart, label: "Love from Community", value: "100K+" },
    { icon: Code, label: "Code Repositories", value: "1000+" },
    { icon: Coffee, label: "Coffee Consumed", value: "50K Cups" },
    { icon: Sparkles, label: "Innovation Moments", value: "∞" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,110,199,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.2),transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Live Engagement Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-green-500/30"
        >
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <span className="text-green-400 font-semibold">LIVE</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <Eye className="w-4 h-4" />
              <motion.span
                key={viewCount}
                initial={{ scale: 1.2, color: "#10b981" }}
                animate={{ scale: 1, color: "#d1d5db" }}
                transition={{ duration: 0.3 }}
              >
                {viewCount.toLocaleString()}
              </motion.span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <ThumbsUp className="w-4 h-4" />
              <motion.span
                key={liveFeedback}
                initial={{ scale: 1.2, color: "#3b82f6" }}
                animate={{ scale: 1, color: "#d1d5db" }}
                transition={{ duration: 0.3 }}
              >
                {liveFeedback}
              </motion.span>
            </div>
            <div className="flex items-center space-x-1 text-orange-400">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">{urgencyCounter}h left</span>
            </div>
          </div>
        </motion.div>

        {/* Epic Header with animations */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <Crown className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-8xl font-bold text-white mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Partner With
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Legends
            </span>
          </motion.h2>

          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            🚀 Join the world's most <span className="text-yellow-400 font-bold">EPIC</span> Agentic AI Hackathon and become part of innovation history
          </motion.p>
          
          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { label: "Elite Developers", value: stats.developers, suffix: "+", color: "purple" },
              { label: "Countries", value: stats.countries, suffix: "+", color: "cyan" },
              { label: "Prize Pool", value: `$${stats.prizes.toLocaleString()}`, suffix: "", color: "green" },
              { label: "Average ROI", value: stats.roi, suffix: "%", color: "orange" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`bg-gradient-to-br from-${stat.color}-500/20 to-${stat.color}-600/20 backdrop-blur-xl rounded-2xl p-6 border border-${stat.color}-500/30`}
              >
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + index * 0.1, type: "spring", bounce: 0.6 }}
                >
                  <div className="text-2xl font-bold text-white mb-2">
                    {stat.label === "Prize Pool" ? <span className="text-green-400">{stat.value}</span> : stat.value + stat.suffix}
                  </div>
                </motion.div>
                <div className="text-gray-300 font-semibold text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency indicator with enhanced animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.3)",
                "0 0 40px rgba(239, 68, 68, 0.6)",
                "0 0 20px rgba(239, 68, 68, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-full px-6 py-3 backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div 
              className="w-3 h-3 bg-red-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="font-body text-red-300 font-bold text-lg">🔥 Only 1 Title Partner Slot Remaining!</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-orange-400/10"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        {/* Interactive Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="mb-24"
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            🌟 Why Sponsor <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Hackfinity?</span>
          </motion.h3>
          
          <motion.p
            className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Unlock unprecedented access to the world's most talented AI innovators and position your brand at the forefront of technology
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  z: 50
                }}
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
                className="group relative cursor-pointer"
              >
                <div className={`
                  relative p-8 rounded-3xl bg-gradient-to-br ${benefit.gradient}/20 
                  border-2 border-transparent hover:border-white/20 
                  backdrop-blur-xl shadow-2xl transition-all duration-500 h-full
                  ${hoveredBenefit === index ? 'shadow-2xl shadow-purple-500/25' : ''}
                `}>
                  {/* Animated glow effect */}
                  <motion.div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${benefit.gradient} opacity-0 blur-xl transition-opacity duration-500`}
                    animate={{ 
                      opacity: hoveredBenefit === index ? 0.3 : 0,
                      scale: hoveredBenefit === index ? 1.1 : 1
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Animated icon */}
                    <motion.div 
                      className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl mx-auto mb-6 shadow-xl`}
                      animate={
                        benefit.animation === "pulse" ? { scale: [1, 1.1, 1] } :
                        benefit.animation === "rotate" ? { rotate: [0, 360] } :
                        benefit.animation === "bounce" ? { y: [0, -10, 0] } :
                        benefit.animation === "shake" ? { x: [-2, 2, -2, 2, 0] } : {}
                      }
                      transition={{ 
                        duration: benefit.animation === "rotate" ? 3 : 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      <benefit.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Value highlight */}
                    <motion.div 
                      className="text-3xl font-bold text-white mb-3 text-center"
                      animate={{ 
                        color: hoveredBenefit === index ? "#fbbf24" : "#ffffff"
                      }}
                    >
                      {benefit.value}
                    </motion.div>
                    
                    <h4 className="font-title text-xl font-bold text-white mb-4 text-center group-hover:text-yellow-300 transition-colors">
                      {benefit.title}
                    </h4>
                    
                    <p className="font-body text-gray-300 text-sm leading-relaxed mb-4 text-center">
                      {benefit.description}
                    </p>
                    
                    {/* Interactive metric badge */}
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`inline-block text-xs font-bold bg-gradient-to-r ${benefit.gradient} text-white rounded-full px-4 py-2 shadow-lg`}>
                        ✨ {benefit.metric}
                      </div>
                    </motion.div>

                    {/* Hover reveal effect */}
                    <AnimatePresence>
                      {hoveredBenefit === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                        >
                          <div className="text-yellow-400 text-xs font-bold text-center">
                            🚀 Click to explore more details
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive perk indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={perk.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, type: "spring", bounce: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <perk.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-purple-400 group-hover:text-yellow-400 transition-colors">
                  {perk.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {perk.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Revolutionary Sponsorship Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="mb-24"
        >
          <motion.h3 
            className="text-5xl md:text-6xl font-bold text-white text-center mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            🏆 Choose Your <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Legend</span> Tier
          </motion.h3>
          
          <motion.p
            className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Each tier designed to maximize your impact and ROI in the AI innovation ecosystem
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {sponsorshipTiers.map((tier, index) => (
              <div className="relative flex flex-col items-center">
                {tier.highlighted && (
                  <motion.div 
                    className="absolute -top-6 left-0 z-30"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-xl">
                      <Crown className="w-4 h-4" />
                      <span>{tier.badge}</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </motion.div>
                )}
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 100, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    bounce: 0.4
                  }}
                  whileHover={{ 
                    scale: tier.highlighted ? 1.02 : 1.05, 
                    rotateY: 5,
                    z: 100
                  }}
                  onClick={() => setSelectedTier(selectedTier === index ? null : index)}
                  className={`
                    group relative cursor-pointer flex flex-col w-full
                    ${tier.highlighted ? 'lg:scale-110' : ''}
                    ${selectedTier === index ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''}
                  `}
                >
                  <div className={`
                    relative p-8 rounded-3xl bg-gradient-to-br ${tier.gradient}/20
                    border-2 ${selectedTier === index ? 'border-yellow-400' : 'border-white/10'} 
                    backdrop-blur-xl shadow-2xl transition-all duration-500 flex flex-col h-full
                  `}>
                    {/* Animated background glow */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 blur-xl`}
                      animate={{ 
                        opacity: selectedTier === index ? 0.4 : tier.highlighted ? 0.2 : 0.1,
                        scale: selectedTier === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Availability indicator */}
                    <motion.div 
                      className="absolute top-4 right-4 z-20"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className={`
                        px-3 py-1 rounded-full text-xs font-bold
                        ${tier.tier === 'legendary' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          tier.tier === 'innovation' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'}
                      `}>
                        🔥 {tier.spots}
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Icon with animation */}
                      <motion.div 
                        className={`flex items-center justify-center w-20 h-20 bg-gradient-to-br ${tier.gradient} rounded-3xl mx-auto mb-6 shadow-xl`}
                        animate={{ 
                          rotate: selectedTier === index ? 360 : 0,
                          scale: selectedTier === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.3, rotate: 180 }}
                      >
                        <tier.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div className="text-center mb-8">
                        <motion.h4 
                          className="text-2xl md:text-3xl font-bold text-white mb-3"
                          animate={{ 
                            color: selectedTier === index ? "#fbbf24" : "#ffffff"
                          }}
                        >
                          {tier.name}
                        </motion.h4>
                        
                        {/* Pricing with discount */}
                        <div className="relative">
                          {/* Discount badge */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                          >
                            {tier.discount}
                          </motion.div>
                          
                          {/* Original price (crossed out) */}
                          <motion.div 
                            className="text-lg text-gray-400 line-through mb-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 0.3 }}
                          >
                            {tier.originalPrice}
                          </motion.div>
                          
                          {/* Current price */}
                          <motion.div 
                            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                            animate={{ 
                              scale: selectedTier === index ? 1.15 : 1,
                              textShadow: selectedTier === index ? "0 0 20px rgba(16, 185, 129, 0.5)" : "none"
                            }}
                          >
                            {tier.price}
                          </motion.div>
                          
                          {/* Savings indicator */}
                          <motion.div 
                            className="text-sm text-green-400 font-semibold mt-1"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            💰 Save {tier.savings}
                          </motion.div>
                        </div>
                        
                        {/* Urgency indicator */}
                        <motion.div
                          className="mt-4 p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl"
                          animate={{ 
                            backgroundColor: ["rgba(239, 68, 68, 0.1)", "rgba(239, 68, 68, 0.2)", "rgba(239, 68, 68, 0.1)"],
                            borderColor: ["rgba(248, 113, 113, 0.3)", "rgba(248, 113, 113, 0.5)", "rgba(248, 113, 113, 0.3)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="text-red-300 text-sm font-bold flex items-center justify-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {tier.urgency}
                          </div>
                          <div className="text-red-200 text-xs mt-1">
                            Next price: {tier.nextPrice} (+{((parseInt(tier.nextPrice.replace(/[^0-9]/g, '')) - parseInt(tier.price.replace(/[^0-9]/g, ''))) / 1000).toFixed(0)}k more)
                          </div>
                        </motion.div>
                        
                        {/* Availability */}
                        <motion.div
                          className="mt-3 text-center"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="text-yellow-400 text-sm font-bold">
                            {tier.spots}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Features list with animations */}
                      <motion.ul 
                        className="space-y-3 mb-16 pb-8"
                        animate={{ height: selectedTier === index ? "auto" : "200px" }}
                      >
                        {tier.features.slice(0, selectedTier === index ? tier.features.length : 5).map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start space-x-3 text-white/90"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            whileHover={{ x: 5, color: "#fbbf24" }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-white rounded-full flex-shrink-0 mt-2"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                            />
                            <span className="font-body text-sm leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                        {tier.features.length > 5 && selectedTier !== index && (
                          <motion.li 
                            className="text-yellow-400 font-semibold text-sm cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                          >
                            + {tier.features.length - 5} more amazing features...
                          </motion.li>
                        )}
                      </motion.ul>
                      {/* ROI guarantee - above CTA button */}
                      <motion.div 
                        className="mt-20 mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="relative z-10">
                          <div className="text-green-400 text-xs font-bold mb-2 flex items-center">
                            <Trophy className="w-4 h-4 mr-2" />
                            💰 ROI GUARANTEE
                          </div>
                          <div className="text-green-300 text-sm font-semibold">{tier.roi}</div>
                        </div>
                      </motion.div>
                      {/* CTA Button - always last */}
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setInteractionCount(prev => prev + 1);
                          if (interactionCount >= 2) {
                            setShowConfetti(true);
                            setTimeout(() => setShowConfetti(false), 3000);
                          }
                        }}
                        className={`
                          w-full py-4 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden
                          ${selectedTier === index 
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/25' 
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                          }
                        `}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Choose {tier.name.split(' ')[1]}</span>
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Comparison note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm mb-4">
              💡 <span className="text-yellow-400 font-semibold">Pro Tip:</span> Click on any tier to explore all features in detail
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm">All tiers include basic benefits • Custom packages available</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Epic CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-center relative"
        >
          {/* Confetti effect */}
          <AnimatePresence>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={{ 
                      scale: [0, 1, 0], 
                      rotate: [0, 360, 720],
                      y: [-100, 100],
                      x: [0, Math.random() * 200 - 100]
                    }}
                    transition={{ duration: 3, ease: "easeOut" }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-cyan-900/30 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-3xl mx-auto mb-8 shadow-2xl"
            >
              <Handshake className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h3 
              className="font-title text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              🚀 Secure Your Competitive Advantage
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                RIGHT NOW
              </span>
            </motion.h3>
            
            <motion.p 
              className="font-body text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Don't let competitors capture the brightest AI talent. Join industry giants like <span className="text-yellow-400 font-bold">Google</span>, <span className="text-blue-400 font-bold">Microsoft</span>, and <span className="text-green-400 font-bold">OpenAI</span> who partner with top hackathons to build their innovation pipeline.
            </motion.p>
            
            {/* Urgency metrics */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { 
                  icon: "⏰", 
                  value: "48 Hours", 
                  label: "To secure title partnership before competitors",
                  color: "purple",
                  urgency: true
                },
                { 
                  icon: "💰", 
                  value: "$2.5M+", 
                  label: "Combined value for title partners (exposure + talent)",
                  color: "cyan" 
                },
                { 
                  icon: "🦄", 
                  value: "15+", 
                  label: "Unicorn startups founded by hackathon alumni",
                  color: "green" 
                }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", bounce: 0.4 }}
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  className={`
                    relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300
                    ${metric.urgency 
                      ? 'bg-red-500/10 border-red-500/30 hover:border-red-400/50' 
                      : `bg-${metric.color}-500/10 border-${metric.color}-500/30 hover:border-${metric.color}-400/50`
                    }
                  `}
                >
                  {metric.urgency && (
                    <motion.div 
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="text-white text-xs">!</span>
                    </motion.div>
                  )}
                  
                  <div className="text-4xl mb-2">{metric.icon}</div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                    metric.urgency ? 'text-red-400' : `text-${metric.color}-400`
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">{metric.label}</div>
                  
                  {metric.urgency && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-2xl"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-4 sm:px-10 py-2 sm:py-5 rounded-full font-bold text-base sm:text-xl shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Become a Legend Sponsor</span>
                  <Diamond className="w-6 h-6" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#fbbf24" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-4 sm:px-10 py-2 sm:py-5 rounded-full font-bold text-base sm:text-xl transition-all duration-300 backdrop-blur-sm group"
              >
                <span className="flex items-center space-x-3">
                  <span>Download Sponsorship Kit</span>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Contact info with animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="relative"
            >
              <p className="text-gray-400 text-lg mb-4">
                💬 Contact us at <motion.span 
                  className="text-yellow-400 font-bold cursor-pointer"
                  whileHover={{ scale: 1.1, color: "#f59e0b" }}
                  onClick={() => setInteractionCount(prev => prev + 1)}
                >
                  sponsors@hackfinity.com
                </motion.span> for custom packages
              </p>
              
              <motion.div 
                className="text-purple-400 text-sm"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡ Lightning-fast response guaranteed within 2 hours
              </motion.div>
            </motion.div>

            {/* Final encouragement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl"
            >
              <div className="flex items-center justify-center space-x-3 text-yellow-400 font-bold text-lg">
                <Trophy className="w-6 h-6" />
                <span>Join the AI Revolution. Shape the Future. Become a Legend.</span>
                <Trophy className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorCTA;

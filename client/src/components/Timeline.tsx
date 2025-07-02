import { motion } from "framer-motion";
import { Calendar, Users, FileText, Code, Lightbulb, Trophy, PartyPopper } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      icon: Calendar,
      title: "Registration Opens",
      date: "September 1, 2025",
      time: "12:00 AM",
      description: "Sign up and secure your spot in the world's biggest Agentic AI Hackathon",
      status: "upcoming",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Formation",
      date: "October 1 - 15, 2025",
      time: "Ongoing",
      description: "Connect with like-minded developers and form your dream team",
      status: "upcoming",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Problem Statements Release",
      date: "October 16, 2025",
      time: "6:00 PM",
      description: "Discover the cutting-edge challenges and choose your battlefield",
      status: "upcoming",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Code,
      title: "Hacking Phase Begins",
      date: "October 18, 2025",
      time: "9:00 AM",
      description: "24 hours of intense coding, innovation, and breakthrough solutions",
      status: "highlight",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Lightbulb,
      title: "Mentoring Sessions",
      date: "Throughout Event",
      time: "On-demand",
      description: "Get guidance from industry experts and seasoned professionals",
      status: "ongoing",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trophy,
      title: "Judging & Evaluation",
      date: "October 19, 2025",
      time: "10:00 AM - 2:00 PM",
      description: "Present your solutions to expert judges and showcase your innovation",
      status: "upcoming",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: PartyPopper,
      title: "Closing Ceremony",
      date: "October 19, 2025",
      time: "4:00 PM",
      description: "Celebrate achievements, announce winners, and network with the community",
      status: "upcoming",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Event Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your journey from registration to victory - every milestone mapped out
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 rounded-full opacity-30" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10 shadow-lg shadow-purple-500/50" />

                {/* Content card */}
                <div className={`
                  w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }
                `}>
                  <motion.div
                    whileHover={{ 
                      rotateY: index % 2 === 0 ? 2 : -2,
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                    className={`
                      relative p-6 rounded-2xl bg-gradient-to-br ${event.gradient}
                      shadow-2xl border border-white/10 backdrop-blur-sm
                      transform-gpu
                      ${event.status === 'highlight' ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}
                    `}
                  >
                    {/* Glow effect */}
                    <div className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br ${event.gradient}
                      opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300
                    `} />
                    
                    <div className="relative z-10">
                      {/* Icon and status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm">
                          <event.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`
                          px-3 py-1 rounded-full text-xs font-semibold
                          ${event.status === 'highlight' ? 'bg-yellow-400 text-black' : 
                            event.status === 'ongoing' ? 'bg-green-400 text-black' : 
                            'bg-white/20 text-white'
                          }
                        `}>
                          {event.status === 'highlight' ? 'Main Event' :
                           event.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                        </div>
                      </div>

                      {/* Title and date */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-white/90 font-semibold">
                          {event.date}
                        </span>
                        <span className="text-white/70 text-sm">
                          {event.time}
                        </span>
                      </div>
                      
                      <p className="text-white/90 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/30 rounded-full"
                          style={{
                            left: `${20 + i * 25}%`,
                            top: `${30 + i * 20}%`,
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
                  </motion.div>
                </div>

                {/* Empty space for opposite side on desktop */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Miss Out on This Epic Journey!
            </h3>
            <p className="text-gray-300 mb-8">
              Mark your calendars and prepare for 24 hours of innovation, learning, and fun
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Add to Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;

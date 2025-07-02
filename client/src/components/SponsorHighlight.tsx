import { motion } from "framer-motion";
import { ExternalLink, Star, Award } from "lucide-react";

const SponsorHighlight = () => {
  const currentSponsors = [
    {
      name: "Devfolio",
      logo: "https://assets.devfolio.co/hackathons/e9f6f175e5b14db7bb7b72ae46b31ddc/brand/logo.jpg",
      tier: "Platinum",
      description: "Leading platform for developer communities and hackathons",
      website: "https://devfolio.co",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "ETHIndia",
      logo: "https://ethindia.co/assets/images/ethindia-logo.png",
      tier: "Platinum", 
      description: "India's largest Ethereum hackathon and developer community",
      website: "https://ethindia.co",
      gradient: "from-purple-600 to-pink-600"
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
              Our Amazing Sponsors
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with industry leaders to make Hackfinity an unforgettable experience
          </p>
        </motion.div>

        {/* Current Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentSponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`
                relative p-8 rounded-3xl bg-gradient-to-br ${sponsor.gradient}
                shadow-2xl hover:shadow-3xl transition-all duration-300
                border border-white/10 backdrop-blur-sm
                transform-gpu
              `}>
                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-br ${sponsor.gradient}
                  opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300
                `} />
                
                <div className="relative z-10">
                  {/* Tier Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                      <Award className="w-4 h-4 text-yellow-300" />
                      <span className="text-white font-semibold text-sm">{sponsor.tier}</span>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Logo Placeholder - Using styled div since we can't load external images */}
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span className="text-white font-bold text-2xl">
                      {sponsor.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {sponsor.name}
                  </h3>
                  
                  <p className="text-white/90 mb-6">
                    {sponsor.description}
                  </p>

                  <motion.a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/20 rounded-full"
                      style={{
                        left: `${30 + i * 20}%`,
                        top: `${40 + i * 15}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.2, 0.6, 0.2],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsor Benefits Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Why Our Sponsors Love Hackfinity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Talented Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24hrs</div>
              <div className="text-gray-300">Intensive Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">Global</div>
              <div className="text-gray-300">Reach & Impact</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorHighlight;

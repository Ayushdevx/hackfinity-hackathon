import { motion } from "framer-motion";

// Reusable 3D-Like Emoji Icon Component
interface EmojiIconProps {
  symbol: string;
  size?: string;
  color?: string;
  glow?: boolean;
  className?: string;
}

export const EmojiIcon = ({ 
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

// Reusable Domain Card Component
interface DomainCardProps {
  icon: string;
  title: string;
  description: string;
  gradient?: string;
  className?: string;
}

export const DomainCard = ({ 
  icon, 
  title, 
  description, 
  gradient = "from-purple-500 to-pink-500",
  className = ""
}: DomainCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className={`group relative ${className}`}
    >
      <div className={`
        relative p-8 rounded-3xl bg-gradient-to-br ${gradient}/10
        backdrop-blur-xl border border-white/10 shadow-2xl
        group-hover:border-white/20 transition-all duration-500 overflow-hidden h-80
      `}>
        {/* Emoji Icon */}
        <div className="relative h-24 mb-6 flex items-center justify-center">
          <motion.div
            whileHover={{ 
              scale: 1.2, 
              rotateY: 15,
              transition: { duration: 0.3 }
            }}
            className="relative z-10"
          >
            <EmojiIcon 
              symbol={icon}
              size="text-6xl md:text-7xl"
              glow={true}
              className="group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-title text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <p className="font-body text-gray-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover glow effect */}
        <motion.div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  );
};

// Pre-defined Domain Types with Emoji Mappings
export const DOMAIN_ICONS = {
  ai: "🧠",
  ml: "⚙️", 
  blockchain: "🔗",
  innovation: "💡",
  edtech: "🎓",
  fintech: "📈",
  healthcare: "🩺",
  cybersecurity: "🔒",
  iot: "📡",
  gaming: "🎮",
  robotics: "🤖",
  ar_vr: "🥽",
  cloud: "☁️",
  mobile: "📱",
  web3: "🌐",
  sustainability: "🌱"
} as const;

// Helper function to get emoji for domain
export const getDomainEmoji = (domain: keyof typeof DOMAIN_ICONS): string => {
  return DOMAIN_ICONS[domain];
};

// Example usage patterns:
/*
// Basic usage:
<EmojiIcon symbol="🧠" size="text-6xl" glow={true} />

// Domain card usage:
<DomainCard 
  icon="🧠" 
  title="Artificial Intelligence" 
  description="Build intelligent systems that learn and adapt"
  gradient="from-purple-500 to-pink-500"
/>

// Pre-defined domain usage:
<EmojiIcon symbol={getDomainEmoji("ai")} size="text-5xl" />

// Multiple cards in a grid:
const domains = [
  { icon: getDomainEmoji("ai"), title: "AI", description: "..." },
  { icon: getDomainEmoji("blockchain"), title: "Blockchain", description: "..." }
];

{domains.map(domain => (
  <DomainCard key={domain.title} {...domain} />
))}
*/

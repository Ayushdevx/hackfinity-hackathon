import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

// Custom X (Twitter) Icon
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Custom SVGs for WhatsApp and Discord
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.486.486 0 0 0-.515.243c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.524 0 12.51 12.51 0 0 0-.617-1.25.486.486 0 0 0-.515-.242 19.736 19.736 0 0 0-3.432 1.27.458.458 0 0 0-.21.18C2.533 8.013 1.68 11.58 2.013 15.105a.485.485 0 0 0 .18.326c1.44 1.05 2.84 1.687 4.197 2.105a.485.485 0 0 0 .527-.18c.324-.444.612-.91.86-1.398a.486.486 0 0 0-.27-.677c-.454-.172-.885-.38-1.3-.617a.486.486 0 0 1-.048-.8c.09-.07.18-.14.27-.21a.486.486 0 0 1 .51-.04c2.7 1.23 5.6 1.23 8.29 0a.486.486 0 0 1 .51.04c.09.07.18.14.27.21a.486.486 0 0 1-.048.8c-.415.237-.846.445-1.3.617a.486.486 0 0 0-.27.677c.248.488.536.954.86 1.398a.485.485 0 0 0 .527.18c1.357-.418 2.757-1.055 4.197-2.105a.485.485 0 0 0 .18-.326c.36-3.67-.6-7.237-2.69-10.556a.458.458 0 0 0-.21-.18zM8.02 14.432c-.789 0-1.432-.724-1.432-1.615 0-.89.634-1.614 1.432-1.614.807 0 1.45.724 1.432 1.614 0 .89-.634 1.615-1.432 1.615zm7.96 0c-.789 0-1.432-.724-1.432-1.615 0-.89.634-1.614 1.432-1.614.807 0 1.45.724 1.432 1.614 0 .89-.634 1.615-1.432 1.615z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: XIcon,
      url: "https://x.com/hackfinityx?t=1BJYWF8K22FikWcPbHsMAg&s=08",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/company/hackfinity/",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/hackfinity.ai?igsh=NTc4MTIwNjQ2YQ==",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "WhatsApp",
      icon: WhatsappIcon,
      url: "https://chat.whatsapp.com/BDgwUlp2qlu4snhbJpw07r",
      color: "from-green-500 to-green-400"
    },
    {
      name: "Discord",
      icon: DiscordIcon,
      url: "https://discord.gg/DhC2eVem",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hackfinity.innovation@gmail.com",
      href: "mailto:hackfinity.innovation@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9305183418",
      href: "tel:+919305183418"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Domains", href: "#domains" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-purple-950/30 to-black border-t border-purple-500/20 py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-16">

          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 mb-8 sm:mb-0"
          >
            <motion.h3
              className="font-title text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Hackfinity
              </span>
            </motion.h3>
            <p className="font-body text-base sm:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">
              The world's biggest Agentic AI Hackathon. Where infinite creativity meets infinite possibilities.
            </p>
            <div className="text-purple-300 font-semibold text-base sm:text-lg mb-6 sm:mb-8 text-center sm:text-left">
              🚀 October 18, 2025 • Infinite Fun. Infinite Creativity
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 sm:space-x-6 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`
                    relative p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${social.color}/20
                    border border-white/10 backdrop-blur-sm
                    hover:border-white/30 group transition-all duration-300
                  `}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-purple-300 transition-colors" />
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links + Get in Touch: horizontal on mobile, grid/vertical on sm+ */}
          <div className="sm:col-span-2 flex flex-row gap-1 sm:grid sm:grid-cols-2 sm:gap-0 w-full">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 sm:mb-0 flex-1"
            >
              <h4 className="font-title text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-3 sm:space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 10, color: "#a855f7" }}
                      className="font-body text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group text-base sm:text-lg"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 group-hover:bg-cyan-400 transition-colors" />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1"
            >
              <h4 className="font-title text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h4>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <motion.a
                      href={contact.href}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 min-w-0"
                    >
                      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl">
                        <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-purple-300 font-semibold">{contact.label}</div>
                        <div className="font-body text-white group-hover:text-purple-300 transition-colors break-all text-[10px] sm:text-xs max-w-xs md:max-w-sm lg:max-w-md">
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Join Movement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-full px-4 sm:px-8 py-3 sm:py-4 border border-purple-500/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 20px rgba(168, 85, 247, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="font-body text-base sm:text-xl text-purple-300 font-semibold">
              🔗 Join the movement ↓
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-purple-500/20 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="font-body text-xs sm:text-base text-gray-400 text-center sm:text-left">
              © 2025 Hackfinity. All rights reserved. Built with 💜 for the future of AI.
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
              </motion.div>
              <span className="font-body text-purple-300 text-xs sm:text-sm">
                Powered by Innovation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
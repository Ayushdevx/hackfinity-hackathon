import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
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
    <footer className="bg-gradient-to-t from-black via-purple-950/30 to-black border-t border-purple-500/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mb-16">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <motion.h3 
              className="font-title text-4xl font-bold text-white mb-4 pr-10"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Hackfinity
              </span>
            </motion.h3>
            <p className="font-body text-xl text-gray-300 mb-6 leading-relaxed">
              The world's biggest Agentic AI Hackathon. Where infinite creativity meets infinite possibilities.
            </p>
            <div className="text-purple-300 font-semibold text-lg mb-8">
              🚀 October 18, 2025 • Infinite Fun. Infinite Creativity
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
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
                    relative p-4 rounded-2xl bg-gradient-to-br ${social.color}/20
                    border border-white/10 backdrop-blur-sm
                    hover:border-white/30 group transition-all duration-300
                  `}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs md:pl-10 md:pr-7"
          >
            <h4 className="font-title text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
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
                    className="font-body text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors" />
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
            className="md:pl-10 items-start justify-self-start"
          >
            <h4 className="font-title text-xl font-bold text-white mb-6 md:pl-10">Get in Touch</h4>
            <div className="space-y-6 md:pl-10">
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
                    className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 w-full max-w-xs md:max-w-sm"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-purple-300 font-semibold">{contact.label}</div>
                      {/* Show email in two lines on mobile, single line on md+ */}
                      {contact.label === 'Email' && typeof contact.value === 'string' && contact.value.includes('@') ? (
                        <>
                          <span className="block md:hidden">
                            {contact.value.split('@')[0]}<br />@{contact.value.split('@')[1]}
                          </span>
                          <span className="hidden md:inline">{contact.value}</span>
                        </>
                      ) : (
                        contact.value
                      )}
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Join Movement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-full px-8 py-4 border border-purple-500/30"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 20px rgba(168, 85, 247, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="font-body text-xl text-purple-300 font-semibold">
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
          className="border-t border-purple-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-body text-gray-400 text-center md:text-left">
              © 2025 Hackfinity. All rights reserved. Built with 💜 for the future of AI.
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
              >
                <div className="w-4 h-4 bg-white rounded-full" />
              </motion.div>
              <span className="font-body text-purple-300 text-sm">
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
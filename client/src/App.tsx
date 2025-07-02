import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero3D from "./components/Hero3D";
import DomainShowcase from "./components/DomainShowcase";
import SponsorHighlight from "./components/SponsorHighlight";
import Timeline from "./components/Timeline";
import Features from "./components/Features";
import SponsorCTA from "./components/SponsorCTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useAudio } from "./lib/stores/useAudio";
import "@fontsource/inter";

function App() {
  const [loading, setLoading] = useState(true);
  const { setBackgroundMusic } = useAudio();

  useEffect(() => {
    // Initialize background music
    const music = new Audio("/sounds/background.mp3");
    music.loop = true;
    music.volume = 0.3;
    setBackgroundMusic(music);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setBackgroundMusic]);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white"
              >
                Loading Hackfinity...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navigation />
          
          {/* Hero Section with 3D Canvas */}
          <section id="hero" className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-purple-900">
            {/* 3D Background Canvas */}
            <div className="absolute inset-0 z-0 opacity-70">
              <Canvas
                camera={{
                  position: [0, 0, 8],
                  fov: 45,
                  near: 0.1,
                  far: 1000
                }}
                gl={{
                  antialias: true,
                  powerPreference: "high-performance",
                  alpha: true
                }}
                dpr={[1, 2]}
              >
                <Suspense fallback={null}>
                  <Hero3D />
                </Suspense>
              </Canvas>
            </div>
            
            {/* Main Overlay UI */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none pt-20">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
                  className="relative"
                >
                  <h1 className="font-title text-7xl md:text-9xl font-black text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    HACKFINITY
                  </h1>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-20 blur-xl rounded-full"></div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="mb-6"
                >
                  <p className="font-title text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text mb-2">
                    Infinite Fun. Infinite Creativity.
                  </p>
                  <div className="font-body flex items-center justify-center space-x-2 text-xl text-cyan-400">
                    <span>⚡</span>
                    <span>From Caffeine to Code – Experience the Best</span>
                    <span>⚡</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="mb-6"
                >
                  <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-4">
                    <p className="font-title text-4xl md:text-5xl font-bold text-white mb-2">
                      October 18, 2025
                    </p>
                    <div className="font-body flex items-center justify-center space-x-4 text-lg">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full animate-pulse">🔴 LIVE</span>
                      <span className="text-gray-300">24 Hours of Pure Innovation</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="mb-8"
                >
                  <p className="font-title text-2xl md:text-3xl font-bold text-white mb-2">
                    🌍 The World's Biggest Agentic AI Hackathon
                  </p>
                  <div className="font-body flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30">
                      🚀 ₹100K+ Prize Pool
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30">
                      🎯 10K+ Participants
                    </span>
                    <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full border border-pink-500/30">
                      🏆 100+ Mentors
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector("#domains");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 group"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>🚀</span>
                      <span>Join the Revolution</span>
                      <span>🚀</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector("#sponsor-cta");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    💼 Become a Sponsor
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Domain Showcase */}
          <section id="domains" className="relative">
            <DomainShowcase />
          </section>

          {/* Current Sponsors */}
          <section id="sponsors" className="relative">
            <SponsorHighlight />
          </section>

          {/* Features */}
          <section id="features" className="relative">
            <Features />
          </section>

          {/* Timeline */}
          <section id="timeline" className="relative">
            <Timeline />
          </section>

          {/* Sponsor CTA */}
          <section id="sponsor-cta" className="relative">
            <SponsorCTA />
          </section>

          {/* Contact */}
          <section id="contact" className="relative">
            <ContactForm />
          </section>

          {/* Enhanced Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

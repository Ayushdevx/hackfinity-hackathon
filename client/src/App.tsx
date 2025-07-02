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
          <section id="hero" className="relative h-screen">
            <Canvas
              camera={{
                position: [0, 0, 8],
                fov: 45,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                powerPreference: "high-performance"
              }}
              dpr={[1, 2]}
            >
              <color attach="background" args={["#0a0a0a"]} />
              <Suspense fallback={null}>
                <Hero3D />
              </Suspense>
            </Canvas>
            
            {/* Fallback Overlay UI */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  HACKFINITY
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-2xl text-purple-300 mb-4"
                >
                  Infinite Fun. Infinite Creativity.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="text-xl text-cyan-400 mb-6"
                >
                  From Caffeine to Code – Experience the Best
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  October 18, 2025
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="text-lg text-gray-300 mb-8"
                >
                  The World's Biggest Agentic AI Hackathon
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector("#domains");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 pointer-events-auto"
                >
                  Explore the Future
                </motion.button>
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

          {/* Footer */}
          <footer className="bg-black border-t border-purple-900/20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  Hackfinity
                </motion.h3>
                <p className="text-purple-400 mb-6">
                  The world's biggest Agentic AI Hackathon
                </p>
                <p className="text-gray-400 text-sm">
                  © 2025 Hackfinity. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;

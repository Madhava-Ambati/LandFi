import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import "./output.css";
import Logo from "./landfi_app_svg.svg";


const LandingPage = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  useLayoutEffect(() => {
    
    if (window.location.pathname === "/" && !window.location.hash) {
      // First, jump to the Features section instantly (simulating /#features behavior)
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "instant" });
      }

      // Then, after a short delay, smoothly scroll to the top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100); // Adjust delay for a natural feel
    }

    document.title = "LandFi - Smart Real Estate Contracts";

    // Hide scrollbar for WebKit browsers (Chrome, Safari)
    const style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar { display: none; }`;
    document.head.appendChild(style);

    // Scroll to top on page load
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans relative overflow-x-hidden" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      {/* Static Logo with Shadow */}
      <motion.div 
        className="absolute top z-50 -left-6 w-40 md:w-60"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          rotate: [0, 5, -5, 5, -5, 0], // Quick shake/jiggle effect
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      >
        <img 
          src={Logo} 
          alt="LandFi Logo" 
          className="h-32 md:h-32 w-auto object-contain shadow-lg shadow-primary/50"
        />
    </motion.div>



<motion.nav 
  className="relative flex justify-between items-center px-10 py-6 z-40 bg-black w-full"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
>
  {/* Left Logo Placeholder (Optional, remove if not needed) */}


  {/* Centered Navigation Links */}
  <div className="absolute left-1/2 transform -translate-x-1/2 top-11 hidden md:flex space-x-8 text-lg font-semibold">
    <a href="#features" className="hover:text-primary transition">Features</a>
    <a href="#about" className="hover:text-primary transition">About</a>
    <a href="#contact" className="hover:text-primary transition">Contact</a>
  </div>

  {/* Right-Aligned "Get Started" Button */}
  <motion.button 
    className="ml-auto bg-primary px-6 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition shadow-lg shadow-primary/50"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
    style={{ fontFamily: "'Quicksand', sans-serif" }}
  >
    Get started
  </motion.button>
</motion.nav>

      {/* Hero Section */}
      <motion.header 
        className="text-center py-24 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }} 
        key={Math.random()} // Forces re-render on scroll up/down
        style={{ fontFamily: "'Quicksand', sans-serif",  fontWeight: "550" }} // Apply new font
      >
        <h2 className="text-8xl font-regular max-w-5xl mx-auto leading-tight">
          <span className="text-primary">Real Estate Investing</span> made simple
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Own fractional shares of prime real estate with as little as ₹1 Lakh. No high capital, just smart investing.
        </p>
        <motion.button 
          className="mt-6 bg-primary px-8 py-3 rounded-lg text-mg font-semibold hover:bg-white hover:text-black transition shadow-lg shadow-primary/50"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          Start investing
        </motion.button>
      </motion.header>


      {/* Features Section */}
      <motion.section 
        id="features" 
        className="py-20 px-10 bg-white text-black text-center"
        
      >
        
        <motion.h3 
          id="choose"
          className="text-5xl font-regular" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Trigger animation only once
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: "500"  }}
        >
          Why choose LandFi?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
          {[
            "Fractional Ownership", 
            "High Liquidity", 
            "Expert-Curated Properties",
            "Global Access", 
            "Transparent Transactions", 
            "Diverse Investment Options"
          ].map((title, index) => (
            <motion.div 
              key={index} // Use a stable key instead of Math.random()
              className="p-8 rounded-lg shadow-lg bg-gray-100 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }} // Trigger animation only once
              style={{ willChange: 'transform, opacity', transform: "translate3d(0,0,0)"}}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }} // Trigger animation only once
                style={{ willChange: 'transform, opacity', transform: "translate3d(0,0,0)"}}
              >
                <h4 className="text-2xl font-semibold">{title}</h4>
                <p className="text-gray-600 mt-2">
                  {index === 0 
                    ? "Invest in real estate without needing large capital with our trusted community." 
                    : index === 1 
                    ? "Buy and sell shares instantly with our blockchain-powered marketplace." 
                    : index === 2
                    ? "Get access to the best real estate assets, handpicked for maximum returns."
                    : index === 3
                    ? "Invest in properties across the globe with ease."
                    : index === 4
                    ? "Enjoy fully transparent and secure transactions."
                    : "Diversify your portfolio with a wide range of investment options."
                  }
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 px-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
        viewport={{ once: false }}
      >
        <motion.h3 
          className="text-5xl font-bold" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: "easeOut" } }}
          viewport={{ once: false }}
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: "400"  }} 
        >
          About LandFi
        </motion.h3>
        <motion.p 
          className="text-gray-400 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
          viewport={{ once: false }}
        >
          LandFi is transforming real estate investment with fractional ownership, high liquidity, and expert-selected properties. 
          Join thousands of investors in reshaping the future of wealth-building.
        </motion.p>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
        viewport={{ once: false }}
        style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: "400" }}
      >
        <h3 className="text-5xl font-regular">Start Your Investment Journey</h3>
        <p className="text-gray-400 mt-2">Join thousands of smart investors today.</p>
        <motion.button 
          className="mt-6 bg-primary px-8 py-3 rounded-lg text-mg font-semibold hover:bg-white hover:text-black transition shadow-lg shadow-primary/50" // Added shadow
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          Get started now
        </motion.button>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-10">
        <p>© 2024 LandFi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
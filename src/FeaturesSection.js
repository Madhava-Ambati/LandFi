import React, { useRef } from "react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const sectionRef = useRef(null);

  return (
    <motion.section 
      id="features" 
      className="py-20 px-10 bg-white text-black text-center"
      ref={sectionRef}
      style={{ perspective: 1000 }}
    >
      <motion.h3 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        style={{ 
          willChange: 'transform, opacity', 
          transform: 'translate3d(0,0,0)', 
          backfaceVisibility: 'hidden' 
        }}
      >
        Why Choose LandFi?
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
          <FeatureCard key={index} title={title} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

// ✅ Define FeatureCard inside FeaturesSection.js
const FeatureCard = ({ title, index }) => {
  return (
    <motion.div 
      className="p-8 rounded-lg shadow-lg bg-gray-100 transition transform-gpu hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, delay: 0.2 + index * 0.2, ease: "easeOut" }}
      style={{ 
        willChange: 'transform, opacity', 
        transform: 'translate3d(0,0,0)', 
        backfaceVisibility: 'hidden', 
        minHeight: "180px", 
        display: "block" 
      }}
    >
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-gray-600 mt-2">
        {index === 0 
          ? "Invest in real estate without needing large capital." 
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
  );
};

export default FeaturesSection;

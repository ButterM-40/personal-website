import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = `
    relative px-4 py-2 rounded-lg text-base font-semibold
    transition-all duration-300 ease-in-out
    ${active 
      ? 'text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/25' 
      : 'text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-sm'
    }
  `;

  return (
    <button onClick={selectTab} className={buttonClasses}>
      {children}
      {active && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/50 to-cyan-500/50 animate-pulse blur opacity-50"></span>
      )}
    </button>
  );
};

export default TabButton;
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <button 
      onClick={toggleTheme}
      style={{
        position:"fixed",
        top: "0.2rem",
        right: "2rem",
        zIndex: 1000,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px",
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Toggle theme">
        {theme === "dark" ? (
          <Sun size={28} color="#fbbf24"/>
        ) : (
          <Moon size={28} color="#1f2937"/>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

import React, { useState } from "react";
import "./theme-button.css";

function ThemeButton() {
  console.log("toggle button");

  const [theme, setTheme] = useState("theme-light");

  const toggleTheme = () => {
    const newTheme = theme === "theme-light" ? "theme-dark" : "theme-light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === "theme-light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}

export default ThemeButton;

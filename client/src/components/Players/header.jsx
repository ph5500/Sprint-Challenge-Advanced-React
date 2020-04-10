import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
// import useDarkMode from "../../hooks/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-btn">
      <div data-testid="header" onClick={toggleMode} className="toggle">
        <span></span>Toggle za Dark Mode
      </div>
    </div>
  );
};

export default Header;

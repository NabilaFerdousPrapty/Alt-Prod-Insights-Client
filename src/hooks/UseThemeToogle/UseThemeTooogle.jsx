import { useState, useEffect } from "react";

const useThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "sunset";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "sunset" ? "autumn" : "sunset"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useThemeToggle;

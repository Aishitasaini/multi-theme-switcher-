import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeDropdown = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: "theme1", label: "🌞 Light" },
    { id: "theme2", label: "🌙 Dark" },
    { id: "theme3", label: "📼 Retro" },
  ] as const;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (themeId: typeof themes[number]["id"]) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {themes.find(t => t.id === theme)?.label || "Select Theme"}
      </button>
      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {themes.map((t) => (
          <li key={t.id}>
            <button
              className={`dropdown-item ${theme === t.id ? "active" : ""}`}
              onClick={() => handleSelect(t.id)}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeDropdown;

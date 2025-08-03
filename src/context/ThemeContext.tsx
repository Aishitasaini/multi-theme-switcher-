
import { createContext, useEffect, useState } from "react";

type ThemeType = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "theme1",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    if (savedTheme) {
      setThemeState(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

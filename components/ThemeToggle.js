import { useContext } from "react";
import { ThemeContext } from "./themeContext";

import Sun from "./SVG/Sun";
import Moon from "./SVG/Moon";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        >
          <Sun />
        </span>
      ) : (
        <span
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        >
          <Moon />
        </span>
      )}
    </div>
  );
}

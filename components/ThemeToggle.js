import { useContext } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        >
          Light
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        >
          Dark
        </button>
      )}
    </div>
  );
}

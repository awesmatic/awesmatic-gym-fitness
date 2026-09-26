import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-100 text-gray-500 transition duration-300 hover:border-primary-500 hover:text-primary-500 dark:border-dark-200 dark:text-dark-text dark:hover:border-primary-300 dark:hover:text-primary-300"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed
        bottom-6
        left-6
        z-50
        flex
        items-center
        justify-center
        h-14
        w-14
        rounded-full
        bg-cyan-500
        text-white
        shadow-xl
        hover:scale-110
        transition-all
        duration-300
      "
    >
      {theme === "dark" ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
}

export default ThemeToggle;

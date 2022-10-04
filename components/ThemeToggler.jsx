import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className='theme-toggler w-8 h-8 rounded-lg flex items-center justify-center hover:ring-2 ring-main transition-all duration-300 focus:outline-none'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label='Toggle Dark Mode'
    >
      {theme === "light" ? (
        <BsFillMoonFill className='text-text w-5 h-5 ' />
      ) : (
        <BsFillSunFill className='text-yellow-300 w-5 h-5' />
      )}
    </button>
  );
};

export default ThemeToggler;

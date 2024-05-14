import { useState, useEffect } from "react";
import { IoSunny, IoMoonSharp } from "react-icons/io5";

const ChangeTheme = () => {
  // dark mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-500 dark:bg-gray-700 focus:outline-none transition-colors duration-300 ease-in-out"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      <div className="relative w-12 h-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-md transition duration-300 ease-in-out">
        {darkMode ? (
          // moon
          <IoMoonSharp className="text-slate-500 dark:text-slate-300 text-2xl" />
        ) : (
          // sun
          <IoSunny className="text-yellow-500 dark:text-yellow-300 text-2xl" />
        )}
      </div>
    </button>
  );
};

export default ChangeTheme;

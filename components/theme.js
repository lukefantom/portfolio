import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import styles from "./ProjectContainer/projectContainer.module.css";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as farLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as fasLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Checks if user has previously set a theme on the site
      // Enables theme preference based on user preference
      let themePref = localStorage.getItem("themePref");
      if (themePref) {
        setTheme(themePref);
        return;
      }

      // Checks if user has a local system color scheme
      // Enables theme preference based on system preference
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme("dark")
        : setTheme("light");
    }

    function darkModeListener(event) {
      if (event.matches) {
        setTheme("dark");
        return;
      }
      setTheme("light");
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", darkModeListener);

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", darkModeListener);
  }, [mounted]);

  function handleThemeChange() {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("themePref", theme === "light" ? "dark" : "light");
  }

  if (!mounted) return null;

  return (
    <div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className={cn(
          "order-2 md:order-3 focus:outline-none",
          styles.growButton
        )}
        onClick={handleThemeChange}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {theme === "dark" ? (
          <FontAwesomeIcon
            icon={fasMoon}
            className={cn(styles.darkModeIcon, styles.rotateVertical)}
          />
        ) : (
          <FontAwesomeIcon
            icon={farLightbulb}
            className={cn(styles.darkModeIcon, styles.rotateHorizontal)}
          />
        )}
        {/* </svg> */}
      </button>
    </div>
  );
};

export default ThemeChanger;

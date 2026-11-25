"use client";

import { useEffect, useState } from "react";

import { themeStorageKey as STORAGE_KEY } from "../lib/theme";

type Theme = "light" | "dark" | "system";

const options: { value: Theme; label: string }[] = [
  { value: "light", label: "Clair" },
  { value: "dark", label: "Sombre" },
  { value: "system", label: "Système" },
];

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
  try {
    if (theme === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page only.
  }
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = document.documentElement.dataset.theme;
    // Sync the buttons with the theme the init script already applied.
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);

  return (
    <div className="theme-switch" role="group" aria-label="Thème">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={theme === option.value}
          onClick={() => {
            setTheme(option.value);
            applyTheme(option.value);
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

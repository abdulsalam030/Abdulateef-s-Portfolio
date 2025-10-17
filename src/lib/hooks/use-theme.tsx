'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggle: () => void;
  enableDarkMode: () => void;
  disableDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggle: () => {},
  enableDarkMode: () => {},
  disableDarkMode: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ ensures DOM is ready

  // Run only after mount (client side)
  useEffect(() => {
    setMounted(true);

    // safely access localStorage
    const stored = localStorage.getItem('darkMode');
    if (stored) {
      setIsDarkMode(JSON.parse(stored));
    } else {
      // default to dark mode if not stored
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return; // avoid running during SSR

    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

    // DOM manipulation safely (only after mount)
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode, mounted]);

  const toggle = useCallback(() => setIsDarkMode((prev) => !prev), []);
  const enableDarkMode = useCallback(() => setIsDarkMode(true), []);
  const disableDarkMode = useCallback(() => setIsDarkMode(false), []);

  // ✅ Avoid hydration mismatch — render children only after mount
  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggle, enableDarkMode, disableDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

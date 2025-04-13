"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Hydration için mounted kontrolü
  useEffect(() => {
    setMounted(true);
    console.log("Theme toggle mounted"); // Debug log
  }, []);

  useEffect(() => {
    console.log("Image paths:", {
      dark: "/img/dark.png",
      light: "/img/light.png",
    });
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  const toggleTheme = () => {
    console.log("Toggling theme from:", theme); // Debug log
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      className={cn(
        "fixed top-4 right-4 z-50 cursor-pointer transition-all duration-300",
        className
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
    >
      {/* Temanın durumuna göre ilgili resmi göster */}
      <div className="relative w-16 h-8">
        <Image
          src={isDark ? "/img/dark.png" : "/img/light.png"}
          alt={isDark ? "Dark Theme" : "Light Theme"}
          width={64}
          height={32}
          className="transition-opacity duration-300"
          priority
        />
      </div>
    </div>
  );
}

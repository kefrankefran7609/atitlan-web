"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme" // This adds data-theme="dark" to the <html> tag
      defaultTheme="light" // Since your current variables are Dark by default
      disableTransitionOnChange
      enableSystem={true}
    >
      {children}
    </ThemeProvider>
  );
}

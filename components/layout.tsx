import type { Metadata } from "next";
import { profile } from "@/data/content";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { Chatbot } from "@/components/Chatbot";
import "../app/globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.thesis,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint so the correct theme class is set before
            hydration — avoids a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Fetched at runtime in the browser, not at build time — keeps the
            build itself free of any external network dependency. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
        <Chatbot />
      </body>
    </html>
  );
}

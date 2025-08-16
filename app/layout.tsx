import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { UserProvider } from "@/components/providers/user-provider";


export const metadata: Metadata = {
  title: "QikNotes",
  description: "Fast, modern, and customizable note-taking for everyone",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon_dark.svg",
        href: "/icon_dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon_light.svg",
        href: "/icon_light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
      >
        <ConvexClientProvider>
          <UserProvider>
          <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
          storageKey="qiknotes-theme"
          >
            {children}
          </ThemeProvider>
          </UserProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    default: "Egecan Serin — Design Engineer",
    template: `%s | Egecan Serin`,
  },
  description:
    "Design Engineer and Frontend Developer specializing in modern web applications and user interfaces",
  metadataBase: new URL("https://ser.in"),
  keywords: [
    "Design Engineer",
    "Frontend Developer",
    "Web Development",
    "UI/UX Design",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [
    {
      name: "Egecan Serin",
      url: "https://ser.in",
    },
  ],
  creator: "Egecan Serin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ser.in",
    title: "Egecan Serin — Design Engineer",
    description:
      "Design Engineer and Frontend Developer specializing in modern web applications and user interfaces",
    siteName: "Egecan Serin",
    images: [
      {
        url: "https://ser.in/og.jpg",
        width: 1200,
        height: 630,
        alt: "Egecan Serin — Design Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Egecan Serin — Design Engineer",
    description:
      "Design Engineer and Frontend Developer specializing in modern web applications and user interfaces",
    creator: "@nonzeroexitcode",
    images: ["https://ser.in/og.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "https://ser.in/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console doğrulama kodu
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Bababoey!");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-karma antialiased h-screen w-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

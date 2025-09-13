import type { Metadata } from "next"; 
import "./globals.css";
import TopBar from "./topbar";
import { RefsProvider } from "./RefsContext";

export const metadata: Metadata = {
  title: "commitPersonality | Analyze Your GitHub Commit Personality",
  description: "Discover your GitHub commit personality with fun insights, stats, and memes based on your commit history.",
  keywords: ["GitHub", "commits", "developer personality", "commit analysis", "fun stats", "commit memes"],
  icons: {
    icon: "/gclogo.png",       
    shortcut: "/gclogo.png",
    apple: "/gclogo.png",
  },
 
  alternates: {
    canonical: "https://commitpersonality.com",
  },

 
  openGraph: {
    title: "commitPersonality",
    description: "Your GitHub commits reveal your personality. Find out yours!",
    url: "https://commitpersonality.com",
    siteName: "commitPersonality",
    images: [
      {
        url: "https://commitpersonality.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "commitPersonality Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

 
  twitter: {
    card: "summary_large_image",
    title: "commitPersonality",
    description: "Your commits tell a story — discover your GitHub personality.",
    images: ["https://commitpersonality.com/og-image.png"],
    creator: "@yourTwitterHandle",
  }
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`scrollbarMC`}
      > 
        <RefsProvider>
        <TopBar />
        {children} 
        </RefsProvider>
      </body>
    </html>
  );
}

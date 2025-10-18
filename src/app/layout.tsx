import type { Metadata } from "next";
import { Work_Sans, Comic_Neue } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const comicNeue = Comic_Neue({
  variable: "--font-meme",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ironic Meme Generator",
  description:
    "Overlay risky or cringey confessions on stark backgrounds to soften the blow with humor.",
  icons: {
    icon: ["/images/kevinhart.png", "/ironic/images/kevinhart.png"],
    shortcut: ["/images/kevinhart.png", "/ironic/images/kevinhart.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${comicNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

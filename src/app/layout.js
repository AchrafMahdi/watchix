import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Watchix | Discover & Search Movies",
    template: "%s | Watchix",
  },
  description:
    "Uncover a world of movies with Watchix. Search through detailed movie information, discover hidden gems, and keep up with new releases. Perfect for movie lovers seeking in-depth insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

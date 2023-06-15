import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "A Portfolio Website developed by Ayush Kapoor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-neutral-700 dark:text-white">{children}</body>
    </html>
  );
}

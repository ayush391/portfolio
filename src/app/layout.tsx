import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ViewTransition from "./components/view-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush- Portfolio Website",
  description: "A Portfolio Website developed by Ayush Kapoor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-neutral-700 dark:text-white">
        <ViewTransition>{children}</ViewTransition>
      </body>
    </html>
  );
}

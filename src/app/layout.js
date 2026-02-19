import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ayanshu Innovations Pvt. Ltd.',
  description: 'Where Ideas Transform Into Intelligent Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ADD YOUR FONT HERE */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}

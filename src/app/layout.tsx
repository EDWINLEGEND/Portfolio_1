import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// Import Poppins font with specific weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Edwin Shaju | UI/UX Designer & Frontend Developer",
  description: "Portfolio of Edwin Shaju, a UI/UX Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}

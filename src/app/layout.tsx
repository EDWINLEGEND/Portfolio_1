import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// Import Poppins font with specific weights
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Edwin Shaju | UI/UX Designer & Frontend Developer",
  description: "Portfolio of Edwin Shaju, a UI/UX Designer & Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">
        {children}
      </body>
    </html>
  );
}

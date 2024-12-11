import localFont from "next/font/local";
import { Work_Sans } from '@next/font/google';
import "./globals.css";


// Importing a Google Font
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: "--font-work-sans",
});


export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

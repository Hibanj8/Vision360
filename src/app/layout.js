import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vision360°',
  icons: { icon: "/logo_.ico" },
  description: 'Revolutionize your web development. Elevate your websites performance. Tech Innovate DevWeb is an advanced cloud solution tailored for developers, empowering them to construct and launch cutting-edge digital solutions with ease and efficiency. Unleash the full potential of your web architecture with Tech Innovate DevWeb'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-[#ACBEE2] from-10% via-[#C287BB] via-40% to-[#F9CDC3] to-90% min-h-screen flex flex-col`} >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}

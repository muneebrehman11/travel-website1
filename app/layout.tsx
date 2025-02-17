import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Wrapper from "./components/shared/Wrapper";
import Footer from "./components/widget/footer";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,}: Readonly<{children: React.ReactNode;}>)
  {
    return (
    <html lang="en">
      <body className={`bg-yellow-100${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
      <Wrapper>
        {children}
        <Footer/>
        </Wrapper>
    
      </body>
    </html>
  );
}

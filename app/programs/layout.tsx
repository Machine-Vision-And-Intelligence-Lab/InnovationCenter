import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Innovation Center",
  description: "Innovation Center of NIT Jamshedpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed w-full z-30"><Navbar /></div>
      <div className="pt-16.5">{children}</div>
      <Footer />
    </>
  );
}

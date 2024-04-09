import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Right Choice Driving School | Learn to Drive with Confidence",
  description:
    "Get your driver&#39;s license with the best driving school in Sydney. Affordable, experienced and professional driving instructors. Book online today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Container>{children}</Container>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InterestAndAwards from "@/components/InterestAndAward";
import Portfolio from "@/components/Portfolio";
import SocialTradingSection from "@/components/SocialTradingSection";
import CopyTopInvestors from "@/components/CopyTopInvestors";
import AcademySection from "@/components/AcademySection";
import FeatureCarousel from "@/components/FeatureCarousel";
import InstitutionsSection from "@/components/InstitutionsSection";
import TrustedSection from "@/components/TrustedWorldwideSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "eToro Clone",
  description: "Clone of eToro landing page with Next.js & Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero/>
        <InterestAndAwards/>
        <Portfolio/>
        <SocialTradingSection/>
        <CopyTopInvestors/>
        <AcademySection/>
        <FeatureCarousel/>
        <InstitutionsSection/>
        <TrustedSection/>
        <SponsorshipSection/>
        <Footer/>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

"use client";

import TrustedTestimonials from "@/components/section/TrustedTestimonials";
import FAQSection from "@/components/section/FAQSection";
import HeroSection from "@/components/section/HeroSection";
import HowItWorksSection from "@/components/section/HowItWorksSection";
import WhyChooseSection from "@/components/section/WhyChooseSection";
import CTASection from "@/components/section/CTASection";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<main className="">
				<HeroSection />
				<HowItWorksSection />
				<WhyChooseSection />
				<TrustedTestimonials />
				<FAQSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}

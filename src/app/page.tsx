"use client";

import TrustedTestimonials from "@/components/section/TrustedTestimonials";
import FAQSection from "@/components/section/FAQSection";
import HeroSection from "@/components/section/HeroSection";
import JoinTheActionSection from "@/components/section/JoinTheActionSection";
import HowItWorksSection from "@/components/section/HowItWorksSection";
import WhyChooseSection from "@/components/section/WhyChooseSection";
import CTASection from "@/components/section/CTASection";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Container from "@/components/custom/container";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<main className="">
				<HeroSection />
				<Container className="mb-18">
					<div className="flex flex-col justify-center items-center">
						<text className="pb-8 lg:text-4xl text-center">
							<span className="text-[#6EFF00] ">LIMITED TIME! </span>
							<span className="text-white font-semibold">
								Get up to <span className="text-primary">N1,000</span> instantly in wallet cash to play!
							</span>
						</text>

						<a href="#" className="inline-block mx-auto">
							<button className="bg-primary hover:bg-primary/90  text-black font-bold py-3 px-10 rounded-md text-lg shadow-md transition-all">
								GET YOURS
							</button>
						</a>
					</div>
				</Container>

				<JoinTheActionSection />
				{/* Join the Action */}
				<HowItWorksSection />
				<TrustedTestimonials />
				<FAQSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}

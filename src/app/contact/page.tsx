import FAQSection from "@/components/section/FAQSection";
import Header from "@/components/layout/header";
import Container from "@/components/custom/container";
import { Metadata } from "next";
import ContactSection from "@/components/section/ContactSection";

// Meta
export const metadata: Metadata = {
	title: "Contact Us",
	description: "Contact Us",
};

export default function Contact() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<main className="">
				<ContactSection />
			</main>
		</div>
	);
}

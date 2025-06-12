import Header from "@/components/layout/header";
import { Metadata } from "next";
import ContactSection from "@/components/section/ContactSection";

// Meta
export const metadata: Metadata = {
	title: "Contact Us - Gaffer",
	description: "Contact us for any questions, feedback or assistance",
	icons: { icon: "/icon.png" },
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

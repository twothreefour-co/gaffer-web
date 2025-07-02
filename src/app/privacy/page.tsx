"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Metadata } from "next";

export default function PrivacyPolicy() {
	//
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<main className="">
				<section className="pt-20 pb-20">
					<div className="container mx-auto px-6 lg:px-16 2xl:px-6 xl:max-w-[1320px] ">
						<div className="max-w-3xl mx-auto bg-[#0A0B0D] rounded-xl p-6 lg:px-8 border border-[#303133]">
							<h2 className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight text-center">Privacy Policy</h2>
							<p className="text-gray-350 text-sm mb-8 text-center">
								Your privacy is important to us. This policy explains how Gaffer collects, uses, and protects your information.
							</p>
							<div className="space-y-6 text-gray-300 text-sm">
								<h3 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h3>
								<p>
									We may collect personal information such as your name, email address, and any other information you provide when you use our
									services or contact us.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">2. How We Use Your Information</h3>
								<p>
									Your information is used to provide and improve our services, respond to your inquiries, and communicate updates. We do not sell
									your personal information to third parties.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">3. Data Security</h3>
								<p>We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
								<h3 className="text-xl font-semibold text-white mb-2">4. Cookies</h3>
								<p>
									Gaffer may use cookies and similar technologies to enhance your experience. You can control cookies through your browser settings.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">5. Third-Party Links</h3>
								<p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.</p>
								<h3 className="text-xl font-semibold text-white mb-2">6. Changes to This Policy</h3>
								<p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date.</p>
								<h3 className="text-xl font-semibold text-white mb-2">7. Contact Us</h3>
								<p>
									If you have any questions about this Privacy Policy, please contact us at{" "}
									<a href="mailto:info@gaffer.com" className="text-primary underline">
										info@gaffer.com
									</a>
									.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer showTopRow={false} />
		</div>
	);
}

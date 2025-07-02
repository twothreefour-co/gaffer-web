"use client";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Terms() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Header />
			<main className="">
				<section className="pt-20 pb-20">
					<div className="container mx-auto px-6 lg:px-16 2xl:px-6 xl:max-w-[1320px] ">
						<div className="max-w-3xl mx-auto bg-[#0A0B0D] rounded-xl p-6 lg:px-8 border border-[#303133]">
							<h2 className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight text-center">Terms and Conditions</h2>
							<p className="text-gray-350 text-sm mb-8 text-center">Please read these terms and conditions carefully before using Gaffer.</p>
							<div className="space-y-6 text-gray-300 text-sm">
								<h3 className="text-xl font-semibold text-white mb-2">1. Acceptance of Terms</h3>
								<p>
									By accessing or using Gaffer, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms,
									you must not use our services.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">2. Use of Service</h3>
								<p>
									You agree to use Gaffer only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone
									else's use and enjoyment of the service.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">3. Intellectual Property</h3>
								<p>
									All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and
									hyperlinks are the property of Gaffer or its licensors.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">4. Limitation of Liability</h3>
								<p>
									Gaffer will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or
									inability to use the service.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">5. Changes to Terms</h3>
								<p>
									We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your
									continued use of the service constitutes acceptance of those changes.
								</p>
								<h3 className="text-xl font-semibold text-white mb-2">6. Contact Us</h3>
								<p>
									If you have any questions about these Terms and Conditions, please contact us at{" "}
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

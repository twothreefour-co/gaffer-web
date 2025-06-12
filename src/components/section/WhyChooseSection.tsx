import Container from "@/components/custom/container";
import Image from "next/image";

const WhyChooseSection = () => (
	<Container className="mt-28">
		<section className="">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-14">
					<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Why Choose Gaffer?</h2>
					<p className="text-[#A6A6A6] text-sm max-w-2xl mx-auto">
						GAFFER is more than just fantasy it's where real football strategy meets excitement, competition, and the thrill of winning real cash
						every match week.
					</p>
				</div>
				{/* Features Grid with Central Phone */}
				<div className="relative">
					{/* Central Phone - Hidden on medium screens */}
					<div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
						<Image src="/images/gaffer-app-interface.png" alt="Gaffer App Interface" width={300} height={600} className="mx-auto" />
					</div>
					{/* Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12 lg:gap-x-0">
						{/* Top Row */}
						<div className="lg:col-span-1 flex justify-center lg:justify-end">
							<div className="md:text-right max-w-xs">
								<img src="/images/icons/one_simple_rule.png" alt="One Simple Rule" className="w-11 h-11 mb-4 md:ml-auto" />
								<h3 className="text-xl font-semibold mb-2">One Simple Rule</h3>
								<p className="text-gray-350 text-sm">Enter contests and cash out in real-time with no payment barriers for fast transactions.</p>
							</div>
						</div>
						<div className="lg:col-span-1 hidden lg:block"></div>
						<div className="lg:col-span-1 flex justify-center lg:justify-start">
							<div className="md:text-left max-w-xs">
								<img src="/images/icons/real_match_contests.png" alt="Real Match Contests" className="w-11 h-11 mb-4 md:mr-auto" />
								<h3 className="text-xl font-semibold mb-2">Real Match Contests</h3>
								<p className="text-gray-350 text-sm">Enter weekly fantasy contests based on real matchweeks.</p>
							</div>
						</div>
						{/* Middle Row */}
						<div className="lg:col-span-1 flex justify-center lg:justify-end">
							<div className="md:text-right max-w-xs">
								<img src="/images/icons/live_stats_scoring.png" alt="Live Stats & Scoring" className="w-11 h-11 mb-4 md:ml-auto" />
								<h3 className="text-xl font-semibold mb-2">Live Stats & Scoring</h3>
								<p className="text-gray-400 text-sm">Track your team's performance in real-time. From transfer to matchweek updates.</p>
							</div>
						</div>
						<div className="lg:col-span-1 hidden lg:block"></div>
						<div className="lg:col-span-1 flex justify-center lg:justify-start">
							<div className="md:text-left max-w-xs">
								<img src="/images/icons/fast_entry_payouts.png" alt="Fast entry & payouts" className="w-11 h-11 mb-4 md:mr-auto" />
								<h3 className="text-xl font-semibold mb-2">Fast entry & payouts</h3>
								<p className="text-gray-400 text-sm">No delays or annoying requirements. Just fast your team, compete instantly.</p>
							</div>
						</div>
						{/* Bottom Row */}
						<div className="lg:col-span-1 flex justify-center lg:justify-end">
							<div className="md:text-right max-w-xs">
								<img src="/images/icons/private_contest_friends.png" alt="Private Contest with Friends" className="w-11 h-11 mb-4 md:ml-auto" />
								<h3 className="text-xl font-semibold mb-2">Private Contest with Friends</h3>
								<p className="text-gray-400 text-sm">Create private contests with friends and family for more personalized competition.</p>
							</div>
						</div>
						<div className="lg:col-span-1 hidden lg:block"></div>
						<div className="lg:col-span-1 flex justify-center lg:justify-start">
							<div className="md:text-left max-w-xs">
								<img src="/images/icons/secured_wallet.png" alt="Secured Wallet" className="w-11 h-11 mb-4 md:mr-auto" />
								<h3 className="text-xl font-semibold mb-2">Secured Wallet</h3>
								<p className="text-gray-400 text-sm">GAFFER is designed to be smooth and responsive across all devices in a tap away.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Container>
);

export default WhyChooseSection;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Container from "@/components/custom/container";
import { NigeriaFlag, USAFlag } from "@/assets/icons";

export default function Home() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [countryCode, setCountryCode] = useState("+234");

	const handleGetAppLink = () => {
		// Handle app link generation
		console.log("Getting app link for:", countryCode + phoneNumber);
	};

	const getCountryFlag = (countryCode: string) => {
		if (countryCode === "+234") return <NigeriaFlag />;
		if (countryCode === "+1") return <USAFlag />;
	};

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Header */}
			<header className="">
				<Container className="border-b border-gray-700">
					<div className="flex items-center justify-between py-5">
						<a href="/" className="">
							<img src="/images/logo.png" alt="Gaffer Logo" className="h-7" />
						</a>
						<Button className="bg-primary text-black hover:bg-primary/90 font-semibold py-5 px-6">Get App Link</Button>
					</div>
				</Container>
			</header>

			<main className="py-12 lg:py-20">
				{/* Hero Section */}
				<Container>
					<div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
						{/* Left Content */}
						<div className="space-y-8">
							<div className="space-y-6">
								<h1 className="text-4xl lg:text-6xl font-[Obviously] font-medium leading-tight">
									Build Your <span className="text-primary">Fantasy</span> Team
								</h1>
								<p className="text-gray-300 lg:text-lg max-w-lg">Play fantasy football based on real matches. Join contests and cash out instantly</p>
							</div>

							{/* Phone Input Form */}
							<div className="space-y-4 my-8 lg:mt-10 lg:mb-16">
								<p className="text-gray-400 text-xs lg:text-sm">Enter your phone number to receive download link</p>

								<div className="flex items-center gap-2">
									<div className="flex items-center max-w-md rounded-[10px] px-4 py-1" style={{ borderWidth: "0.4px", borderColor: "#5C5C5C" }}>
										<Select value={countryCode} onValueChange={setCountryCode}>
											<SelectTrigger className="bg-transparent border-none p-0 focus:ring-0 focus:outline-none">
												<div className="flex items-center lg:gap-3 ">
													{/* Flag image */}
													<span className="hidden lg:block">{getCountryFlag(countryCode)}</span>
													<span className="text-[#D9D9D9] text-xs lg:text-base">{countryCode}</span>
												</div>
											</SelectTrigger>
											<SelectContent className="bg-gray-900 border-gray-700">
												<SelectItem value="+234" className="flex items-center gap-2 text-white">
													{getCountryFlag("+234")}
													+234
												</SelectItem>
												<SelectItem value="+1" className="flex items-center gap-2 text-white">
													{getCountryFlag("+1")}
													+1
												</SelectItem>
											</SelectContent>
										</Select>

										{/* Divider */}
										<div className="h-full w-[1px] bg-gray-100"></div>

										<Input
											type="tel"
											placeholder="Enter phone number"
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
											className="flex-1 px-2 text-sm lg:text-base bg-transparent border-none text-white placeholder:text-[#5C5C5C] !ring-0 ring-transparent outline-transparent outline-none ml-0"
										/>
									</div>
									<Button className="bg-primary text-black hover:bg-primary/90 text-xs lg:text-sm font-semibold py-5 lg:px-6">Get App Link</Button>
								</div>
							</div>

							{/* App Store Buttons */}
							<div className="flex gap-4">
								<a href="http://" target="_blank" rel="noopener noreferrer">
									<img src="/images/download-on-app-store.png" style={{ width: "100%", height: "45px" }} alt="Get App Link" />
								</a>

								<a href="http://" target="_blank" rel="noopener noreferrer">
									<img src="/images/get-on-google-play.png" style={{ width: "100%", height: "45px" }} alt="Get App Link" />
								</a>
							</div>
						</div>

						{/* Right Content - Mobile App Showcase */}
						<div className="relative mt-4 lg:mt-0">
							<div className="relative z-10">
								<Image src="/images/hero-image.png" alt="Gaffer Mobile App" width={400} height={600} className="mx-auto w-[86%] max-w-[540px]" />
							</div>
						</div>
					</div>
				</Container>

				{/* How it works Section */}
				<Container className="mt-28">
					<div className="space-y-8">
						<div className="flex justify-between items-center gap-8">
							<h2 className="lg:text-4xl text-xl font-medium leading-tight max-w-xl">
								One Simple Rule. <br /> 1 Club = 1 Player Allowed.
							</h2>
							<p className="text-gray-300 lg:text-sm text-xs">No Budgets, No Player Price.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
							{/* Card 1: Select Your Team */}
							<div className="bg-[#0A0B0D] p-4 pb-0 flex flex-col min-h-[420px]  rounded-[10px] outline-1 outline-color-grey-19">
								<h3 className="text-lg font-medium mb-2">Select Your Team</h3>
								<p className="text-[#A6A6A6] text-sm leading-5 mb-6">
									Choose your dream squad using real players from upcoming matchweek fixtures. Pick your formation, set your captain, and finalize
									your lineup before kick-off.
								</p>
								<img src="/images/select-team.png" alt="Team Formation" className="w-full max-w-xs mx-auto mt-auto" />
							</div>

							{/* Card 2: Join Contests */}
							<div className="bg-[#0A0B0D] p-4 pb-0 flex flex-col min-h-[420px]  rounded-[10px] outline-1 outline-color-grey-19">
								<h3 className="text-lg font-medium mb-2">Join Contests</h3>
								<p className="text-[#A6A6A6] text-sm leading-5 mb-6">
									Enter public or private contests with a set entry fee. Compete against others for a chance to top the leaderboard and win real cash
									prizes.
								</p>
								<img src="/images/join-contest.png" alt="Team Formation" className="w-full max-w-xs mx-auto mt-auto b" />
							</div>

							{/* Card 3: Win Cash $$$ */}
							<div className="bg-[#0A0B0D] p-4 pb-0 flex flex-col min-h-[420px]  rounded-[10px] outline-1 outline-color-grey-19">
								<h3 className="text-lg font-medium mb-2">Win Cash $$$</h3>
								<p className="text-[#A6A6A6] text-sm leading-5 mb-6">
									Watch your team earn points from player performance. Track your position on the leaderboard in real-time and cash out your winnings
									if you finish in a top spot.
								</p>
								<img src="/images/win-cash.png" alt="Team Formation" className="w-full max-w-xs mx-auto mt-auto" />
							</div>
						</div>
					</div>
				</Container>

				{/* Why Choose Gaffer Section */}
				<Container className="mt-28">
					<section className="">
						<div className="max-w-7xl mx-auto">
							{/* Section Header */}
							<div className="text-center mb-16">
								<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Why Choose Gaffer?</h2>
								<p className="text-[#A6A6A6] text-sm max-w-2xl mx-auto">
									GAFFER is more than just fantasy it’s where real football strategy meets excitement, competition, and the thrill of winning real
									cash every match week.
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
											<p className="text-gray-350 text-sm">
												Enter contests and cash out in real-time with no payment barriers for fast transactions.
											</p>
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
			</main>
		</div>
	);
}

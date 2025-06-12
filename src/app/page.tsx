"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Container from "@/components/custom/container";
import { NigeriaFlag, USAFlag } from "@/assets/icons";
import CustomButton from "@/components/custom/custom-button";
import TrustedTestimonials from "@/components/section/TrustedTestimonials";
import FAQSection from "@/components/section/FAQSection";
import GetAppForm from "@/components/get-app-form";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			{/* Header */}
			<header className="">
				<Container className="border-b-[0.2px]" style={{ borderColor: "rgba(66,66,66,0.5)" }}>
					<div className="flex items-center justify-between py-5">
						<a href="/" className="">
							<img src="/images/logo.png" alt="Gaffer Logo" className="h-7" />
						</a>
						<CustomButton variant="primary">Get App Link</CustomButton>
					</div>
				</Container>
			</header>

			<main className="pt-12 lg:pt-20">
				{/* Hero Section */}
				<Container>
					<div className="grid lg:grid-cols-2 gap-12 items-center mx-auto">
						{/* Left Content */}
						<div className="space-y-8">
							<div className="space-y-6">
								<h1 className="text-4xl lg:text-6xl font-[Obviously] font-medium leading-tight">
									Build Your <span className="text-primary">Fantasy</span> Team
								</h1>
								<p className="text-gray-300 lg:text-lg max-w-lg">Play fantasy football based on real matches. Join contests and cash out instantly</p>
							</div>

							{/* Phone Input Form */}
							<div className="space-y-4 my-10 lg:mt-10 lg:mb-16">
								<p className="text-gray-350 text-xs lg:text-sm">Enter your phone number to receive download link</p>
								<GetAppForm />
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
							<img
								src="/images/hero-image.png"
								alt="Gaffer Mobile App"
								width={400}
								height={600}
								className="mx-auto lg:mr-0 w-full lg:w-[86%] max-w-[540px]"
							/>
						</div>
					</div>
				</Container>

				{/* How it works Section */}
				<Container className="lg:mt-28 mt-18">
					<div className="">
						<div className="flex justify-between items-center gap-8">
							<h2 className="lg:text-4xl text-xl font-medium leading-tight max-w-xl">
								One Simple Rule. <br /> 1 Club = 1 Player Allowed.
							</h2>
							<p className="text-gray-300 lg:text-sm text-xs">No Budgets, No Player Price.</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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
							<div className="text-center mb-14">
								<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Why Choose Gaffer?</h2>
								<p className="text-[#A6A6A6] text-sm max-w-2xl mx-auto">
									GAFFER is more than just fantasy it's where real football strategy meets excitement, competition, and the thrill of winning real
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

				{/* Trusted Section */}
				<Container className="mt-28">
					<TrustedTestimonials />
				</Container>

				{/* FAQ Section */}
				<Container className="mt-28">
					<FAQSection />
				</Container>

				{/* CTA Section */}
				<section className="overflow-hidden bg-[#0A0B0D] mt-28">
					<Container className="relative overflow-hidden">
						<div className="flex flex-col lg:flex-row gap-8 justify-between items-center mx-auto">
							{/* Left Content */}
							<div className="py-20 lg:w-1/2">
								<div className="mb-12">
									<h1 className="text-4xl xl:text-5xl font-[Obviously] font-semibold leading-tight lg:leading-16 max-w-xl">
										Ready to Build <span className="text-primary">Your Squad</span> and Win Big?
									</h1>
									<p className="text-gray-300 lg:text-lg max-w-lg mt-6">
										Play fantasy football based on real matches. Join contests and cash out instantly
									</p>
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

							{/* Right Content */}
							<div className="lg:mt-0">
								<img
									src="/images/cta-image.png"
									alt="Gaffer Mobile App"
									width={400}
									height={600}
									className="w-full md:px-8 mt-[-50px] lg:absolute max-w-[600px] h-auto lg:mt-auto lg:w-[48%] lg:px-0 lg:m-0 top-0 right-0 bottom-0 mx-auto lg:mr-6 xl:w-auto xl:h-full"
								/>
							</div>
						</div>
					</Container>
				</section>

				{/* Footer Section */}
				<footer className="pt-24">
					<Container>
						<div className="">
							{/* Top Row */}
							<div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 pb-8">
								<div className="">
									<a href="/" className="">
										<img src="/images/logo.png" alt="Gaffer Logo" className="h-8" />
									</a>
									<p className="text-gray-350 text-sm mt-4">
										Play fantasy football based on real matches.
										<br />
										Join contests, and cash out instantly
									</p>
								</div>

								{/* Phone Input CTA */}
								<div className="space-y-4 my-2 lg:my-4">
									<p className="text-[#D9D9D9] text-xs lg:text-base">Enter your phone number to receive download link</p>
									<GetAppForm />
								</div>
							</div>

							{/* Divider */}
							<div className="border-t border-[#232323] mt-6"></div>

							{/* Bottom Row */}
							<div className="py-12 lg:py-4 flex flex-col md:flex-row justify-between items-center gap-4">
								<div className="flex gap-8 text-gray-350 text-sm lg:text-base">
									<a href="#" className="hover:underline">
										Privacy Policy
									</a>
									<a href="#" className="hover:underline">
										Terms and Conditions
									</a>
								</div>

								<div className="text-gray-350 text-sm lg:text-base text-center md:text-left py-4">All rights reserved@Gaffer2025</div>

								<div className="flex gap-3">
									<a href="#" className="bg-primary rounded-full w-9 h-9 flex items-center justify-center text-black" aria-label="Facebook">
										<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 25" fill="none">
											<g clipPath="url(#clip0_2724_5004)">
												<path
													d="M12 2.57178C6.477 2.57178 2 7.04878 2 12.5718C2 17.5628 5.657 21.6998 10.438 22.4508V15.4618H7.898V12.5718H10.438V10.3688C10.438 7.86278 11.93 6.47878 14.215 6.47878C15.309 6.47878 16.453 6.67378 16.453 6.67378V9.13378H15.193C13.95 9.13378 13.563 9.90478 13.563 10.6958V12.5718H16.336L15.893 15.4618H13.563V22.4508C18.343 21.7008 22 17.5618 22 12.5718C22 7.04878 17.523 2.57178 12 2.57178Z"
													fill="black"
												/>
											</g>
											<defs>
												<clipPath id="clip0_2724_5004">
													<rect width={24} height={24} fill="white" transform="translate(0 0.571777)" />
												</clipPath>
											</defs>
										</svg>
									</a>

									<a href="#" className="bg-primary rounded-full w-9 h-9 flex items-center justify-center text-black" aria-label="Twitter">
										<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 25" fill="none">
											<g clipPath="url(#clip0_2724_5009)">
												<path
													d="M22.1621 6.2277C21.3986 6.5654 20.589 6.78718 19.7601 6.8857C20.6338 6.36314 21.2878 5.54072 21.6001 4.5717C20.7801 5.0597 19.8811 5.4017 18.9441 5.5867C18.3147 4.91328 17.4804 4.46667 16.571 4.31629C15.6616 4.16591 14.728 4.32019 13.9153 4.75516C13.1026 5.19012 12.4564 5.88139 12.0772 6.7215C11.6979 7.56161 11.6068 8.50348 11.8181 9.4007C10.1552 9.31736 8.52838 8.88523 7.04334 8.13237C5.55829 7.37951 4.24818 6.32275 3.19805 5.0307C2.82634 5.66915 2.63101 6.39493 2.63205 7.1337C2.63205 8.5837 3.37005 9.8647 4.49205 10.6147C3.82806 10.5938 3.17869 10.4145 2.59805 10.0917V10.1437C2.59825 11.1094 2.93242 12.0453 3.5439 12.7928C4.15538 13.5402 5.00653 14.0532 5.95305 14.2447C5.33667 14.4117 4.69036 14.4364 4.06305 14.3167C4.32992 15.1479 4.85006 15.8749 5.55064 16.3958C6.25123 16.9167 7.09718 17.2055 7.97005 17.2217C7.10253 17.903 6.10923 18.4067 5.04693 18.7039C3.98464 19.0011 2.87418 19.086 1.77905 18.9537C3.69075 20.1831 5.91615 20.8358 8.18905 20.8337C15.8821 20.8337 20.0891 14.4607 20.0891 8.9337C20.0891 8.7537 20.0841 8.5717 20.0761 8.3937C20.8949 7.80187 21.6017 7.06872 22.1631 6.2287L22.1621 6.2277Z"
													fill="black"
												/>
											</g>
											<defs>
												<clipPath id="clip0_2724_5009">
													<rect width={24} height={24} fill="white" transform="translate(0 0.571777)" />
												</clipPath>
											</defs>
										</svg>
									</a>

									<a href="#" className="bg-primary rounded-full w-9 h-9 flex items-center justify-center text-black" aria-label="Instagram">
										<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 25 25" fill="none">
											<g clipPath="url(#clip0_2724_5014)">
												<path
													d="M12.8125 2.38672C15.5295 2.38672 15.8685 2.39672 16.9345 2.44672C17.9995 2.49672 18.7245 2.66372 19.3625 2.91172C20.0225 3.16572 20.5785 3.50972 21.1345 4.06472C21.643 4.56461 22.0365 5.16931 22.2875 5.83672C22.5345 6.47372 22.7025 7.19972 22.7525 8.26472C22.7995 9.33072 22.8125 9.66972 22.8125 12.3867C22.8125 15.1037 22.8025 15.4427 22.7525 16.5087C22.7025 17.5737 22.5345 18.2987 22.2875 18.9367C22.0372 19.6045 21.6436 20.2093 21.1345 20.7087C20.6345 21.217 20.0298 21.6105 19.3625 21.8617C18.7255 22.1087 17.9995 22.2767 16.9345 22.3267C15.8685 22.3737 15.5295 22.3867 12.8125 22.3867C10.0955 22.3867 9.7565 22.3767 8.6905 22.3267C7.6255 22.2767 6.9005 22.1087 6.2625 21.8617C5.59483 21.6112 4.99003 21.2177 4.4905 20.7087C3.98191 20.2089 3.58843 19.6042 3.3375 18.9367C3.0895 18.2997 2.9225 17.5737 2.8725 16.5087C2.8255 15.4427 2.8125 15.1037 2.8125 12.3867C2.8125 9.66972 2.8225 9.33072 2.8725 8.26472C2.9225 7.19872 3.0895 6.47472 3.3375 5.83672C3.58774 5.1689 3.9813 4.56404 4.4905 4.06472C4.99017 3.55595 5.59493 3.16245 6.2625 2.91172C6.9005 2.66372 7.6245 2.49672 8.6905 2.44672C9.7565 2.39972 10.0955 2.38672 12.8125 2.38672ZM12.8125 7.38672C11.4864 7.38672 10.2146 7.9135 9.27697 8.85118C8.33928 9.78887 7.8125 11.0606 7.8125 12.3867C7.8125 13.7128 8.33928 14.9846 9.27697 15.9223C10.2146 16.8599 11.4864 17.3867 12.8125 17.3867C14.1386 17.3867 15.4104 16.8599 16.348 15.9223C17.2857 14.9846 17.8125 13.7128 17.8125 12.3867C17.8125 11.0606 17.2857 9.78887 16.348 8.85118C15.4104 7.9135 14.1386 7.38672 12.8125 7.38672ZM19.3125 7.13672C19.3125 6.8052 19.1808 6.48726 18.9464 6.25284C18.712 6.01841 18.394 5.88672 18.0625 5.88672C17.731 5.88672 17.413 6.01841 17.1786 6.25284C16.9442 6.48726 16.8125 6.8052 16.8125 7.13672C16.8125 7.46824 16.9442 7.78618 17.1786 8.0206C17.413 8.25502 17.731 8.38672 18.0625 8.38672C18.394 8.38672 18.712 8.25502 18.9464 8.0206C19.1808 7.78618 19.3125 7.46824 19.3125 7.13672ZM12.8125 9.38672C13.6081 9.38672 14.3712 9.70279 14.9338 10.2654C15.4964 10.828 15.8125 11.5911 15.8125 12.3867C15.8125 13.1824 15.4964 13.9454 14.9338 14.508C14.3712 15.0706 13.6081 15.3867 12.8125 15.3867C12.0169 15.3867 11.2538 15.0706 10.6912 14.508C10.1286 13.9454 9.8125 13.1824 9.8125 12.3867C9.8125 11.5911 10.1286 10.828 10.6912 10.2654C11.2538 9.70279 12.0169 9.38672 12.8125 9.38672Z"
													fill="black"
												/>
											</g>
											<defs>
												<clipPath id="clip0_2724_5014">
													<rect width={24} height={24} fill="white" transform="translate(0.8125 0.386719)" />
												</clipPath>
											</defs>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</Container>
				</footer>
			</main>
		</div>
	);
}

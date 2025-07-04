import Container from "@/components/custom/container";

const HowItWorksSection = () => (
	<Container className="lg:pt-[140px] pt-20" id="how-to-play">
		<div className="">
			<h2 className="text-4xl lg:text-5xl font-bold text-center pb-4">How to Play</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
				{/* Card 1: Select Your Team */}
				<div className="bg-[#0A0B0D] p-4 pb-0 flex flex-col min-h-[420px]  rounded-[10px] outline-1 outline-color-grey-19">
					<h3 className="text-lg font-medium mb-2">Select Your Team</h3>
					<p className="text-[#A6A6A6] text-sm leading-5 mb-6">
						Choose your dream squad using real players from upcoming matchweek fixtures. Pick your formation, set your captain, and finalize your
						lineup before kick-off.
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
						Watch your team earn points from player performance. Track your position on the leaderboard in real-time and cash out your winnings if you
						finish in a top spot.
					</p>
					<img src="/images/win-cash.png" alt="Team Formation" className="w-full max-w-xs mx-auto mt-auto" />
				</div>
			</div>
		</div>
	</Container>
);

export default HowItWorksSection;

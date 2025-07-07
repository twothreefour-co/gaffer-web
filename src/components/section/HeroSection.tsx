import Container from "@/components/custom/container";

const HeroSection = () => (
	<>
		<Container className="pt-10 lg:pt-[65px] text-center">
			<div className="relative flex flex-col items-center justify-start">
				<div className="uppercase text-xs lg:text-lg tracking-widest text-[#ADACB5] mb-4">
					Exclusive Daily Fantasy Soccer
				</div>

				<div className="flex flex-col items-center">
					<div className="flex items-center justify-center gap-2 mb-2">
						<img
							src="/images/icons/football.png"
							alt="Soccer Ball"
							className="hidden lg:inline-block lg:h-24 lg:w-24 absolute lg:relative lg:bottom-[-80px] z-1"
						/>

						<h1 className="text-4xl lg:text-8xl font-bold text-white relative z-1">
							WIN UP TO <span className="text-[#6EFF00]">N10M</span>
							<br /> WEEKLY
						</h1>

						<img
							src="/images/icons/cash-award.png"
							alt="Trophy"
							className="absolute lg:relative h-[60px] w-[60px] lg:h-[125px] lg:w-[125px] inline-block ml-2 top-[-5px] lg:top-[-80px] z-0"
						/>
					</div>
				</div>

				<div className="flex items-center justify-center gap-4" style={{paddingTop: 30}}>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<img
							src="/images/download-on-app-store.png"
							style={{ height: "50px", objectFit: "contain" }}
							alt="App Store"
						/>
					</a>
					<a href="#" target="_blank" rel="noopener noreferrer">
						<img
							src="/images/get-on-google-play.png"
							style={{ height: "50px", objectFit: "contain" }}
							alt="Google Play"
						/>
					</a>
				</div>

				<div className="flex flex-col justify-center items-center" style={{paddingTop: 65}}>
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
			</div>
		</Container>
	</>
);

export default HeroSection;

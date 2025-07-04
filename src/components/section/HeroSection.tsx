import Container from "@/components/custom/container";

const HeroSection = () => (
	<Container className="pt-12 lg:pt-20 text-center">
		<div className="relative flex flex-col items-center justify-center min-h-[70vh]">
			<div className="uppercase text-xs lg:text-lg tracking-widest text-[#ADACB5] mb-4">Exclusive Daily Fantasy Soccer</div>

			<div className="flex flex-col items-center">
				<div className="flex items-center justify-center gap-2 mb-2">
					<img
						src="/images/icons/football.png"
						alt="Soccer Ball"
						className="hidden lg:inline-block lg:h-24 lg:w-24 absolute lg:relative lg:bottom-[-80px] z-1"
					/>

					<h1 className="text-4xl lg:text-8xl font-bold leading-tight text-white relative z-1">
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

			<div className="flex items-center justify-center gap-4 py-12">
				<a href="#" target="_blank" rel="noopener noreferrer">
					<img src="/images/download-on-app-store.png" style={{ height: "50px", objectFit: "contain" }} alt="App Store" />
				</a>
				<a href="#" target="_blank" rel="noopener noreferrer">
					<img src="/images/get-on-google-play.png" style={{ height: "50px", objectFit: "contain" }} alt="Google Play" />
				</a>
			</div>
		</div>
	</Container>
);

export default HeroSection;

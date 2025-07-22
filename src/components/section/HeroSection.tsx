import Container from "@/components/custom/container";
import GetAppForm from "@/components/get-app-form";

const HeroSection = () => (
	<Container className="pt-12 lg:pt-20">
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
				{/* <div className="space-y-4 my-10 lg:mt-10 lg:mb-16">
					<p className="text-gray-350 text-xs lg:text-sm">Enter your phone number to receive download link</p>
					<GetAppForm />
				</div> */}
				{/* App Store Buttons */}
				<div className="flex items-center justify-start gap-4">
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<img src="/images/download-on-app-store.png" style={{ height: "56px", objectFit: "contain" }} alt="Get App Link" />
					</a>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<img src="/images/get-on-google-play.png" style={{ height: "56px", objectFit: "contain" }} alt="Get App Link" />
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
);

export default HeroSection;

import Container from "@/components/custom/container";

const CTASection = () => (
	<section className="overflow-hidden bg-[#0A0B0D] mt-28" id="app-link">
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
							<img src="/images/download-on-app-store.png" style={{ height: "56px", objectFit: "contain" }} alt="Get App Link" />
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<img src="/images/get-on-google-play.png" style={{ height: "56px", objectFit: "contain" }} alt="Get App Link" />
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
);

export default CTASection;

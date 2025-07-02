import Container from "@/components/custom/container";
import GetAppForm from "@/components/get-app-form";

const Footer = ({ showTopRow = true }: { showTopRow?: boolean }) => (
	<footer className="pt-24" id="footer">
		<Container>
			<div>
				{/* Top Row */}
				{showTopRow && (
					<div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 pb-8">
						<div>
							<a href="./" className="">
								<img src="/images/logo.png" alt="Gaffer Logo" className="h-8" />
							</a>
							<p className="text-gray-350 text-sm mt-5">
								Play fantasy football based on real matches.
								<br />
								Join contests, and cash out instantly
							</p>
						</div>
						{/* Phone Input CTA */}
						<div className="space-y-4 my-2 lg:my-4">
							<p className="text-[#D9D9D9] text-xs lg:text-base">Enter your phone number to receive download link</p>
							<GetAppForm section="footer" />
						</div>
					</div>
				)}

				{/* Divider */}
				<div className="border-t border-[#232323] mt-6"></div>
				{/* Bottom Row */}
				<div className="py-12 lg:py-4 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex gap-6 text-gray-350 text-sm lg:text-base">
						<a href="./privacy" className="hover:underline">
							Privacy Policy
						</a>
						<a href="./terms" className="hover:underline">
							Terms and Conditions
						</a>
					</div>

					<div className="text-gray-350 text-sm lg:text-base text-center md:text-left py-4">All rights reserved © 2025 Gaffer</div>

					<div className="flex gap-3">
						<a href="#" className="bg-primary rounded-full w-9 h-9 flex items-center justify-center text-black" aria-label="Facebook">
							{/* Facebook SVG */}
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
							{/* Twitter SVG */}
							<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 25" fill="none">
								<g clipPath="url(#clip0_2724_5005)">
									<path
										d="M22 5.9C21.3 6.2 20.6 6.4 19.8 6.5C20.6 6 21.2 5.2 21.5 4.3C20.8 4.8 20 5.1 19.1 5.3C18.4 4.5 17.4 4 16.3 4C14.1 4 12.3 5.8 12.3 8C12.3 8.3 12.3 8.6 12.4 8.8C8.7 8.6 5.4 6.9 3.2 4.3C2.8 5 2.6 5.8 2.6 6.6C2.6 8.1 3.4 9.4 4.6 10.2C4 10.2 3.4 10 2.9 9.7C2.9 9.7 2.9 9.7 2.9 9.8C2.9 12 4.4 13.8 6.4 14.2C6 14.3 5.6 14.4 5.2 14.4C4.9 14.4 4.6 14.4 4.3 14.3C4.9 16.1 6.6 17.3 8.6 17.3C7 18.4 5 19 2.9 19C2.6 19 2.3 19 2 18.9C4 20.1 6.3 20.8 8.7 20.8C16.3 20.8 21.2 14.5 21.2 8.5C21.2 8.3 21.2 8.1 21.2 7.9C22 7.3 22.6 6.6 22 5.9Z"
										fill="black"
									/>
								</g>
								<defs>
									<clipPath id="clip0_2724_5005">
										<rect width={24} height={24} fill="white" transform="translate(0 0.571777)" />
									</clipPath>
								</defs>
							</svg>
						</a>
						<a href="#" className="bg-primary rounded-full w-9 h-9 flex items-center justify-center text-black" aria-label="Instagram">
							{/* Instagram SVG */}
							<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 25" fill="none">
								<g clipPath="url(#clip0_2724_5006)">
									<path
										d="M12 7.2C9.2 7.2 7 9.4 7 12.2C7 15 9.2 17.2 12 17.2C14.8 17.2 17 15 17 12.2C17 9.4 14.8 7.2 12 7.2ZM12 15.2C10.3 15.2 8.9 13.8 8.9 12.2C8.9 10.6 10.3 9.2 12 9.2C13.7 9.2 15.1 10.6 15.1 12.2C15.1 13.8 13.7 15.2 12 15.2ZM18.4 6.6C18.4 7.1 18 7.5 17.5 7.5C17 7.5 16.6 7.1 16.6 6.6C16.6 6.1 17 5.7 17.5 5.7C18 5.7 18.4 6.1 18.4 6.6ZM20.2 8.1C20.2 6.2 18.7 4.7 16.8 4.7H7.2C5.3 4.7 3.8 6.2 3.8 8.1V16.7C3.8 18.6 5.3 20.1 7.2 20.1H16.8C18.7 20.1 20.2 18.6 20.2 16.7V8.1ZM18.2 16.7C18.2 17.5 17.6 18.1 16.8 18.1H7.2C6.4 18.1 5.8 17.5 5.8 16.7V8.1C5.8 7.3 6.4 6.7 7.2 6.7H16.8C17.6 6.7 18.2 7.3 18.2 8.1V16.7Z"
										fill="black"
									/>
								</g>
								<defs>
									<clipPath id="clip0_2724_5006">
										<rect width={24} height={24} fill="white" transform="translate(0 0.571777)" />
									</clipPath>
								</defs>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</Container>
	</footer>
);

export default Footer;

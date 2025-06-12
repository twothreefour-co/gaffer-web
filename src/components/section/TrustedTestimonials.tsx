import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Container from "../custom/container";

const testimonials = [
	{
		text: "The app is smooth, the contests are fair, and payouts are fast. Love it!",
		user: "FPLNaijaBoy",
	},
	{
		text: "Finally a fantasy game based on Nigerian matchdays and real players. I'm hooked",
		user: "FPLNaijaBoy",
	},
	{
		text: "The app is smooth, the contests are fair, and payouts are fast. Love it!",
		user: "FPLNaijaBoy",
	},
	{
		text: "The app is smooth, the contests are fair, and payouts are fast. Love it!",
		user: "FPLNaijaBoy",
	},
];

const TrustedTestimonials = () => {
	const swiperRef = useRef<any>(null);
	return (
		<section className="">
			<Container className="mt-28">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Trusted by over 10,000 Active users</h2>
					<p className="text-[#A6A6A6] text-sm max-w-2xl mx-auto">
						GAFFER is more than just fantasy it's where real football strategy meets excitement, competition, and the thrill of winning real cash
						every matchweek.
					</p>
				</div>

				<Swiper
					onSwiper={(swiper: any) => {
						swiperRef.current = swiper;
					}}
					spaceBetween={30}
					slidesPerView={1}
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="pb-12">
					{testimonials.map((t, i) => (
						<SwiperSlide key={i}>
							<div className="bg-[#0A0B0D] rounded-2xl p-8 flex flex-col justify-between shadow-md min-h-[260px] h-full">
								<div className="mb-5">
									<div className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center mb-4">
										<svg xmlns="http://www.w3.org/2000/svg" width={25} height={26} viewBox="0 0 25 26" fill="none">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M10.0221 7.39665C10.4724 7.03864 10.5473 6.38334 10.1893 5.93302C9.83125 5.4827 9.17597 5.40785 8.72564 5.76587C4.93087 8.78273 4.16554 12.7046 4.16554 16.9979C4.16554 18.7239 5.56466 20.1229 7.29054 20.1229C9.01643 20.1229 10.4155 18.7239 10.4155 16.9979C10.4155 15.2721 9.01643 13.8729 7.29054 13.8729C6.99089 13.8729 6.70108 13.9151 6.42675 13.9939C6.78658 11.3596 7.76698 9.18949 10.0221 7.39665ZM20.8322 16.9979C20.8322 18.7239 19.4331 20.1229 17.7072 20.1229C15.9813 20.1229 14.5822 18.7239 14.5822 16.9979C14.5822 12.7046 15.3475 8.78273 19.1423 5.76587C19.5926 5.40785 20.2479 5.4827 20.606 5.93302C20.964 6.38334 20.8891 7.03864 20.4388 7.39665C18.1837 9.18949 17.2032 11.3596 16.8435 13.9939C17.1177 13.9151 17.4075 13.8729 17.7072 13.8729C19.4331 13.8729 20.8322 15.2721 20.8322 16.9979Z"
												fill="#636363"
											/>
										</svg>
									</div>
									<p className="text-white text-base mb-3">{t.text}</p>
									<div className="flex gap-1 mb-2">
										{Array(5)
											.fill(0)
											.map((_, i) => (
												<span key={i} className="text-[#F5F607] text-2xl">
													★
												</span>
											))}
									</div>
								</div>
								<div className="font-bold text-white text-lg">{t.user}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="flex justify-end gap-4 mt-10">
					<button
						className="w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-2xl text-black opacity-80"
						onClick={() => swiperRef.current?.slidePrev()}
						aria-label="Previous">
						<ChevronLeftIcon className="w-6 h-6" />
					</button>
					<button
						className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center text-2xl text-black opacity-80"
						onClick={() => swiperRef.current?.slideNext()}
						aria-label="Next">
						<ChevronRightIcon className="w-6 h-6" />
					</button>
				</div>
			</Container>
		</section>
	);
};

export default TrustedTestimonials;

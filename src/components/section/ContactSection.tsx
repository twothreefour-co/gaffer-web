"use client";

import Container from "@/components/custom/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { COLORS } from "@/constants/styles";
import CustomButton from "../custom/custom-button";
import CustomInput from "../custom/input-field";
import { EmailIcon, PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "@/assets/icons";

const ContactSection = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(form);
		// TODO: handle form submission
	};

	return (
		<section className="pt-20 pb-20">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
					{/* Left: Contact Info */}
					<div className="flex flex-col justify-between">
						<div>
							<div className="bg-dice-green text-white text-sm text-center font-medium px-6 py-2 rounded-full mb-6" style={{ width: 150 }}>
								Contact Us
							</div>

							<h2 className="text-3xl lg:text-5xl font-semibold mb-4 leading-tight">
								Have Questions or
								<br />
								Need Help?
							</h2>

							<p className="text-gray-350 text-sm max-w-md mb-8">
								We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us
								through any of the following methods:
							</p>

							<div className="space-y-6">
								{/* Email */}
								<div className="flex items-center gap-4">
									<span className="bg-[#141414] rounded-full w-14 h-14 flex items-center justify-center">
										<EmailIcon />
									</span>
									<div>
										<div className="text-xs text-white/50">EMAIL US</div>
										<div className="font-semibold text-base !no-underline">info@gaffer.com</div>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-center gap-4">
									<span className="bg-[#141414] rounded-full w-14 h-14 flex items-center justify-center">
										<PhoneIcon />
									</span>
									<div>
										<div className="text-xs text-white/50">PHONE NUMBER</div>
										<div className="font-semibold text-base !no-underline">+234 92764781</div>
									</div>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div className="mt-12 lg:mt-2">
							<div className="flex items-center gap-4 mb-4">
								<div className="h-[1.4px] w-16 bg-white" />
								<div className="text-white text-base">Connect with us:</div>
							</div>

							<div className="flex gap-3">
								<a href="#" className="bg-[#141414] rounded-[5px] w-10 h-10 flex items-center justify-center text-black" aria-label="Facebook">
									<FacebookIcon />
								</a>
								<a href="#" className="bg-[#141414] rounded-[5px] w-10 h-10 flex items-center justify-center text-black" aria-label="Twitter">
									<TwitterIcon />
								</a>
								<a href="#" className="bg-[#141414] rounded-[5px] w-10 h-10 flex items-center justify-center text-black" aria-label="Instagram">
									<InstagramIcon />
								</a>
							</div>
						</div>
					</div>

					{/* Right: Contact Form */}
					<div className="bg-[#0A0B0D] rounded-xl p-6 lg:px-8 flex flex-col justify-center border border-[#303133]">
						<h3 className="text-2xl lg:text-3xl font-semibold mb-8">
							We'd Love To Hear
							<br />
							From You
						</h3>

						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<CustomInput
									label="Full Name"
									id="name"
									name="name"
									type="text"
									placeholder="Enter full name"
									value={form.name}
									onChange={handleChange}
									required
								/>
								<CustomInput
									label="Email"
									id="email"
									name="email"
									type="email"
									placeholder="Enter Email"
									value={form.email}
									onChange={handleChange}
									required
								/>
							</div>
							<CustomInput
								label="Subject"
								id="subject"
								name="subject"
								type="text"
								placeholder="Enter subject"
								value={form.subject}
								onChange={handleChange}
								required
							/>
							<div className="flex flex-col gap-2">
								<label htmlFor="message" className="text-xs text-gray-350 mb-1">
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="Type your message here"
									value={form.message}
									onChange={handleChange}
									className="px-6 outline-gray-350 text-white placeholder:text-gray-350 rounded-md py-2 min-h-[120px] w-full outline-1 !ring-0 focus-visible:outline-primary"
									required
								/>
							</div>

							<CustomButton type="submit" variant="primary" className="mt-6 py-6 lg:px-12">
								Send Message
							</CustomButton>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ContactSection;

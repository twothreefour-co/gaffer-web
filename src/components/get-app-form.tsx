import React, { useState } from "react";
import CustomButton from "./custom/custom-button";
import { NigeriaFlag, USAFlag } from "@/assets/icons";
import { Input } from "./ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./ui/select";

const GetAppForm = ({ section = "hero" }: { section?: string }) => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [countryCode, setCountryCode] = useState("+234");
	const [message, setMessage] = useState("");
	const [messageColor, setMessageColor] = useState("#22c55e");
	const [loading, setLoading] = useState(false);

	const handleGetAppLink = async () => {
		const TESTING = true;
		const API_URL = "https://test-api.gaffer.vip/api/app-link";
		if (!phoneNumber.trim()) {
			setMessage("Please enter your phone number.");
			setMessageColor("#f87171");
			return;
		}
		setLoading(true);
		setMessage("");
		try {
			const res = await fetch(API_URL, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ phone: countryCode + phoneNumber.replace(/^0+/, "") }),
			});

			if (TESTING) {
				// For testing, always show success
				setMessage("Success! Download link sent to your phone.");
				setMessageColor("#22c55e");
				setPhoneNumber("");
			} else {
				if (res.ok) {
					setMessage("Success! Download link sent to your phone.");
					setMessageColor("#22c55e");
					setPhoneNumber("");
				} else {
					const data = await res.json().catch(() => ({}));
					setMessage(data.message || "Failed to send link. Please try again.");
					setMessageColor("#f87171");
				}
			}
		} catch (e) {
			setMessage("Network error. Please try again.");
			setMessageColor("#f87171");
		}
		setLoading(false);
	};

	const getCountryFlag = (countryCode: string) => {
		if (countryCode === "+234") return <NigeriaFlag />;
		if (countryCode === "+1") return <USAFlag />;
	};

	return (
		<div className="flex items-center gap-2">
			<div className="flex items-center max-w-md rounded-[10px] px-4 py-1" style={{ borderWidth: "0.4px", borderColor: "#5C5C5C" }}>
				<Select value={countryCode} onValueChange={setCountryCode}>
					<SelectTrigger id={`phone-select-${section}`} className="bg-transparent border-none p-0 !ring-0 focus:outline-none">
						<div className="flex items-center lg:gap-3 ">
							{/* Flag image */}
							<span className="hidden lg:block">{getCountryFlag(countryCode)}</span>
							<span className="text-[#D9D9D9] text-xs lg:text-base">{countryCode}</span>
						</div>
					</SelectTrigger>
					<SelectContent className="bg-black border-gray-350">
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
					id={`phone-number-${section}`}
					placeholder="Enter phone number"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					className=" flex-1 px-2 text-sm lg:text-base bg-transparent border-none text-white placeholder:text-[#5C5C5C] !ring-0 ring-transparent outline-transparent outline-none ml-0"
					disabled={loading}
				/>
			</div>
			<CustomButton id={`get-link-btn-${section}`} onClick={handleGetAppLink} disabled={loading}>
				{loading ? "Sending..." : "Get App Link"}
			</CustomButton>
			{message && (
				<div id={`link-message-${section}`} style={{ color: messageColor, marginTop: 8 }}>
					{message}
				</div>
			)}
		</div>
	);
};

export default GetAppForm;
